import { Dispatch, FC, SetStateAction, useState } from "react"
import { Row, Col, Form, Button, Image } from "react-bootstrap"

import { AdminSectionMode } from "../../../const/admin"
import { ReactComponent as YellowSnakeIcon } from "../../../assets/svg/yellow-snake.svg"
import { MaterialData } from "."
import { FormInputEvent } from "../../../types/utils"
import { fileToBase64 } from "../../../utils/file-to-base64"
import { MaterialUpdateRequest } from "../../../types/material"
import { Link } from "react-router-dom"
import { materialsApi } from "../../../api/materials-api"

type EditProps = {
  data: MaterialData
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
  onDelete: (id: number) => Promise<void>
}

const Edit: FC<EditProps> = ({ data, setMode, onDelete }) => {
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

    await materialsApi.update(data.id, request)

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
    </Row>
  )
}

export { Edit }
