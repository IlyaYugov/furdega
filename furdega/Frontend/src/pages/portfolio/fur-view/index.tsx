import { FC } from "react"
import { Col, Row } from "react-bootstrap"
import { Image } from "antd"
import { Furniture } from "../../../types/furniture"

type FurViewProps = Furniture & { index: number }

const FurView: FC<FurViewProps> = ({ beforeImage, afterImage, index }) => {
  const afterGutter = index % 2 === 0

  return (
    <Row className="gx-4 flex-nowrap">
      {!afterGutter ? <Col className="d-none d-sm-block" xs={1}></Col> : null}

      <Col xs={6} sm={5}>
        <Image width="100%" src={beforeImage.imageUrl} />
        <Row xs="auto" className="g-0">
          <div className="bg-primary px-4 py-2 text-center">До</div>
        </Row>
      </Col>

      <Col className="d-none d-sm-block" xs={1}></Col>

      <Col xs={6} sm={5}>
        <Image width="100%" src={afterImage.imageUrl} />
        <Row xs="auto" className="g-0">
          <div className="bg-secondary px-4 py-2 text-center">После</div>
        </Row>
      </Col>

      {afterGutter ? <Col className="d-none d-sm-block" xs={1}></Col> : null}
    </Row>
  )
}

export { FurView }
