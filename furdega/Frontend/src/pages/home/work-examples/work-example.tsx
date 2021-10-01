import { FC } from "react"
import { Col, Container, Row } from "react-bootstrap"

import { WorkExampleResponse } from "../../../types/work-examples-section"
import { WorkExampleImageBlock } from "./work-example-image-block"

const WorkExample: FC<WorkExampleResponse> = ({
  title,
  furnitureType,
  duration,
  workType,
  description,
  beforeImage1,
  beforeImage2,
  beforeImage3,
  afterImage1,
  afterImage2,
  afterImage3,
}) => {
  return (
    <Container className="g-0 pt-5">
      <Row>
        <Col sm={12} md={9} lg={8}>
          <Row className="flex-column gy-5 gx-0 mb-5">
            <Col>
              <h4 className="fw-bold">{title}</h4>
            </Col>

            <Col>
              <Row className="gx-3">
                <Col>
                  <div className="opacity-50">Тип мебели</div>
                  <div className="fs-medium fw-demibold">{furnitureType}</div>
                </Col>
                <Col>
                  <div className="opacity-50">Сроки</div>
                  <div className="fs-medium fw-demibold">{duration}</div>
                </Col>
                <Col>
                  <div className="opacity-50">Тип работы</div>
                  <div className="fs-medium fw-demibold">{workType}</div>
                </Col>
              </Row>
            </Col>

            <Col style={{ opacity: "0.8" }}>{description}</Col>
          </Row>
        </Col>
      </Row>

      <Row className="g-5 flex-column flex-xl-row justify-content-between">
        <WorkExampleImageBlock
          before
          image1={beforeImage1}
          image2={beforeImage2}
          image3={beforeImage3}
        />
        <WorkExampleImageBlock
          image1={afterImage1}
          image2={afterImage2}
          image3={afterImage3}
        />
      </Row>
    </Container>
  )
}

export { WorkExample }
