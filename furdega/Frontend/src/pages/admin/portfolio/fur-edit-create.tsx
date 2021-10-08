import { FC, useEffect, useState } from "react"
import { Modal, Button, Form, Row, Col, Image } from "react-bootstrap"

import { FormInputEvent } from "../../../types/utils"
import { fileToBase64 } from "../../../utils/file-to-base64"
import { getDefaultImage } from "../../../utils/get-default-image"
import {
  Furniture,
  FurnitureCreateRequest,
  FurnitureType,
  FurnitureUpdateRequest,
} from "../../../types/furniture"
import { NEW_FUR_ID } from "."

type FurEditCreateProps = {
  show: boolean
  type: FurnitureType | null
  fur: Furniture
  onCreate: (request: FurnitureCreateRequest) => Promise<void>
  onUpdate: (id: number, request: FurnitureUpdateRequest) => Promise<void>
  close: () => void
}

const FurEditCreate: FC<FurEditCreateProps> = ({
  show,
  fur,
  type,
  onCreate,
  close,
  onUpdate,
}) => {
  const isCreate = fur.id === NEW_FUR_ID

  const [beforeImage, setBeforeImage] = useState(getDefaultImage())
  const [afterImage, setAfterImage] = useState(getDefaultImage())
  const [beforeImageBase64, setBeforeImageBase64] = useState<string | null>(
    null
  )
  const [afterImageBase64, setAfterImageBase64] = useState<string | null>(null)

  useEffect(() => {
    setBeforeImage(fur.beforeImage)
    setAfterImage(fur.afterImage)
    setBeforeImageBase64(null)
    setAfterImageBase64(null)
  }, [fur])

  if (!type) return null

  const onBeforeImageChange = async (event: FormInputEvent) => {
    const files = (event.currentTarget as HTMLInputElement).files
    if (!files) return null

    const file = files[0]
    const fileUrl = URL.createObjectURL(file)
    const base64 = await fileToBase64(file)

    setBeforeImage({ ...beforeImage, imageUrl: fileUrl })
    setBeforeImageBase64(base64)
  }

  const onAfterImageChange = async (event: FormInputEvent) => {
    const files = (event.currentTarget as HTMLInputElement).files
    if (!files) return null

    const file = files[0]
    const fileUrl = URL.createObjectURL(file)
    const base64 = await fileToBase64(file)

    setAfterImage({ ...afterImage, imageUrl: fileUrl })
    setAfterImageBase64(base64)
  }

  const onSubmitClick = async () => {
    if (isCreate) {
      if (!(beforeImageBase64 && afterImageBase64)) return

      const request: FurnitureCreateRequest = {
        furnitureTypeId: type.id,
        afterImage: {
          id: afterImage.id,
          base64ImageString: afterImageBase64,
        },
        beforeImage: {
          id: beforeImage.id,
          base64ImageString: beforeImageBase64,
        },
      }

      onCreate(request)
      return
    } else {
      const request: FurnitureUpdateRequest = {
        furnitureTypeId: type.id,
        afterImage: {
          id: afterImage.id,
          base64ImageString: afterImageBase64,
        },
        beforeImage: {
          id: beforeImage.id,
          base64ImageString: beforeImageBase64,
        },
      }

      onUpdate(fur.id, request)
    }
  }

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Добавление новой работы для {type.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="overflow-hidden">
        <Row className="flex-column gy-3">
          <Col>
            <Row>
              <Col>
                <Row className="flex-column gy-2">
                  <div className="fw-bold">Изображение До</div>

                  <Col>
                    <Image fluid src={beforeImage.imageUrl} />
                  </Col>

                  <Col>
                    <Form.Control
                      type="file"
                      accept=".jpeg, .jpg, .png"
                      onChange={onBeforeImageChange}
                    />
                  </Col>
                </Row>
              </Col>

              <Col>
                <Row className="flex-column gy-2">
                  <div className="fw-bold">Изображение После</div>

                  <Col>
                    <Image fluid src={afterImage.imageUrl} />
                  </Col>

                  <Col>
                    <Form.Control
                      type="file"
                      accept=".jpeg, .jpg, .png"
                      onChange={onAfterImageChange}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Отмена
        </Button>
        <Button variant="primary" onClick={onSubmitClick}>
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export { FurEditCreate }
