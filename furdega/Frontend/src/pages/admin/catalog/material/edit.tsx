import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import { Row, Col, Form, Button, Image } from "react-bootstrap"

import { AdminSectionMode } from "../../../../const/admin"
import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"
import { MaterialData } from ".."
import { getDefaultImage } from "../../../../utils/get-default-image"
import { FormInputEvent } from "../../../../types/utils"
import { fileToBase64 } from "../../../../utils/file-to-base64"
import { MaterialBrand, MaterialBrandSimple } from "../../../../types/material"
import { Link } from "react-router-dom"

type EditProps =
  | {
      create: true
      setMode: Dispatch<SetStateAction<AdminSectionMode>>
    }
  | {
      create?: false
      data: MaterialData
      setMode: Dispatch<SetStateAction<AdminSectionMode>>
    }

export type BrandNewImagesEvent = Record<
  string,
  { position: number; base64String: string }
>

export type MaterialBrandData = MaterialBrandSimple &
  Pick<MaterialBrand, "mainImage" | "images">

export const NEW_BRAND_ID = -1

const Edit: FC<EditProps> = (props) => {
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [previewImage, setPreviewImage] = useState(getDefaultImage)
  const [mainImage, setMainImage] = useState(getDefaultImage)
  const [previewImageBase64, setPreviewImageBase64] = useState<string>("")
  const [mainImageBase64, setMainImageBase64] = useState<string>("")

  useEffect(() => {
    if (!props.create) {
      setTitle(props.data.title)
      setDescription(props.data.description)
      setPreviewImage(props.data.previewImage)
      setMainImage(props.data.mainImage)
    }
  }, [])

  const save = async () => {
    if (props.create) {
    } else {
    }

    props.setMode(AdminSectionMode.view)
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
                props.setMode(AdminSectionMode.view)
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

      {!props.create ? (
        <Col>
          <Button>
            <Link to={`/admin/catalog/${props.data.id}/brands`}>
              Редактировать бренды
            </Link>
          </Button>
        </Col>
      ) : null}
    </Row>
  )
}

export { Edit }
