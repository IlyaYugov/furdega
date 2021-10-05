import { FC } from "react"
import { Col, Row } from "react-bootstrap"

import { WorkExampleResponse } from "../../../../types/home/examples"

type WorkExampleViewProps = {
  data: WorkExampleResponse | null
}

const WorkExampleView: FC<WorkExampleViewProps> = ({ data }) => {
  if (!data) return null

  const {
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
  } = data

  return (
    <Row className="flex-column gy-3">
      <Col>
        <div className="fw-bold">Заголовок</div>
        <div>{title}</div>
      </Col>

      <Col>
        <Row className="gx-3">
          <Col>
            <div className="fw-bold">Тип мебели</div>
            <div>{furnitureType}</div>
          </Col>

          <Col>
            <div className="fw-bold">Сроки</div>
            <div>{duration}</div>
          </Col>

          <Col>
            <div className="fw-bold">Тип работы</div>
            <div>{workType}</div>
          </Col>
        </Row>
      </Col>

      <Col>
        <div className="fw-bold">Описание</div>
        <div>{description}</div>
      </Col>

      <Col>
        <div className="fw-bold">Изображения До</div>

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
        <div className="fw-bold">Изображения После</div>

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
