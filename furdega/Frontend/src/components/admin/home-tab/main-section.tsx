import { FC, useEffect, useState } from "react"
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap"

import { homeApi } from "../../../api/home-api"
import { MainHomeSectionRequest } from "../../../types/home-api/main-home-section-request"
import { FormInputEvent } from "../../../types/utils"
import { fileToBase64 } from "../../../utils/fileToBase64"

const MainSection: FC = () => {
  const [header, setHeader] = useState<string>("")
  const [imageUrl, setImageUrl] = useState<string>("")
  const [image, setImage] = useState<string>("")

  const onImageChange = async (event: FormInputEvent) => {
    const fileList = (event.target as HTMLInputElement).files
    if (!fileList) return
    const file = fileList[0]
    const base64 = await fileToBase64(file)
    setImage(base64)
  }

  const fetchContent = async () => {
    const response = await homeApi.getMainHomeSection()
    setHeader(response.header)
    setImageUrl(response.imageUrl)
  }

  const submit = async (request: MainHomeSectionRequest) => {
    await homeApi.createOrUpdateMainHomeSection(request)
    fetchContent()
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
        <Form.Group className="mb-3">
          <Form.Label>Изображение</Form.Label>
          <Form.Control
            type="file"
            accept=".jpeg, .jpg, .png"
            onChange={onImageChange}
          />
        </Form.Group>

        <img src={imageUrl} alt={imageUrl} className="img-fluid w-100" />
      </Col>

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
    </Row>
  )
}

export { MainSection }
