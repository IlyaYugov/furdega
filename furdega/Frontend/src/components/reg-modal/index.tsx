import { FC, FormEvent, useState } from "react"
import { Col, Form, Modal, Row, Button } from "react-bootstrap"
import { appointmentApi } from "../../api/appointment-api"
import { regOptions } from "../../const/app"

import styles from "./reg-modal.module.scss"

type RegModalProps = {
  show: boolean
  onClose: () => void
}

const RegModal: FC<RegModalProps> = ({ show, onClose }) => {
  const [name, setName] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [time, setTime] = useState<string>("")

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!(name && phone && time)) return

    await appointmentApi.make({
      senderName: name.trim(),
      phoneNumber: phone.trim(),
      timeInterval: time.trim(),
    })
  }

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body className="overflow-hidden px-5 pb-5 pt-0">
        <h2 className={`${styles.title} mb-5`}>
          закажите бесплатный выезд дизайнера
        </h2>

        <Form onSubmit={onSubmit}>
          <Row className="flex-column gy-4">
            <Col>
              <Form.Group>
                <Form.Label className="opacity-75">
                  Как к вам обращаться
                </Form.Label>
                <Form.Control
                  as="input"
                  placeholder="Ваше имя"
                  size="lg"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label className="opacity-75">
                  На какой номер звонить?
                </Form.Label>
                <Form.Control
                  as="input"
                  placeholder="Ваш номер телефона"
                  size="lg"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                  }}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label className="opacity-75">
                  В какое время удобно связаться?
                </Form.Label>
                <Form.Select
                  as="select"
                  placeholder="Ваше имя"
                  size="lg"
                  value={time}
                  onChange={(e) => {
                    setTime(e.currentTarget.value)
                  }}
                >
                  <option value="">Выберите удобное время</option>
                  {regOptions.map((o) => (
                    <option value={o}>{o}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>

            <Col className="mt-5">
              <Button size="lg" className="w-100" type="submit">
                Отправить
              </Button>
            </Col>

            <Col>
              <small className="opacity-75">
                Нажимая на кнопку, вы даете согласие на обработку своих
                персональных данных
              </small>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export { RegModal }
