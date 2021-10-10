import { FC } from "react"
import { Col, Container, Form, Row, Button } from "react-bootstrap"

import { ReactComponent as ArrowIcon } from "../../assets/svg/arrow-long-right.svg"
import { ReactComponent as VkIcon } from "../../assets/svg/vk-grey.svg"
import { ReactComponent as InstaIcon } from "../../assets/svg/insta-grey.svg"
import { ReactComponent as FbIcon } from "../../assets/svg/fb-grey.svg"

const Contacts: FC = () => {
  return (
    <Container fluid className="g-0 my-5 py-4">
      <Container className="g-0 content">
        <Row className="flex-column-reverse flex-md-row">
          <Col xs={12} md={5} lg={4} className="pe-5">
            <Form>
              <Row className="flex-column gy-5">
                <Col>
                  <Row
                    xs="auto"
                    className="justify-content-between border-bottom py-4"
                  >
                    <Col>
                      <ArrowIcon />
                    </Col>
                    <Col className="fw-bold">Контакты</Col>
                  </Row>
                </Col>

                <Col>
                  <h4>Бесплатно проконсультируем, скорее подайте заявку</h4>
                </Col>

                <Col>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">Ваше имя</Form.Label>
                    <Form.Control as="input" placeholder="Ваше имя" size="lg" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className="fw-bold">
                      Ваш номер телефона
                    </Form.Label>
                    <Form.Control
                      as="input"
                      size="lg"
                      placeholder="Ваш номер телефона"
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Button size="lg" className="w-100">
                    Подать заявку
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>

          <Col xs={12} md={7} lg={8} className="ps-5">
            <h1 className="my-5">г. москва</h1>

            <h5 className="mb-5">ул Якова Гунина дом 1</h5>

            <h5>+7 (495) 136-70-74</h5>
            <h5 className="mb-5">+7 (962) 366-70-74</h5>

            <h5 className="mb-5">daasobivka@mail.com</h5>

            <h5 className="mb-5">ПН-ВС, 09:00 - 19:00</h5>

            <h1 className="my-5">мы в соцсетях</h1>

            <Row xs="auto" className="gx-5 mb-5 mb-md-0">
              <Col>
                <a
                  href="https://www.instagram.com/deganov_mebel/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <VkIcon style={{ width: "36px", height: "36px" }} />
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.instagram.com/deganov_mebel/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <InstaIcon style={{ width: "36px", height: "36px" }} />
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.instagram.com/deganov_mebel/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FbIcon style={{ width: "36px", height: "36px" }} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export { Contacts }
