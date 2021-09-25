import { FC } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ReactComponent as LogoContrastIcon } from "../../assets/svg/logo-contrast.svg"
import { ReactComponent as FacebookContrastIcon } from "../../assets/svg/facebook-contrast.svg"
import { ReactComponent as VkContrastIcon } from "../../assets/svg/vk-contrast.svg"
import { ReactComponent as InstaContrastIcon } from "../../assets/svg/insta-contrast.svg"
import styles from "./footer.module.scss"

const Footer: FC = () => {
  return (
    <Container fluid className="g-0 bg-dark">
      <Container className={`g-0 content ${styles["footer"]}`}>
        <Row className="g-0 flex-column flex-md-row flex-nowrap">
          <Col
            md={4}
            className="mb-5 mb-md-0 d-flex flex-column align-items-md-start align-items-center"
          >
            <LogoContrastIcon />

            <div className="d-flex justify-content-start mt-4">
              <Row className="gx-4 flex-nowrap">
                <Col>
                  <FacebookContrastIcon />
                </Col>
                <Col>
                  <VkContrastIcon />
                </Col>
                <Col>
                  <InstaContrastIcon />
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={8}>
            <Row className="text-white g-3 flex-lg-nowrap flex-wrap">
              <Col>
                <Row className="flex-column gy-4 gx-0">
                  <Col>
                    <a>
                      <small>О&nbsp;фабрике</small>
                    </a>
                  </Col>

                  <Col>
                    <a>
                      <small>Услуги</small>
                    </a>
                  </Col>

                  <Col>
                    <a>
                      <small>Преимущества</small>
                    </a>
                  </Col>

                  <Col>
                    <a>
                      <small>Работы</small>
                    </a>
                  </Col>

                  <Col>
                    <a>
                      <small>Калькулятор</small>
                    </a>
                  </Col>
                </Row>
              </Col>

              <Col>
                <Row className="flex-column gy-4 gx-0">
                  <Col>
                    <a>
                      <small>Главная</small>
                    </a>
                  </Col>

                  <Col>
                    <a>
                      <small>Портфолио</small>
                    </a>
                  </Col>

                  <Col>
                    <a>
                      <small>Каталог</small>
                    </a>
                  </Col>

                  <Col>
                    <a>
                      <small>Блог</small>
                    </a>
                  </Col>

                  <Col>
                    <a>
                      <small>Контакты</small>
                    </a>
                  </Col>
                </Row>
              </Col>

              <Col>
                <Row className="flex-column gy-4 gx-0">
                  <Col>
                    <a>
                      <small className="text-primary opacity-75">
                        телефон:
                      </small>
                    </a>
                  </Col>

                  <Col>
                    <a>
                      <small>+7&nbsp;(962)&nbsp;366&#8209;70&#8209;74</small>
                    </a>
                  </Col>

                  <Col>
                    <a>
                      <small>+7&nbsp;(495)&nbsp;136&#8209;70&#8209;74</small>
                    </a>
                  </Col>

                  <Col>
                    <a>
                      <small className="text-primary opacity-75">E-mail:</small>
                    </a>
                  </Col>

                  <Col>
                    <a>
                      <small>daasobivka@mail.ru</small>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export { Footer }
