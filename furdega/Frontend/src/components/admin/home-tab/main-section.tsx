import { FC, useEffect, useRef, useState } from "react"
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap"

import { homeApi } from "../../../api/home-api"
import { MainHomeSectionRequest } from "../../../types/home-api/main-home-section-request"
import { FormInputEvent } from "../../../types/utils"
import { fileToBase64, fileToBase64Raw } from "../../../utils/fileToBase64"

const MainSection: FC = () => {
  const [header, setHeader] = useState<string>("")
  const [imageUrl, setImageUrl] = useState<string>("")
  const [imageRaw, setImageRaw] = useState<string | null>(null)
  const [image, setImage] = useState<string | null>(null)

  const fileInputRef = useRef(null)

  const onImageChange = async (event: FormInputEvent) => {
    const fileList = (event.target as HTMLInputElement).files
    if (!fileList) return
    const file = fileList[0]
    const base64Raw = await fileToBase64Raw(file)
    const base64 = await fileToBase64(file)
    setImageRaw(base64Raw)
    setImage(base64)
  }

  const fetchContent = async () => {
    const response = await homeApi.getMainHomeSection()
    setHeader(response.header)
    setImageUrl(response.imageUrl)
  }

  const submit = async (request: MainHomeSectionRequest) => {
    await homeApi.createOrUpdateMainHomeSection(request)
    reset()
  }

  const reset = async () => {
    fetchContent()
    setImageRaw(null)
    setImage(null)
    // @ts-ignore
    fileInputRef.current.value = null
  }

  useEffect(() => {
    fetchContent()
  }, [])

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
        <h5>Текущее изображение</h5>
        <img src={imageUrl} alt={imageUrl} className="img-fluid w-100" />
      </Col>

      <Col>
        <Form.Group className="mb-3">
          <Form.Label>
            <h5>Новое изображение</h5>
          </Form.Label>
          <Form.Control
            type="file"
            ref={fileInputRef}
            accept=".jpeg, .jpg, .png"
            onChange={onImageChange}
          />
        </Form.Group>

        {imageRaw ? (
          <>
            <h5 className="opacity-50">Предпросмотр</h5>
            <img src={imageRaw} alt={imageRaw} className="img-fluid w-100" />
          </>
        ) : null}
      </Col>

      <Col className="d-flex justify-content-end">
        <Row>
          <Col>
            <Button
              size="lg"
              onClick={() => {
                submit({ header, image })
              }}
            >
              Применить
            </Button>
          </Col>
          <Col>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => {
                reset()
              }}
            >
              Сбросить
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export { MainSection }
