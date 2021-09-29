import { FC, useState } from "react"
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap"

import { MainHomeSection } from "../../../types/home"
import { MainHomeSectionRequest } from "../../../types/home-api/main-home-section-request"
import { FormInputEvent } from "../../../types/utils"

const MainSection: FC<
  MainHomeSection & { onChange: (request: MainHomeSectionRequest) => void }
> = (props) => {
  const [header, setHeader] = useState<string>(props.header)
  const [imageFile, setImageFile] = useState<File | null>(null)

  const onImageChange = (event: FormInputEvent) => {
    const fileList = (event.target as HTMLInputElement).files
    if (!fileList) return
    const file = fileList[0]
    setImageFile(file)
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
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Изображение</Form.Label>
          <Form.Control
            type="file"
            accept=".jpeg, .jpg, .png"
            onChange={onImageChange}
          />
        </Form.Group>

        <img
          src={props.imageUrl}
          alt={props.imageUrl}
          className="img-fluid w-100"
        />
      </Col>

      <Col>
        <Button
          size="lg"
          onClick={() => {
            props.onChange({ header, image: imageFile })
          }}
        >
          Применить
        </Button>
      </Col>
    </Row>
  )
}

export { MainSection }
