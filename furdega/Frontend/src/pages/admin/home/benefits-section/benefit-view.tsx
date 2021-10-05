import { FC } from "react"
import { Col, Row } from "react-bootstrap"

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
        <h5>Заголовок</h5>
        <div>{title}</div>
      </Col>

      <Col>
        <h5>Описание</h5>
        <div>{description}</div>
      </Col>

      <Col>
        <h5>Изображение</h5>
        <img src={image?.imageUrl} alt="" className="img-fluid w-100" />
      </Col>
    </Row>
  )
}

export { BenefitView }
