import { FC } from "react"
import LazyLoad from "react-lazyload"
import { Row, Col } from "react-bootstrap"

import { CompanyBenefit } from "../../../../types/home/company-benefit"

const BenefitCard: FC<CompanyBenefit & { leftAligned?: boolean }> = ({
  title,
  imageUrl,
  description,
  leftAligned = false,
}) => {
  return (
    <Row>
      <Col xs={6}>
        <LazyLoad height={512}>
          <img className="img-fluid w-100" src={imageUrl} alt={imageUrl} />
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
