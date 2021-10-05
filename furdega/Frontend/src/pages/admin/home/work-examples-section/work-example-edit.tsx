import { FC, useState } from "react"
import { Col, Form, Row } from "react-bootstrap"
import { WorkExampleResponse } from "../../../../types/home/examples"
import { ImageResponse } from "../../../../types/image"

import { WorkExampleNewImagesBase64 } from "./edit"
import { WorkExampleImageEdit } from "./work-example-image-edit"

type WorkExampleEditProps = {
  value: WorkExampleResponse
  onChange: (
    newExample: WorkExampleResponse,
    newImagesBase64Event?: WorkExampleNewImagesBase64
  ) => void
}

const WorkExampleEdit: FC<WorkExampleEditProps> = ({ value, onChange }) => {
  const [newImagesBase64Event, setNewImagesBase64Event] =
    useState<WorkExampleNewImagesBase64>({})

  const onBeforeImage1Change = (
    newImage: ImageResponse,
    newImageBase64: string
  ) => {
    const newNewImagesChangeEvent: WorkExampleNewImagesBase64 = {
      ...newImagesBase64Event,
      beforeImage1: newImageBase64,
    }

    onChange(
      {
        ...value,
        beforeImage1: newImage,
      },
      newNewImagesChangeEvent
    )

    setNewImagesBase64Event(newNewImagesChangeEvent)
  }

  const onBeforeImage2Change = (
    newImage: ImageResponse,
    newImageBase64: string
  ) => {
    const newNewImagesChangeEvent: WorkExampleNewImagesBase64 = {
      ...newImagesBase64Event,
      beforeImage2: newImageBase64,
    }

    onChange(
      {
        ...value,
        beforeImage2: newImage,
      },
      newNewImagesChangeEvent
    )

    setNewImagesBase64Event(newNewImagesChangeEvent)
  }

  const onBeforeImage3Change = (
    newImage: ImageResponse,
    newImageBase64: string
  ) => {
    const newNewImagesChangeEvent: WorkExampleNewImagesBase64 = {
      ...newImagesBase64Event,
      beforeImage3: newImageBase64,
    }

    onChange(
      {
        ...value,
        beforeImage3: newImage,
      },
      newNewImagesChangeEvent
    )

    setNewImagesBase64Event(newNewImagesChangeEvent)
  }

  const onAfterImage1Change = (
    newImage: ImageResponse,
    newImageBase64: string
  ) => {
    const newNewImagesChangeEvent: WorkExampleNewImagesBase64 = {
      ...newImagesBase64Event,
      afterImage1: newImageBase64,
    }

    onChange(
      {
        ...value,
        afterImage1: newImage,
      },
      newNewImagesChangeEvent
    )

    setNewImagesBase64Event(newNewImagesChangeEvent)
  }

  const onAfterImage2Change = (
    newImage: ImageResponse,
    newImageBase64: string
  ) => {
    const newNewImagesChangeEvent: WorkExampleNewImagesBase64 = {
      ...newImagesBase64Event,
      afterImage2: newImageBase64,
    }

    onChange(
      {
        ...value,
        afterImage2: newImage,
      },
      newNewImagesChangeEvent
    )

    setNewImagesBase64Event(newNewImagesChangeEvent)
  }

  const onAfterImage3Change = (
    newImage: ImageResponse,
    newImageBase64: string
  ) => {
    const newNewImagesChangeEvent: WorkExampleNewImagesBase64 = {
      ...newImagesBase64Event,
      afterImage3: newImageBase64,
    }

    onChange(
      {
        ...value,
        afterImage3: newImage,
      },
      newNewImagesChangeEvent
    )

    setNewImagesBase64Event(newNewImagesChangeEvent)
  }

  return (
    <Form>
      <Row className="flex-column gy-3">
        <Col>
          <Form.Group>
            <Form.Label>Заголовок</Form.Label>
            <Form.Control
              as="textarea"
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
          <Row className="gx-3">
            <Col>
              <Form.Group>
                <Form.Label>Тип мебели</Form.Label>
                <Form.Control
                  as="textarea"
                  value={value.furnitureType}
                  onChange={(e) => {
                    onChange({
                      ...value,
                      furnitureType: e.target.value,
                    })
                  }}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label>Сроки</Form.Label>
                <Form.Control
                  as="textarea"
                  value={value.duration}
                  onChange={(e) => {
                    onChange({
                      ...value,
                      duration: e.target.value,
                    })
                  }}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label>Тип работы</Form.Label>
                <Form.Control
                  as="textarea"
                  value={value.workType}
                  onChange={(e) => {
                    onChange({
                      ...value,
                      workType: e.target.value,
                    })
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Col>

        <Col>
          <Form.Group>
            <Form.Label>Описание</Form.Label>
            <Form.Control
              as="textarea"
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
          <Form.Label>Изображения До</Form.Label>

          <Row className="gx-3">
            <Col>
              <WorkExampleImageEdit
                image={value.beforeImage1}
                onChange={onBeforeImage1Change}
              />
            </Col>

            <Col>
              <WorkExampleImageEdit
                image={value.beforeImage2}
                onChange={onBeforeImage2Change}
              />
            </Col>

            <Col>
              <WorkExampleImageEdit
                image={value.beforeImage3}
                onChange={onBeforeImage3Change}
              />
            </Col>
          </Row>
        </Col>

        <Col>
          <Form.Label>Изображения После</Form.Label>

          <Row className="gx-3">
            <Col>
              <WorkExampleImageEdit
                image={value.afterImage1}
                onChange={onAfterImage1Change}
              />
            </Col>

            <Col>
              <WorkExampleImageEdit
                image={value.afterImage2}
                onChange={onAfterImage2Change}
              />
            </Col>

            <Col>
              <WorkExampleImageEdit
                image={value.afterImage3}
                onChange={onAfterImage3Change}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  )
}

export { WorkExampleEdit }
