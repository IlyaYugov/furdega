import { FC } from "react"
import { Col, Row } from "react-bootstrap"

import { CompanyBenefitResponse } from "../../../../types/company-benefits-section"

type BenefitViewProps = CompanyBenefitResponse

const BenefitView: FC<BenefitViewProps> = ({ title, image, description }) => {
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
        <img
          src={image.imageUrl}
          alt={image.imageUrl}
          className="img-fluid w-100"
        />
      </Col>
    </Row>
  )
}

export { BenefitView }
