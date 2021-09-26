import { FC } from "react"
import { Row, Col } from "react-bootstrap"

import { BenefitCard } from "./benefit-card"
import { CompanyBenefitsSection } from "../../../types/home"

const Benefits: FC<CompanyBenefitsSection> = ({ header, companyBenefits }) => {
  return (
    <>
      <h2 className="block-title">{header}</h2>

      <div>
        <Row className="g-0 flex-nowrap justify-content-evenly flex-column flex-md-row">
          {companyBenefits.map((companyBenefit, index) => (
            <Col xs={12}>
              <BenefitCard leftAligned={index % 2 === 0} {...companyBenefit} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

export { Benefits }
