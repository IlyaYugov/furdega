import { FC } from "react"
import { Col, Row } from "react-bootstrap"

import { AboutSection } from "../../../types/home"

const About: FC<AboutSection> = ({ header, text }) => {
  return (
    <>
      <h2 className="block-title">{header}</h2>

      <div className="block-content">
        <Row>
          <Col sm={12} md={9} lg={8} style={{ opacity: "0.8" }}>
            {text}
          </Col>
        </Row>
      </div>
    </>
  )
}

export { About }
