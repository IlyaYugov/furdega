import { FC } from "react"
import { Col, Image, Row } from "react-bootstrap"

import { CompanyBenefitResponse } from "../../../../types/home/benefits"

type BenefitViewProps = {
  data: CompanyBenefitResponse | null
}

const BenefitView: FC<BenefitViewProps> = ({ data }) => {
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

export { BenefitView }
