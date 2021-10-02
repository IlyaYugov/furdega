import { FC } from "react"
import { Row, Col } from "react-bootstrap"

import { ReactComponent as YellowSnakeIcon } from "../../../assets/svg/yellow-snake.svg"
import { IssueSolutionsSectionResponse } from "../../../types/issue-solutions-section"
import { SolutionBlock } from "./solution-block"

const Solutions: FC<IssueSolutionsSectionResponse> = ({
  header,
  issueSolution1,
  issueSolution2,
  issueSolution3,
  issueSolution4,
}) => {
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

      <SolutionBlock {...issueSolution1} />
      <SolutionBlock {...issueSolution2} />
      <SolutionBlock {...issueSolution3} />
      <SolutionBlock {...issueSolution4} />
    </>
  )
}

export { Solutions }
