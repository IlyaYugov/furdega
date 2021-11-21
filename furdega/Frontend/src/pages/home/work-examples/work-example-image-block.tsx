import React from "react"
import { Col, Row } from "react-bootstrap"
import { Image } from "antd"
import { ImageResponse } from "../../../types/image"

type WorkExampleImageBlockProps = {
  before?: boolean
  image1: ImageResponse | null
  image2: ImageResponse | null
  image3: ImageResponse | null
}

const WorkExampleImageBlock: React.FC<WorkExampleImageBlockProps> = ({
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
              <Image width="100%" src={image1?.imageUrl} />
            </Col>
            <Col>
              <div
                className={`${
                  before ? "bg-secondary" : "bg-primary"
                } px-4 py-2 text-center`}
              >
                {before ? "До" : "После"}
              </div>
            </Col>
          </Row>
        </Col>

        <Col xs={6} md={8} xl={6}>
          <Row className="g-3 flex-row flex-xl-column flex-nowrap align-items-end align-items-xl-start">
            <Col md={6} xl={10}>
              <Image width="100%" src={image2?.imageUrl} />
            </Col>

            <Col md={6} xl={12} className="d-none d-md-block">
              <Image width="100%" src={image3?.imageUrl} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export { WorkExampleImageBlock }
