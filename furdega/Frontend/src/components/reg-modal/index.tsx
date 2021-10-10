import { FC } from "react"
import { Col, Form, Modal, Row, Button } from "react-bootstrap"

type RegModalProps = {
  show: boolean
  onClose: () => void
}

const RegModal: FC<RegModalProps> = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header>
        <Modal.Title className="px-5 pt-5 pb-4">
          <h2>закажите бесплатный выезд дизайнера</h2>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="overflow-hidden p-5">
        <Form>
          <Row className="flex-column gy-4">
            <Col>
              <Form.Group>
                <Form.Label className="opacity-75">
                  Как к вам обращаться
                </Form.Label>
                <Form.Control as="input" placeholder="Ваше имя" size="lg" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label className="opacity-75">
                  На какой номер звонить?
                </Form.Label>
                <Form.Control as="input" placeholder="Ваше имя" size="lg" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label className="opacity-75">
                  На какой номер звонить?
                </Form.Label>
                <Form.Control as="input" placeholder="Ваше имя" size="lg" />
              </Form.Group>
            </Col>

            <Col className="mt-5">
              <Button size="lg" className="w-100">
                Отправить
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export { RegModal }
