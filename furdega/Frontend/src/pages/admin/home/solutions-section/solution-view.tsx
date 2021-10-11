import { FC } from "react"
import { Col, Image, Row } from "react-bootstrap"

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
        <Image fluid src={image?.imageUrl} />
      </Col>
    </Row>
  )
}

export { SolutionView }
