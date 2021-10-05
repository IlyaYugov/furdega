import { FC } from "react"
import { Row, Col } from "react-bootstrap"

import { CompanyBenefitsSectionResponse } from "../../../types/home/benefits"
import { BenefitCard } from "./benefit-card"

const Benefits: FC<CompanyBenefitsSectionResponse> = ({
  header,
  companyBenefit1,
  companyBenefit2,
  companyBenefit3,
  companyBenefit4,
}) => {
  return (
    <>
      <h2 className="block-title">{header}</h2>

      <div>
        <Row className="g-0 flex-nowrap justify-content-evenly flex-column flex-md-row">
          <Col xs={12}>
            <BenefitCard data={companyBenefit1} />
          </Col>
          <Col xs={12}>
            <BenefitCard data={companyBenefit2} />
          </Col>
          <Col xs={12}>
            <BenefitCard data={companyBenefit3} />
          </Col>
          <Col xs={12}>
            <BenefitCard data={companyBenefit4} />
          </Col>
        </Row>
      </div>
    </>
  )
}

export { Benefits }
