import { FC } from "react"
import { Col, Container, Form, Row, Button } from "react-bootstrap"

import { ReactComponent as ArrowIcon } from "../../assets/svg/arrow-long-right.svg"

const Contacts: FC = () => {
  return (
    <Container fluid className="g-0 my-5 py-4">
      <Container className="g-0 content">
        <Row>
          <Col xs={4} className="pe-5">
            <Row
              xs="auto"
              className="justify-content-between border-bottom py-4 mb-5"
            >
              <Col>
                <ArrowIcon />
              </Col>
              <Col className="fw-bold">Контакты</Col>
            </Row>

            <Row className="mb-5">
              <h4>Бесплатно проконсультируем, скорее подайте заявку</h4>
            </Row>

            <Row className="mb-5">
              <Row className="mb-4">
                <div className="fw-bold mb-3">Ваше имя</div>

                <Form.Control as="input" placeholder="Ваше имя" size="lg" />
              </Row>

              <Row>
                <div className="fw-bold mb-3">Ваш номер телефона</div>

                <Form.Control
                  as="input"
                  size="lg"
                  placeholder="Ваш номер телефона"
                />
              </Row>
            </Row>

            <Button size="lg">Подать заявку</Button>
          </Col>

          <Col xs={8} className="ps-5">
            <h1 className="mt-5">г. москва</h1>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export { Contacts }
