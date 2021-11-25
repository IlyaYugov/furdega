import { FC, FormEvent, useEffect, useState } from "react"
import { Col, Form, Modal, Row, Button } from "react-bootstrap"
import { Redirect } from "react-router"
import { appointmentApi } from "../../api/appointment-api"
import styles from "./reg-modal.module.scss"

type RegModalProps = {
  show: boolean
  onClose: () => void
}

const RegModal: FC<RegModalProps> = ({ show, onClose }) => {
  const [name, setName] = useState<string>("")
  const [phone, setPhone] = useState<string>("")

  const [isServerError, setIsServerError] = useState<boolean>(false)
  const [isInputError, setIsInputError] = useState<boolean>(false)

  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!(name && phone)) {
      setIsInputError(true)
      return
    }

    try {
      await appointmentApi.make({
        senderName: name.trim(),
        phoneNumber: phone.trim(),
        timeInterval: "",
      })

      setIsSuccess(true)
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
    setIsSuccess(false)
  }, [show])

  if (isSuccess) return <Redirect to={"thanks"} />

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
                <Form.Label className="opacity-75">Ваше имя</Form.Label>
                <Form.Control
                  as="input"
                  placeholder="Введите имя"
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
                  Телефон для связи
                </Form.Label>
                <Form.Control
                  as="input"
                  placeholder="Введите номер телефона"
                  size="lg"
                  value={phone}
                  onChange={(e) => {
                    setIsInputError(false)
                    setPhone(e.target.value)
                  }}
                />
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
