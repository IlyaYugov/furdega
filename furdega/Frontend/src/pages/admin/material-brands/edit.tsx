import { Dispatch, FC, SetStateAction, useState } from "react"
import { Row, Col, Form, Button, Image } from "react-bootstrap"

import { AdminSectionMode } from "../../../const/admin"
import { ReactComponent as YellowSnakeIcon } from "../../../assets/svg/yellow-snake.svg"
import { FormInputEvent } from "../../../types/utils"
import { fileToBase64 } from "../../../utils/file-to-base64"
import {
  MaterialBrand,
  MaterialBrandUpdateRequest,
} from "../../../types/material-brand"
import { getDefaultImage } from "../../../utils/get-default-image"

type EditProps = {
  data: MaterialBrand
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
  onDelete: (id: number) => Promise<void>
  onUpdate: (id: number, request: MaterialBrandUpdateRequest) => Promise<void>
}

const Edit: FC<EditProps> = ({ data, setMode, onDelete, onUpdate }) => {
  const [title, setTitle] = useState<string>(data.title)
  const [previewImage, setPreviewImage] = useState(data.previewImage)
  const [mainImage, setMainImage] = useState(data.mainImage)
  const [images, setImages] = useState(data.images)
  const [previewImageBase64, setPreviewImageBase64] = useState<string | null>(
    null
  )
  const [mainImageBase64, setMainImageBase64] = useState<string | null>(null)
  const [newImagesBase64, setNewImagesBase64] = useState<
    Record<string, string>
  >({})

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
      images: images.map(({ id }) => ({
        id,
        base64ImageString: newImagesBase64[id] || null,
      })),
    }

    onUpdate(data.id, request)
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

  const onImageChange = (imageId: string) => async (event: FormInputEvent) => {
    const files = (event.currentTarget as HTMLInputElement).files
    if (!files) return null

    const file = files[0]
    const fileUrl = URL.createObjectURL(file)
    const base64 = await fileToBase64(file)

    const newImages = [...images]
    const imageIndex = images.findIndex((i) => i.id === imageId)
    newImages.splice(imageIndex, 1, { id: imageId, imageUrl: fileUrl })

    const newNewImagesBase64 = { ...newImagesBase64 }
    newNewImagesBase64[imageId] = base64

    setImages(newImages)
    setNewImagesBase64(newNewImagesBase64)
  }

  const addNewImage = () => {
    const newImages = [...images]
    newImages.push(getDefaultImage())
    setImages(newImages)
  }

  const onDeleteImage = (imageId: string) => {
    const newImages = images.filter((i) => i.id !== imageId)
    const newNewImagesBase64 = { ...newImagesBase64 }
    delete newNewImagesBase64[imageId]
    setNewImagesBase64(newNewImagesBase64)
    setImages(newImages)
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

      <Col>
        <h4 className="fw-bold">Изображения</h4>

        <Row>
          {images.map((i) => (
            <Col xs={6}>
              <Row className="flex-column gy-2">
                <Col>
                  <Image fluid src={i.imageUrl} />
                </Col>

                <Col>
                  <Form.Control
                    type="file"
                    accept=".jpeg, .jpg, .png"
                    onChange={onImageChange(i.id)}
                  />
                  <Button
                    variant="secondary"
                    onClick={() => {
                      onDeleteImage(i.id)
                    }}
                  >
                    Удалить
                  </Button>
                </Col>
              </Row>
            </Col>
          ))}

          <Col xs={6}>
            <Button
              onClick={() => {
                addNewImage()
              }}
            >
              Добавить
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export { Edit }
