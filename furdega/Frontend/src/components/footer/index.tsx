import { FC } from "react"
import { Col, Container, Row } from "react-bootstrap"

import { ReactComponent as LogoContrastIcon } from "../../assets/svg/logo-contrast.svg"
import { ReactComponent as VkContrastIcon } from "../../assets/svg/vk-contrast.svg"
import { ReactComponent as InstaContrastIcon } from "../../assets/svg/insta-contrast.svg"

import styles from "./footer.module.scss"
import { NavLink } from "react-router-dom"

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
              <Row className="flex-nowrap">
                <Col>
                  <a target="_blank" href="https://vk.com/deganov_mebel">
                    <VkContrastIcon />
                  </a>
                </Col>
                <Col>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/deganov_mebel/"
                  >
                    <InstaContrastIcon />
                  </a>
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={8}>
            <Row className="text-white g-3 flex-lg-nowrap flex-wrap">
              <Col>
                <Row className="flex-column gy-4 gx-0">
                  <Col>
                    <NavLink to="/#about">
                      <small>О&nbsp;фабрике</small>
                    </NavLink>
                  </Col>

                  <Col>
                    <NavLink to="/#examples">
                      <small>Работы</small>
                    </NavLink>
                  </Col>

                  <Col>
                    <NavLink to="/#benefits">
                      <small>Преимущества</small>
                    </NavLink>
                  </Col>

                  <Col>
                    <NavLink to="/#process">
                      <small>Процесс</small>
                    </NavLink>
                  </Col>

                  <Col>
                    <NavLink to="/#calculator">
                      <small>Калькулятор</small>
                    </NavLink>
                  </Col>
                </Row>
              </Col>

              <Col>
                <Row className="flex-column gy-4 gx-0">
                  <Col>
                    <NavLink to="/">
                      <small>Главная</small>
                    </NavLink>
                  </Col>

                  <Col>
                    <NavLink to="/portfolio">
                      <small>Портфолио</small>
                    </NavLink>
                  </Col>

                  <Col>
                    <NavLink to="/blog">
                      <small>Блог</small>
                    </NavLink>
                  </Col>

                  <Col>
                    <NavLink to="/contacts">
                      <small>Контакты</small>
                    </NavLink>
                  </Col>
                </Row>
              </Col>

              <Col>
                <Row className="flex-column gy-4 gx-0">
                  <Col>
                    <small className="text-primary opacity-75">телефон:</small>
                  </Col>

                  <Col>
                    <a href="tel:">
                      <small>+7&nbsp;(962)&nbsp;366&#8209;70&#8209;74</small>
                    </a>
                  </Col>

                  <Col>
                    <a href="tel:">
                      <small>+7&nbsp;(495)&nbsp;136&#8209;70&#8209;74</small>
                    </a>
                  </Col>

                  <Col>
                    <small className="text-primary opacity-75">E-mail:</small>
                  </Col>

                  <Col>
                    <a href="email:">
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
