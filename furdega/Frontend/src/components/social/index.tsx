import { FC } from "react"
import { Col, Row } from "react-bootstrap"
import { ReactComponent as WhatsappIcon } from "../../assets/svg/whatsapp.svg"
import { ReactComponent as ViberIcon } from "../../assets/svg/viber.svg"
import { ReactComponent as TelegramIcon } from "../../assets/svg/telegram.svg"

export const Social: FC = () => {
  return (
    <Row className="gy-3 flex-column align-items-center d-sm-flex d-none">
      <Col md={8} className="opacity-50 text-center">
        всегда онлайн
      </Col>
      <Col md={8}>
        <Row xs="auto" className="gx-4 flex-nowrap justify-content-center">
          <Col>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/79623667074"
            >
              <WhatsappIcon />
            </a>
          </Col>
          <Col>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://viber.click/79623667074"
            >
              <ViberIcon />
            </a>
          </Col>
          <Col>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://t.me/deganov_mebel"
            >
              <TelegramIcon />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
