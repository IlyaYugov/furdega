import { FC } from "react"
import LazyLoad from "react-lazyload"
import { Row, Col } from "react-bootstrap"

import { CompanyBenefitResponse } from "../../../types/company-benefits-section"

const BenefitCard: FC<CompanyBenefitResponse & { leftAligned?: boolean }> = ({
  title,
  image,
  description,
  leftAligned = false,
}) => {
  return (
    <Row>
      <Col xs={6}>
        <LazyLoad height={512}>
          <img
            className="img-fluid w-100"
            src={image?.imageUrl}
            alt={image?.imageUrl}
          />
        </LazyLoad>

        <div className="mt-2 mt-md-5">
          <h4 className="fw-bold">{title}</h4>
          <small className="mt-3">{description}</small>
        </div>
      </Col>
      <Col xs={6}></Col>
    </Row>
  )
}

export { BenefitCard }
