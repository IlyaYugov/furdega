import { Dispatch, FC, SetStateAction, useState } from "react"
import { Row, Col, Form, Button, Image } from "react-bootstrap"

import { AdminSectionMode } from "../../../const/admin"
import { ReactComponent as YellowSnakeIcon } from "../../../assets/svg/yellow-snake.svg"
import { Material, MaterialUpdateRequest } from "../../../types/material"
import { Link } from "react-router-dom"
import { ImageUpload } from "../../../components/image-upload"
import { ImageUploadRuleType } from "../../../types/image-upload"

type EditProps = {
  data: Material
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
  onDelete: (id: number) => Promise<void>
  onUpdate: (id: number, request: MaterialUpdateRequest) => Promise<void>
}

const Edit: FC<EditProps> = ({ data, setMode, onDelete, onUpdate }) => {
  const [title, setTitle] = useState<string>(data.title)
  const [description, setDescription] = useState<string>(data.description)
  const [previewImage, setPreviewImage] = useState(data.previewImage)
  const [mainImage, setMainImage] = useState(data.mainImage)
  const [previewImageBase64, setPreviewImageBase64] = useState<string | null>(
    null
  )
  const [mainImageBase64, setMainImageBase64] = useState<string | null>(null)

  const save = async () => {
    const request: MaterialUpdateRequest = {
      title,
      description,
      mainImage: {
        id: mainImage.id,
        base64ImageString: mainImageBase64,
      },
      previewImage: {
        id: previewImage.id,
        base64ImageString: previewImageBase64,
      },
    }

    onUpdate(data.id, request)
  }

  const onPreviewImageChange = async (
    imageUrl: string,
    imageBase64: string
  ) => {
    setPreviewImage({ ...previewImage, imageUrl })
    setPreviewImageBase64(imageBase64)
  }

  const onMainImageChange = async (imageUrl: string, imageBase64: string) => {
    setMainImage({ ...mainImage, imageUrl })
    setMainImageBase64(imageBase64)
  }

  return (
    <Row className="flex-column gy-3">
      <Col className="d-flex justify-content-end">
        <Row>
          <Col>
            <Button
              variant="secondary"
              className="text-nowrap"
              onClick={() => {
                onDelete(data.id)
              }}
            >
              Удалить
            </Button>
          </Col>
          <Col>
            <Button className="text-nowrap">
              <Link to={`/admin/catalog/${data.id}/brands`}>
                Редактировать бренды
              </Link>
            </Button>
          </Col>
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
        <h4 className="fw-bold">Название материала</h4>
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
        <h4 className="fw-bold">Описание</h4>
        <Form.Control
          as="input"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value)
          }}
        />
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
                <ImageUpload
                  rules={{ type: ImageUploadRuleType.ratio, ratio: 1 }}
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
                <ImageUpload onChange={onMainImageChange} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export { Edit }
