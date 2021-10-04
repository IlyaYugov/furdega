import { FC } from "react"
import { Col, Row, Button } from "react-bootstrap"
import LazyLoad from "react-lazyload"

import { ImageResponse } from "../../../types/image-response"

type WorkExampleImageBlockProps = {
  before?: boolean
  image1: ImageResponse
  image2: ImageResponse
  image3: ImageResponse
}

const WorkExampleImageBlock: FC<WorkExampleImageBlockProps> = ({
  before = false,
  image1,
  image2,
  image3,
}) => {
  return (
    <Col md={12} xl={5}>
      <Row className="g-3 flex-nowrap align-items-xl-start align-items-end">
        <Col xs={6} md={4} xl={6}>
          <Row className="g-3 flex-column-reverse flex-xl-column">
            <Col>
              <LazyLoad height={512}>
                <img
                  className="img-fluid w-100"
                  src={image1?.imageUrl}
                  alt={image1?.imageUrl}
                />
              </LazyLoad>
            </Col>
            <Col>
              {before ? (
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
                  src={image2?.imageUrl}
                  alt={image2?.imageUrl}
                />
              </LazyLoad>
            </Col>

            <Col md={6} xl={12} className="d-none d-md-block">
              <LazyLoad height={512}>
                <img
                  className="img-fluid w-100"
                  src={image3?.imageUrl}
                  alt={image3?.imageUrl}
                />
              </LazyLoad>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export { WorkExampleImageBlock }
