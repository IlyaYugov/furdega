import { FC, FormEvent, useEffect, useState } from "react"
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

  const [isServerError, setIsServerError] = useState<boolean>(false)
  const [isInputError, setIsInputError] = useState<boolean>(false)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!(name && phone && time)) {
      setIsInputError(true)
      return
    }

    try {
      await appointmentApi.make({
        senderName: name.trim(),
        phoneNumber: phone.trim(),
        timeInterval: time.trim(),
      })

      onClose()
    } catch (error) {
      console.error(error)
      setIsServerError(true)
    }
  }

  useEffect(() => {
    setIsServerError(false)
    setIsInputError(false)
    setName("")
    setPhone("")
    setTime("")
  }, [show])

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
                    setIsInputError(false)
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
                    setIsInputError(false)
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
                    setIsInputError(false)
                    setTime(e.currentTarget.value)
                  }}
                >
                  <option value="">Выберите удобное время</option>
                  {regOptions.map((o) => (
                    <option value={o} key={`time-option-${o}`}>
                      {o}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>

            {isServerError ? (
              <Col>
                <div className="text-red">
                  Произошла ошибка. Пожалуйста, повторите попытку позже
                </div>
              </Col>
            ) : null}

            {isInputError ? (
              <Col>
                <div className="text-red">Пожалуйста, заполните все поля</div>
              </Col>
            ) : null}

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
