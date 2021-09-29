import { FC, useState } from "react"
import { Modal, Button, Row, Col, Form } from "react-bootstrap"

import { WorkExample } from "../../../../types/home"
import { WorkExampleRequest } from "../../../../types/home-api/work-example-request"
import { FormInputEvent } from "../../../../types/utils"
import { getWorkExampleRequestFromWorkExample } from "../../../../utils/getWorkExampleRequestFromWorkExample"

type WorkExampleEditModalProps = {
  show: boolean
  workExample: WorkExample
  onCancel: () => void
  onConfirm: (workExampleRequest: WorkExampleRequest) => void
}

const WorkExampleEditModal: FC<WorkExampleEditModalProps> = ({
  show,
  workExample,
  onConfirm,
  onCancel,
}) => {
  const [workExampleRequest, setWorkExampleRequest] =
    useState<WorkExampleRequest>(
      getWorkExampleRequestFromWorkExample(workExample)
    )

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

  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Редактирование примера</Modal.Title>
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
            </Col>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Отмена
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Редактировать
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export { WorkExampleEditModal }
