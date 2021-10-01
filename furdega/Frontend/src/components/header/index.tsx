import { FC, forwardRef, MouseEvent as ReactMouseEvent, useState } from "react"
import { Col, Container, Dropdown, Row } from "react-bootstrap"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"

import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg"
import { ReactComponent as WhatsappIcon } from "../../assets/svg/whatsapp.svg"
import { ReactComponent as ViberIcon } from "../../assets/svg/viber.svg"
import { ReactComponent as TelegramIcon } from "../../assets/svg/telegram.svg"
import { ReactComponent as PhoneIcon } from "../../assets/svg/phone.svg"
import { BurgerButton } from "../burger-button"
import { routes } from "../../const/routes"

import styles from "./header.module.scss"

const DropdownToggle = forwardRef<HTMLDivElement | null>(
  ({ children }, ref) => {
    return (
      <>
        <Container
          fluid
          style={{ height: "1px", background: "var(--bs-gray-300)" }}
        ></Container>

        <Container ref={ref}></Container>

        {children}
      </>
    )
  }
)

DropdownToggle.displayName = "DropdownToggle"

const Header: FC = () => {
  const location = useLocation()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className={styles.wrapper}>
        <Container className="g-0 content">
          <Row className="flex-nowrap g-0">
            <Col
              xs={8}
              sm={5}
              md={7}
              lg={7}
              xl={7}
              className={`border-end d-flex flex-nowrap justify-content-between pe-lg-5 pe-md-3 pe-0 ${styles["header-section"]}`}
            >
              <LogoIcon />

              <div className="d-none d-md-block">
                <div className="mb-1 opacity-50">написать нам</div>
                <Row className="gx-3">
                  <Col>
                    <WhatsappIcon />
                  </Col>
                  <Col>
                    <ViberIcon />
                  </Col>
                  <Col>
                    <TelegramIcon />
                  </Col>
                </Row>
              </div>
            </Col>

            <Col
              xs={2}
              sm={4}
              md={3}
              lg={3}
              xl={3}
              className={`d-flex align-items-center justify-content-center border-end ${styles["header-section"]}`}
            >
              <div className="d-none d-sm-flex flex-column justify-content-start text-nowrap">
                <div className="mb-1 opacity-50">связаться с нами</div>
                <div className="fw-demibold fs-medium">8 800 242 24 42</div>
              </div>

              <div className="d-sm-none">
                <PhoneIcon />
              </div>
            </Col>

            <Col
              xs={2}
              sm={3}
              md={2}
              lg={2}
              xl={2}
              className={`d-flex align-items-center justify-content-center ${styles["header-section"]}`}
            >
              <div
                role="button"
                onClick={(e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
                  e.preventDefault()
                  setShowMenu(!showMenu)
                }}
              >
                <BurgerButton open={showMenu} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Dropdown
        align="end"
        show={showMenu}
        onToggle={(isOpen) => {
          setShowMenu(isOpen)
        }}
      >
        <Dropdown.Toggle as={DropdownToggle}></Dropdown.Toggle>

        <Dropdown.Menu>
          <Row className="flex-column gy-3 gx-0 ps-4 ps-sm-5 pe-3 pe-sm-5 py-3">
            {routes.map((route, index) => (
              <Col
                key={`route-${index}`}
                className="d-flex justify-content-end"
              >
                <Link
                  to={route.path}
                  className={
                    "text-decoration-none text-dark opacity-75" +
                    (location.pathname === route.path
                      ? " active opacity-100 fw-bold"
                      : "")
                  }
                  onClick={() => {
                    setShowMenu(false)
                  }}
                >
                  {route.name}
                </Link>
              </Col>
            ))}
          </Row>

          <div className="d-flex d-sm-none flex-column align-items-end border-top text-nowrap ps-4 ps-sm-5 pe-3 pe-sm-5 py-3">
            <div className="mb-1 opacity-50">связаться с нами</div>
            <div className="fw-demibold">8 800 242 24 42</div>
          </div>

          <div className="d-flex flex-column align-items-end d-md-none border-top ps-4 ps-sm-5 pe-3 pe-sm-5 py-3">
            <div className="mb-1 opacity-50">написать нам</div>
            <Row className="gx-3">
              <Col>
                <WhatsappIcon />
              </Col>
              <Col>
                <ViberIcon />
              </Col>
              <Col>
                <TelegramIcon />
              </Col>
            </Row>
          </div>
        </Dropdown.Menu>
      </Dropdown>

      {showMenu ? <div className={styles["menu-backdrop"]}></div> : null}
    </>
  )
}

export { Header }
