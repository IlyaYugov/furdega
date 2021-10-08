import { FC, useState } from "react"
import { Col, Form, Modal, Row, Button } from "react-bootstrap"
import { NEW_TYPE_ID } from "."
import { FurnitureType } from "../../../types/furniture"

type TypeEditCreateProps = {
  show: boolean
  type: FurnitureType
  onSubmit: (request: FurnitureType) => Promise<void>
  close: () => void
}

const TypeEditCreate: FC<TypeEditCreateProps> = ({
  show,
  type,
  close,
  onSubmit,
}) => {
  const isCreate = type.id === NEW_TYPE_ID

  const [title, setTitle] = useState<string>(type.title)

  const onSubmitClick = () => {
    onSubmit({ id: type.id, title })
  }

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>
          {isCreate
            ? "Добавление нового типа мебели"
            : "Редактирование типа мебели"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="overflow-hidden">
        <Row className="flex-column gy-3">
          <Col>
            <div className="fw-bold">Название</div>
            <Form.Control
              as="input"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value)
              }}
            />
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

export { TypeEditCreate }
