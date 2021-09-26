import { FC } from "react"
import { Col, Row } from "react-bootstrap"

import { ReactComponent as YellowSnakeIcon } from "../../assets/svg/yellow-snake.svg"

type PortfolioSectionProps = {
  title: string
}

const PortfolioSection: FC<PortfolioSectionProps> = ({ title }) => {
  return (
    <>
      <Row xs="auto" className="gx-5 flex-nowrap align-items-center">
        <Col>
          <h3>{title}</h3>
        </Col>
        <Col>
          <YellowSnakeIcon />
        </Col>
      </Row>
    </>
  )
}

export { PortfolioSection }
