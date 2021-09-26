import { FC } from "react"
import LazyLoad from "react-lazyload"
import { Row, Col } from "react-bootstrap"

import { CompanyBenefitsSection } from "../../../../types/home/company-benefits-section"
import { CompanyBenefit } from "../../../../types/home/company-benefit"

import styles from "../../home.module.scss"
import benefitsStyles from "./benefits.module.scss"

const Benefit: FC<CompanyBenefit & { moved?: boolean }> = ({
  title,
  imageUrl,
  description,
  moved = false,
}) => {
  return (
    <>
      <div className={moved ? benefitsStyles["moved-column-pic"] : ""}>
        <LazyLoad height={512}>
          <img className="img-fluid w-100" src={imageUrl} alt={imageUrl} />
        </LazyLoad>
      </div>

      <div className="mt-2 mt-md-5">
        <h4 className="fw-bold">{title}</h4>
        <small className="mt-3">{description}</small>
      </div>
    </>
  )
}

const Benefits: FC<CompanyBenefitsSection> = ({ header, companyBenefits }) => {
  return (
    <>
      <h2 className={styles["block-title"]}>{header}</h2>

      <div>
        <Row className="g-0 flex-nowrap justify-content-evenly flex-column flex-md-row">
          <Col xs={6} md={5} xl={4} className="d-none d-md-block">
            <Row className="flex-column gy-5">
              <Col>
                <Benefit {...companyBenefits[0]} />
              </Col>

              <Col>
                <Benefit {...companyBenefits[1]} />
              </Col>
            </Row>
          </Col>

          <Col xs={6} md={5} xl={4} className="d-none d-md-block">
            <Row className="flex-column gy-5">
              <Col>
                <Benefit moved {...companyBenefits[2]} />
              </Col>

              <Col>
                <Benefit {...companyBenefits[3]} />
              </Col>
            </Row>
          </Col>

          <Col xs={12} className="d-block d-md-none">
            <Row>
              <Col xs={6}>
                <Benefit {...companyBenefits[0]} />
              </Col>
              <Col xs={6}></Col>
            </Row>
          </Col>

          <Col xs={12} className="d-block d-md-none">
            <Row>
              <Col xs={6}></Col>
              <Col xs={6}>
                <Benefit {...companyBenefits[1]} />
              </Col>
            </Row>
          </Col>

          <Col xs={12} className="d-block d-md-none">
            <Row>
              <Col xs={6}>
                <Benefit {...companyBenefits[2]} />
              </Col>
              <Col xs={6}></Col>
            </Row>
          </Col>

          <Col xs={12} className="d-block d-md-none">
            <Row>
              <Col xs={6}></Col>
              <Col xs={6}>
                <Benefit {...companyBenefits[3]} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Benefits
