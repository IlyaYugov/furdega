import { FC } from "react"
import { Col, Row } from "react-bootstrap"

import { IssueSolutionResponse } from "../../../../types/home/solutions"

type SolutionViewProps = {
  data: IssueSolutionResponse | null
}

const SolutionView: FC<SolutionViewProps> = ({ data }) => {
  if (!data) return null

  const { title, image, description } = data

  return (
    <Row className="flex-column gy-3">
      <Col>
        <div className="fw-bold">Заголовок</div>
        <div>{title}</div>
      </Col>

      <Col>
        <div className="fw-bold">Описание</div>
        <div>{description}</div>
      </Col>

      <Col>
        <div className="fw-bold">Изображение</div>
        <img src={image?.imageUrl} alt="" className="img-fluid w-100" />
      </Col>
    </Row>
  )
}

export { SolutionView }
