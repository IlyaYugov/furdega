import { FC } from "react"
import { Container, Row, Col } from "react-bootstrap"
import styles from "./thanks.module.scss"

const Thanks: FC = () => {
  return (
    <Container fluid className="g-0 my-5 py-4">
      <Container className="g-0 content">
        <Row className="g-3 py-5">
          <Col xs={12}>
            <h1>Благодарим за обращение!</h1>
          </Col>
          <Col xs={12} className={styles.text}>
            Менеджер получил все данные и уже обрабатывает ваш запрос.
          </Col>
          <Col xs={12} className={styles.text}>
            С вами свежутся в течение 5 минут.
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export { Thanks }
