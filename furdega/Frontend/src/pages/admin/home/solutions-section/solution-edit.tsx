import { FC } from "react"
import { Col, Form, Row } from "react-bootstrap"
import { v4 as uuidv4 } from "uuid"

import { ImageRequest } from "../../../../types/image-request"
import { IssueSolutionResponse } from "../../../../types/issue-solutions-section"
import { FormInputEvent } from "../../../../types/utils"
import { fileToBase64 } from "../../../../utils/fileToBase64"

type SolutionEditProps = {
  value: IssueSolutionResponse
  onChange: (
    newBenefit: IssueSolutionResponse,
    imageChangeEvent?: ImageRequest
  ) => void
}

const getNewImageRequest = (base64: string): ImageRequest => ({
  id: uuidv4(),
  base64ImageString: base64,
})

const SolutionEdit: FC<SolutionEditProps> = ({ value, onChange }) => {
  const onImageChange = async (event: FormInputEvent) => {
    const files = (event.currentTarget as HTMLInputElement).files
    if (!files) return null

    const file = files[0]
    const fileUrl = URL.createObjectURL(file)
    const base64 = await fileToBase64(file)

    onChange(
      {
        ...value,
        image: { ...value.image, imageUrl: fileUrl },
      },
      getNewImageRequest(base64)
    )
  }

  return (
    <Form>
      <Row className="flex-column gy-3">
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Заголовок</Form.Label>
            <Form.Control
              type="text"
              value={value.title}
              onChange={(e) => {
                onChange({
                  ...value,
                  title: e.target.value,
                })
              }}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Описание</Form.Label>
            <Form.Control
              type="textarea"
              value={value.description}
              onChange={(e) => {
                onChange({
                  ...value,
                  description: e.target.value,
                })
              }}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Label>Изображение</Form.Label>

          <Row className="flex-column gy-2">
            <Col>
              <img
                src={value.image?.imageUrl}
                alt={value.image?.imageUrl}
                className="img-fluid w-100"
              />
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
      </Row>
    </Form>
  )
}

export { SolutionEdit }
