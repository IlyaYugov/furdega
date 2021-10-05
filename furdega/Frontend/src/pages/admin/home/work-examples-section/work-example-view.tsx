import { FC } from "react"
import { Col, Row } from "react-bootstrap"

import { WorkExampleResponse } from "../../../../types/home/examples"

type WorkExampleViewProps = WorkExampleResponse

const WorkExampleView: FC<WorkExampleViewProps> = ({
  title,
  workType,
  furnitureType,
  description,
  duration,
  beforeImage1,
  beforeImage2,
  beforeImage3,
  afterImage1,
  afterImage2,
  afterImage3,
}) => {
  return (
    <Row className="flex-column gy-3">
      <Col>
        <h5>Заголовок</h5>
        <div>{title}</div>
      </Col>

      <Col>
        <Row className="gx-3">
          <Col>
            <h5>Тип мебели</h5>
            <div>{furnitureType}</div>
          </Col>

          <Col>
            <h5>Сроки</h5>
            <div>{duration}</div>
          </Col>

          <Col>
            <h5>Тип работы</h5>
            <div>{workType}</div>
          </Col>
        </Row>
      </Col>

      <Col>
        <h5>Описание</h5>
        <div>{description}</div>
      </Col>

      <Col>
        <h4>Изображения До</h4>

        <Row>
          <Col>
            <img
              src={beforeImage1?.imageUrl}
              alt=""
              className="img-fluid w-100"
            />
          </Col>
          <Col>
            <img
              src={beforeImage2?.imageUrl}
              alt=""
              className="img-fluid w-100"
            />
          </Col>
          <Col>
            <img
              src={beforeImage3?.imageUrl}
              alt=""
              className="img-fluid w-100"
            />
          </Col>
        </Row>
      </Col>

      <Col>
        <h4>Изображения После</h4>

        <Row>
          <Col>
            <img
              src={afterImage1?.imageUrl}
              alt=""
              className="img-fluid w-100"
            />
          </Col>
          <Col>
            <img
              src={afterImage2?.imageUrl}
              alt=""
              className="img-fluid w-100"
            />
          </Col>
          <Col>
            <img
              src={afterImage3?.imageUrl}
              alt=""
              className="img-fluid w-100"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export { WorkExampleView }
