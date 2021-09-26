import { FC } from "react"
import { Col, Container, Row, Button } from "react-bootstrap"
import LazyLoad from "react-lazyload"

import { WorkExample as WorkExampleType } from "../../../../types/home/work-example"

enum ImagesType {
  Before,
  After,
}

const WorkExample: FC<WorkExampleType> = ({
  title,
  furnitureType,
  duration,
  workType,
  description,
  imageBeforeUrls,
  imageAfterUrls,
}) => {
  const renderImagesBlock = (type: ImagesType, imageUrls: string[]) => {
    return (
      <Col md={12} xl={5}>
        <Row className="g-3 flex-nowrap align-items-xl-start align-items-end">
          <Col xs={6} md={4} xl={6}>
            <Row className="g-3 flex-column-reverse flex-xl-column">
              <Col>
                <LazyLoad height={512}>
                  <img
                    className="img-fluid w-100"
                    src={imageUrls[0]}
                    alt={imageUrls[0]}
                  />
                </LazyLoad>
              </Col>
              <Col>
                {type === ImagesType.Before ? (
                  <Button variant="secondary" className="w-100 py-3">
                    До
                  </Button>
                ) : (
                  <Button className="w-100 py-3">После</Button>
                )}
              </Col>
            </Row>
          </Col>

          <Col xs={6} md={8} xl={6}>
            <Row className="g-3 flex-row flex-xl-column flex-nowrap align-items-end align-items-xl-start">
              <Col md={6} xl={10}>
                <LazyLoad height={512}>
                  <img
                    className="img-fluid w-100"
                    src={imageUrls[1]}
                    alt={imageUrls[1]}
                  />
                </LazyLoad>
              </Col>

              <Col md={6} xl={12} className="d-none d-md-block">
                <LazyLoad height={512}>
                  <img
                    className="img-fluid w-100"
                    src={imageUrls[2]}
                    alt={imageUrls[2]}
                  />
                </LazyLoad>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    )
  }

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
        {renderImagesBlock(ImagesType.Before, imageBeforeUrls)}
        {renderImagesBlock(ImagesType.After, imageAfterUrls)}
      </Row>
    </Container>
  )
}

export default WorkExample
