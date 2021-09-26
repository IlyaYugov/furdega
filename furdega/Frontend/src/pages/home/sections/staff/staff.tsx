import { FC } from "react"
import LazyLoad from "react-lazyload"
import { Row, Col } from "react-bootstrap"

import { StaffSection } from "../../../../types/home/staff-section"

import styles from "../../home.module.scss"

const Staff: FC<StaffSection> = ({ header, employees }) => {
  return (
    <>
      <h2 className={styles["block-title"]}>{header}</h2>

      <div className={styles["block-content"]}>
        <Row className="flex-column gy-5">
          <Col>
            <Row className="justify-items-between">
              <Col xs={5}>
                <LazyLoad height={479}>
                  <img
                    className="img-fluid w-100"
                    src={employees[0].imageUrl}
                    alt={employees[0].imageUrl}
                  />
                </LazyLoad>
              </Col>
              <Col xs={5} className="d-flex flex-column justify-content-end">
                <h4 className="fw-bold">{employees[0].title}</h4>
                <small className="d-block mt-3">
                  {employees[0].description}
                </small>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row className="flex-row-reverse justify-items-between">
              <Col xs={5}>
                <LazyLoad height={479}>
                  <img
                    className="img-fluid w-100"
                    src={employees[1].imageUrl}
                    alt={employees[1].imageUrl}
                  />
                </LazyLoad>
              </Col>
              <Col xs={5} className="d-flex flex-column justify-content-end">
                <h4 className="fw-bold">{employees[1].title}</h4>
                <small className="d-block mt-3">
                  {employees[1].description}
                </small>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Staff
