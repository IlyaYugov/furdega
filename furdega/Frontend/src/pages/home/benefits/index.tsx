import { FC } from "react"
import { Row, Col } from "react-bootstrap"

import { CompanyBenefitsSectionResponse } from "../../../types/home/benefits"
import { BenefitCard } from "./benefit-card"
import styles from "./benefit.module.scss"

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

      <div className="block-content">
        <Row className="flex-nowrap mb-5">
          <Col xs={5}>
            <BenefitCard data={companyBenefit1} />
          </Col>
          <Col xs={7}></Col>
        </Row>

        <Row className="flex-nowrap mb-5">
          <Col xs={7}></Col>
          <Col xs={5}>
            <div className={styles.card}>
              <BenefitCard data={companyBenefit2} />
            </div>
          </Col>
        </Row>

        <Row className="flex-nowrap mb-5">
          <Col xs={5}>
            <BenefitCard data={companyBenefit3} />
          </Col>
          <Col xs={7}></Col>
        </Row>

        <Row className="flex-nowrap">
          <Col xs={7}></Col>
          <Col xs={5}>
            <div className={styles.card}>
              <BenefitCard data={companyBenefit4} />
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export { Benefits }
