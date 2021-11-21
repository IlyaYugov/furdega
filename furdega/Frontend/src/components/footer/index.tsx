import { FC } from "react"
import { useLocation } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"

import { ReactComponent as LogoContrastIcon } from "../../assets/svg/logo-contrast.svg"
import { ReactComponent as VkContrastIcon } from "../../assets/svg/vk-contrast.svg"
import { ReactComponent as InstaContrastIcon } from "../../assets/svg/insta-contrast.svg"

import styles from "./footer.module.scss"
import { NavLink } from "react-router-dom"
import { scrollspyAnchorsMap } from "../../const/home"

const Footer: FC = () => {
  const location = useLocation()

  const onFooterLinkClick = (anchorName: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(
        scrollspyAnchorsMap[anchorName].id
      )

      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <Container fluid className="g-0 bg-dark">
      <Container className={`g-0 content ${styles["footer"]}`}>
        <Row className="g-0 flex-column flex-md-row flex-nowrap">
          <Col
            md={4}
            className="mb-5 mb-md-0 d-flex flex-column align-items-md-start align-items-center"
          >
            <NavLink to="/">
              <LogoContrastIcon />
            </NavLink>

            <div className="d-flex justify-content-start mt-4">
              <Row className="flex-nowrap">
                <Col>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://vk.com/deganov_mebel"
                  >
                    <VkContrastIcon />
                  </a>
                </Col>
                <Col>
                  <a
                    target="_blank"
                    rel="noreferrer"
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
                    <NavLink
                      to="/#about"
                      onClick={() => onFooterLinkClick("about")}
                    >
                      <small>О&nbsp;фабрике</small>
                    </NavLink>
                  </Col>

                  <Col>
                    <NavLink
                      to="/#examples"
                      onClick={() => onFooterLinkClick("examples")}
                    >
                      <small>Работы</small>
                    </NavLink>
                  </Col>

                  <Col>
                    <NavLink
                      to="/#benefits"
                      onClick={() => onFooterLinkClick("benefits")}
                    >
                      <small>Преимущества</small>
                    </NavLink>
                  </Col>

                  <Col>
                    <NavLink
                      to="/#process"
                      onClick={() => onFooterLinkClick("process")}
                    >
                      <small>Процесс</small>
                    </NavLink>
                  </Col>

                  <Col>
                    <NavLink
                      to="/#calculator"
                      onClick={() => onFooterLinkClick("calculator")}
                    >
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
                    <a href="tel:+79623667074">
                      <small>+7&nbsp;(962)&nbsp;366&#8209;70&#8209;74</small>
                    </a>
                  </Col>

                  <Col>
                    <a href="tel:+74951367074">
                      <small>+7&nbsp;(495)&nbsp;136&#8209;70&#8209;74</small>
                    </a>
                  </Col>

                  <Col>
                    <small className="text-primary opacity-75">E-mail:</small>
                  </Col>

                  <Col>
                    <a href="mailto:hello@deganov-mebel.ru">
                      <small>hello@deganov-mebel.ru</small>
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
