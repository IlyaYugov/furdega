import { Dispatch, FC, SetStateAction, useState } from "react"
import { Row, Col, InputGroup, Button, Form } from "react-bootstrap"
import { v4 as uuidv4 } from "uuid"

import { mainHomeSectionApi } from "../../../../api/home/main-home-section-api"
import { AdminSectionMode } from "../../../../const/admin"
import {
  MainHomeSectionCreateRequest,
  MainHomeSectionResponse,
} from "../../../../types/home/main"
import { ImageResponse, ImageUpdateRequest } from "../../../../types/image"
import { FormInputEvent } from "../../../../types/utils"
import { fileToBase64 } from "../../../../utils/fileToBase64"

type EditProps = {
  data: MainHomeSectionResponse
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const getDefaultImage = (): ImageResponse => ({
  id: uuidv4(),
  imageUrl: "",
})

const Edit: FC<EditProps> = ({ data, setMode }) => {
  const isDataEmpty = Object.values(data).every((val) => val === null)

  const [header, setHeader] = useState<string>(data.header || "")
  const [image, setImage] = useState<ImageResponse>(
    data.image || getDefaultImage()
  )
  const [newImageBase64, setNewImageBase64] = useState<string>("")

  const onImageChange = async (event: FormInputEvent) => {
    const files = (event.currentTarget as HTMLInputElement).files
    if (!files) return null

    const file = files[0]
    const fileUrl = URL.createObjectURL(file)
    const base64 = await fileToBase64(file)

    setImage({ ...image, imageUrl: fileUrl })
    setNewImageBase64(base64)
  }

  const save = async () => {
    if (isDataEmpty) {
      if (!newImageBase64) return

      const request: MainHomeSectionCreateRequest = {
        header,
        image: {
          id: image.id,
          base64ImageString: newImageBase64,
        },
      }

      await mainHomeSectionApi.create(request)
    } else {
      const imageRequest: ImageUpdateRequest = {
        id: image.id,
        base64ImageString: null,
      }

      if (newImageBase64) imageRequest.base64ImageString = newImageBase64

      await mainHomeSectionApi.update({
        header,
        image: imageRequest,
      })
    }

    setMode(AdminSectionMode.view)
  }

  return (
    <Row className="flex-column gy-3">
      <Col className="d-flex justify-content-end">
        <Row>
          <Col>
            <Button
              className="text-nowrap"
              onClick={() => {
                save()
              }}
            >
              Сохранить изменения
            </Button>
          </Col>
          <Col>
            <Button
              variant="secondary"
              onClick={() => {
                setMode(AdminSectionMode.view)
              }}
            >
              Отмена
            </Button>
          </Col>
        </Row>
      </Col>

      <Col>
        <h4 className="fw-bold">Заголовок секции</h4>
        <Form.Control
          as="input"
          value={header}
          onChange={(event) => {
            setHeader(event.target.value)
          }}
        />
      </Col>

      <Col>
        <Row className="flex-column gy-2">
          <h4 className="fw-bold">Изображение</h4>

          <Col>
            <img src={image?.imageUrl} alt="" className="img-fluid w-100" />
          </Col>

          <Col>
            <Form.Control
              type="file"
              accept=".jpeg, .jpg, .png"
              onChange={onImageChange}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export { Edit }
