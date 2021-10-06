import { Dispatch, FC, SetStateAction, useState } from "react"
import { Row, Col, Form, Button, Image } from "react-bootstrap"

import { AdminSectionMode } from "../../../const/admin"
import { ReactComponent as YellowSnakeIcon } from "../../../assets/svg/yellow-snake.svg"
import { BrandData } from "."
import { FormInputEvent } from "../../../types/utils"
import { fileToBase64 } from "../../../utils/file-to-base64"
import { MaterialBrandUpdateRequest } from "../../../types/material-brand"
import { materialBrandsApi } from "../../../api/material-brands-api"

type EditProps = {
  data: BrandData
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const Edit: FC<EditProps> = ({ data, setMode }) => {
  const [title, setTitle] = useState<string>(data.title)
  const [previewImage, setPreviewImage] = useState(data.previewImage)
  const [mainImage, setMainImage] = useState(data.mainImage)
  const [images, setImages] = useState(data.images)
  const [previewImageBase64, setPreviewImageBase64] = useState<string | null>(
    null
  )
  const [mainImageBase64, setMainImageBase64] = useState<string | null>(null)

  const save = async () => {
    const request: MaterialBrandUpdateRequest = {
      title,
      materialId: data.materialId,
      mainImage: {
        id: mainImage.id,
        base64ImageString: mainImageBase64,
      },
      previewImage: {
        id: previewImage.id,
        base64ImageString: previewImageBase64,
      },
      images: [],
    }

    await materialBrandsApi.update(data.id, request)

    setMode(AdminSectionMode.view)
  }

  const onPreviewImageChange = async (event: FormInputEvent) => {
    const files = (event.currentTarget as HTMLInputElement).files
    if (!files) return null

    const file = files[0]
    const fileUrl = URL.createObjectURL(file)
    const base64 = await fileToBase64(file)

    setPreviewImage({ ...previewImage, imageUrl: fileUrl })
    setPreviewImageBase64(base64)
  }

  const onMainImageChange = async (event: FormInputEvent) => {
    const files = (event.currentTarget as HTMLInputElement).files
    if (!files) return null

    const file = files[0]
    const fileUrl = URL.createObjectURL(file)
    const base64 = await fileToBase64(file)

    setMainImage({ ...mainImage, imageUrl: fileUrl })
    setMainImageBase64(base64)
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
        <h4 className="fw-bold">Название бренда</h4>
        <Form.Control
          as="input"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value)
          }}
        />
      </Col>
      <Col>
        <YellowSnakeIcon />
      </Col>
      <Col>
        <Row>
          <Col>
            <Row className="flex-column gy-2">
              <h4 className="fw-bold">Preview изображение</h4>

              <Col>
                <Image fluid src={previewImage.imageUrl} />
              </Col>

              <Col>
                <Form.Control
                  type="file"
                  accept=".jpeg, .jpg, .png"
                  onChange={onPreviewImageChange}
                />
              </Col>
            </Row>
          </Col>

          <Col>
            <Row className="flex-column gy-2">
              <h4 className="fw-bold">Главное изображение</h4>

              <Col>
                <Image fluid src={mainImage.imageUrl} />
              </Col>

              <Col>
                <Form.Control
                  type="file"
                  accept=".jpeg, .jpg, .png"
                  onChange={onMainImageChange}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col>TODO Images</Col>
    </Row>
  )
}

export { Edit }
