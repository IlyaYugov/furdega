import { FC } from "react"
import { Col, Container, Row } from "react-bootstrap"

import { WorkExampleImageBlock } from "./work-example-image-block"
import { WorkExample as WorkExampleType } from "../../../types/home"

const WorkExample: FC<WorkExampleType> = ({
  title,
  furnitureType,
  duration,
  workType,
  description,
  imageBeforeUrls,
  imageAfterUrls,
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
        <WorkExampleImageBlock before imageUrls={imageBeforeUrls} />
        <WorkExampleImageBlock imageUrls={imageAfterUrls} />
      </Row>
    </Container>
  )
}

export { WorkExample }
