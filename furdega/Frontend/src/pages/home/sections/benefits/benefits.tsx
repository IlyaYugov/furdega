import { FC } from "react"
import { Row, Col } from "react-bootstrap"

import { CompanyBenefitsSection } from "../../../../types/home/company-benefits-section"

import styles from "../../home.module.scss"
import { BenefitCard } from "./benefit-card"

const Benefits: FC<CompanyBenefitsSection> = ({ header, companyBenefits }) => {
  return (
    <>
      <h2 className={styles["block-title"]}>{header}</h2>

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
