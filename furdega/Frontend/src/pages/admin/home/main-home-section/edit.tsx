import { Dispatch, FC, SetStateAction, useState } from "react"
import { Row, Col, InputGroup, Button, Form } from "react-bootstrap"
import { v4 as uuidv4 } from "uuid"

import { mainHomeSectionApi } from "../../../../api/home/main-home-section-api"
import { AdminSectionMode } from "../../../../const/admin"
import { ImageResponse } from "../../../../types/image-response"
import {
  MainHomeSectionRequest,
  MainHomeSectionResponse,
} from "../../../../types/main-home-section"
import { FormInputEvent } from "../../../../types/utils"
import { fileToBase64 } from "../../../../utils/fileToBase64"

type EditProps = {
  data: MainHomeSectionResponse
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const getDefaultResponseData = (): MainHomeSectionResponse => ({
  header: "",
  image: {
    id: uuidv4(),
    imageUrl: "",
  },
})

const Edit: FC<EditProps> = (props) => {
  const isEmpty = !Object.values(props.data).some((val) => val)

  const data = props.data || getDefaultResponseData()

  const [header, setHeader] = useState<string>(data.header)
  const [image, setImage] = useState<ImageResponse>(data.image)
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
    const request: MainHomeSectionRequest = {
      header,
    }

    if (newImageBase64) {
      request.image = {
        id: image.id,
        base64ImageString: newImageBase64,
      }
    }

    if (isEmpty) {
      await mainHomeSectionApi.create(request)
    } else {
      await mainHomeSectionApi.update(request)
    }

    props.setMode(AdminSectionMode.view)
  }

  return (
    <Row className="flex-column gy-3">
      <Col>
        <InputGroup>
          <InputGroup.Text className="w-25 text-center text-wrap">
            Текст заголовка
          </InputGroup.Text>

          <Form.Control
            as="textarea"
            value={header}
            onChange={(event) => {
              setHeader(event.target.value)
            }}
          />
        </InputGroup>
      </Col>

      <Col>
        <Row className="flex-column gy-2">
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

      <Col className="d-flex justify-content-end">
        <Row>
          <Col>
            <Button
              size="lg"
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
              size="lg"
              variant="secondary"
              onClick={() => {
                props.setMode(AdminSectionMode.view)
              }}
            >
              Отмена
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export { Edit }
