import { FC } from "react"
import { Col, Row } from "react-bootstrap"

import { ReactComponent as YellowSnakeIcon } from "../../assets/svg/yellow-snake.svg"
import styles from "./title.module.scss"

type TitleProps = {
  title: string
}

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <Row className="g-0 mb-5 flex-nowrap">
      <Col>
        <span className={styles.title}>{title}</span>
      </Col>
      <Col className="flex-fill position-relative">
        <YellowSnakeIcon className={styles.snake} />
      </Col>
    </Row>
  )
}

export { Title }
