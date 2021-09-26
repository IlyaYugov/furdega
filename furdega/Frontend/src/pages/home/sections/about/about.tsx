import { FC } from "react"
import { Col, Row } from "react-bootstrap"

import { AboutSection } from "../../../../types/home/about-section"

import styles from "../../home.module.scss"

const About: FC<AboutSection> = ({ header, text }) => {
  return (
    <>
      <h2 className={styles["block-title"]}>{header}</h2>

      <div className={styles["block-content"]}>
        <Row>
          <Col sm={12} md={9} lg={8} style={{ opacity: "0.8" }}>
            {text}
          </Col>
        </Row>
      </div>
    </>
  )
}

export default About
