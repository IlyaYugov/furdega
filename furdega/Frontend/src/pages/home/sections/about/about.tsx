import { FC } from "react"
import { Col, Row } from "react-bootstrap"
import styles from "../../home.module.scss"

const About: FC = () => {
  return (
    <>
      <h2 className={styles["block-title"]}>
        С большой историей о нашей компании
      </h2>
      <div className={styles["block-content"]}>
        <Row>
          <Col sm={12} md={9} lg={8} style={{ opacity: "0.8" }}>
            «Фабрика восстановления мебели» является одной из крупнейших фабрик
            в России по перетяжке и реставрации мебели. Образовалась фабрика в
            2008 году и до сих пор является лидером в своей отрасли, за счет
            надежной репутации и индивидуального подхода к клиентам.
          </Col>
        </Row>
      </div>
    </>
  )
}

export default About
