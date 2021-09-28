import { FC, useEffect, useState } from "react"
import { Modal, Button, Row, Col, Form } from "react-bootstrap"

import { WorkExample } from "../../../../types/home"

type WorkExampleModalProps = {
  show: boolean
  workExampleToEditIndex: number
  workExamples: WorkExample[]
  onCancel: () => void
  onConfirm: (workExample: WorkExample) => void
}

const workExampleDefault: WorkExample = {
  title: "",
  furnitureType: "",
  duration: "",
  workType: "",
  description: "",
  imageBeforeUrls: [],
  imageAfterUrls: [],
}

const WorkExampleModal: FC<WorkExampleModalProps> = ({
  show,
  onConfirm,
  onCancel,
  workExamples,
  workExampleToEditIndex,
}) => {
  const isEdit = workExampleToEditIndex !== -1

  const defaultWorkExample = isEdit
    ? workExamples[workExampleToEditIndex]
    : workExampleDefault

  const [workExample, setWorkExample] = useState<WorkExample>({
    ...defaultWorkExample,
  })

  const onSubmit = () => {
    onConfirm(workExample)
  }

  useEffect(() => {
    setWorkExample({ ...defaultWorkExample })
  }, [defaultWorkExample, show])

  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{isEdit ? "Редактирование" : "Создание"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Заголовок</Form.Label>
            <Form.Control
              type="text"
              value={workExample.title}
              onChange={(e) => {
                setWorkExample({
                  ...workExample,
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
                  type="text"
                  value={workExample.furnitureType}
                  onChange={(e) => {
                    setWorkExample({
                      ...workExample,
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
                  type="text"
                  value={workExample.duration}
                  onChange={(e) => {
                    setWorkExample({
                      ...workExample,
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
                  type="text"
                  value={workExample.workType}
                  onChange={(e) => {
                    setWorkExample({
                      ...workExample,
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
              type="textarea"
              value={workExample.description}
              onChange={(e) => {
                setWorkExample({
                  ...workExample,
                  description: e.target.value,
                })
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Отмена
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          {isEdit ? "Редактировать" : "Создать"}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export { WorkExampleModal }
