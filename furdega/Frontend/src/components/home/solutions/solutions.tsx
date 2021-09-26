import { FC } from "react"
import { Row, Col } from "react-bootstrap"

import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"
import { IssueSolutionsSection } from "../../../types/home"
import { SolutionBlock } from "./solution-block"

const Solutions: FC<IssueSolutionsSection> = ({ header, issueSolutions }) => {
  return (
    <>
      <Row className="g-0 justify-content-center">
        <Col md={8}>
          <h2 className="text-white">{header}</h2>
        </Col>
      </Row>

      <Row className="g-0 my-5">
        <Col md={8} className="position-relative" style={{ height: "53px" }}>
          <YellowSnakeIcon className="position-absolute" style={{ right: 0 }} />
        </Col>
        <Col md={4}></Col>
      </Row>

      {issueSolutions.map((issueSolution, index) => (
        <SolutionBlock leftAligned={index % 2 === 0} {...issueSolution} />
      ))}
    </>
  )
}

export { Solutions }
