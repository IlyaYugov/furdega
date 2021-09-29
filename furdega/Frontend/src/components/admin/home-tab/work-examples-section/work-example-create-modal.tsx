import { FC, useEffect, useState } from "react"
import { Modal, Button, Row, Col, Form } from "react-bootstrap"

import { WorkExampleRequest } from "../../../../types/home-api/work-example-request"
import { FormInputEvent } from "../../../../types/utils"

type WorkExampleCreateModalProps = {
  show: boolean
  onCancel: () => void
  onConfirm: (workExampleRequest: WorkExampleRequest) => void
}

const defaultWorkExampleRequest: WorkExampleRequest = {
  title: "",
  furnitureType: "",
  duration: "",
  workType: "",
  description: "",
  beforeImages: [],
  afterImages: [],
}

const WorkExampleCreateModal: FC<WorkExampleCreateModalProps> = ({
  show,
  onConfirm,
  onCancel,
}) => {
  const [workExampleRequest, setWorkExampleRequest] =
    useState<WorkExampleRequest>({
      ...defaultWorkExampleRequest,
    })

  const onSubmit = () => {
    onConfirm(workExampleRequest)
  }

  const handleAddNewBeforeImage = (event: FormInputEvent) => {
    const fileList = (event.target as HTMLInputElement).files
    if (!fileList) return
    const file = fileList[0]
    const newBeforeImages = [...workExampleRequest.beforeImages]
    newBeforeImages.push(file)
    setWorkExampleRequest({
      ...workExampleRequest,
      beforeImages: newBeforeImages,
    })
  }

  const handleAddNewAfterImage = (event: FormInputEvent) => {
    const fileList = (event.target as HTMLInputElement).files
    if (!fileList) return
    const file = fileList[0]
    const newAfterImages = [...workExampleRequest.afterImages]
    newAfterImages.push(file)
    setWorkExampleRequest({
      ...workExampleRequest,
      afterImages: newAfterImages,
    })
  }

  useEffect(() => {
    setWorkExampleRequest({ ...defaultWorkExampleRequest })
  }, [show])

  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Создание нового примера</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Заголовок</Form.Label>
            <Form.Control
              as="textarea"
              value={workExampleRequest.title}
              onChange={(e) => {
                setWorkExampleRequest({
                  ...workExampleRequest,
                  title: e.target.value,
                })
              }}
            />
          </Form.Group>

          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Тип мебели</Form.Label>
                <Form.Control
                  as="textarea"
                  value={workExampleRequest.furnitureType}
                  onChange={(e) => {
                    setWorkExampleRequest({
                      ...workExampleRequest,
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
                  value={workExampleRequest.duration}
                  onChange={(e) => {
                    setWorkExampleRequest({
                      ...workExampleRequest,
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
                  value={workExampleRequest.workType}
                  onChange={(e) => {
                    setWorkExampleRequest({
                      ...workExampleRequest,
                      workType: e.target.value,
                    })
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Описание</Form.Label>
            <Form.Control
              as="textarea"
              value={workExampleRequest.description}
              onChange={(e) => {
                setWorkExampleRequest({
                  ...workExampleRequest,
                  description: e.target.value,
                })
              }}
            />
          </Form.Group>

          <Row className="flex-nowrap">
            <Col>
              <h4>Изображения До</h4>

              <Form.Group className="mb-3">
                <Form.Text>Добавить новое</Form.Text>
                <Form.Control
                  type="file"
                  accept=".jpeg, .jpg, .png"
                  onChange={handleAddNewBeforeImage}
                />
              </Form.Group>

              <Row>
                {workExampleRequest.beforeImages.map((image) => {
                  const url = URL.createObjectURL(image)

                  return (
                    <Col>
                      <img src={url} alt={url} className="img-fluid w-100" />
                    </Col>
                  )
                })}
              </Row>
            </Col>

            <Col>
              <h4>Изображения После</h4>

              <Row>
                {workExampleRequest.afterImages.map((image) => {
                  const url = URL.createObjectURL(image)

                  return (
                    <Col>
                      <img src={url} alt={url} className="img-fluid w-100" />
                    </Col>
                  )
                })}
              </Row>

              <Form.Group className="mb-3">
                <Form.Text>Добавить новое</Form.Text>
                <Form.Control
                  type="file"
                  accept=".jpeg, .jpg, .png"
                  onChange={handleAddNewAfterImage}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Отмена
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Создать
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export { WorkExampleCreateModal }
