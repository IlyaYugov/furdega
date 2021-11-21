import { FC } from "react"
import LazyLoad from "react-lazyload"
import { Row, Col, Image } from "react-bootstrap"

import { EmployeeResponse } from "../../../types/home/employee"

const EmployeeCard: FC<EmployeeResponse & { reverse?: boolean }> = ({
  firstName,
  lastName,
  image,
  description,
  reverse = false,
}) => {
  return (
    <Row
      className={`g-0 flex-nowrap justify-items-between${reverse ? " flex-row-reverse" : ""}`}
    >
      <Col xs={5}>
        <LazyLoad height={479}>
          <Image fluid src={image?.imageUrl} />
        </LazyLoad>
      </Col>

      <Col xs={2}></Col>

      <Col xs={5} className="d-flex flex-column justify-content-end">
        <h4 className="fw-bold">{`${firstName} ${lastName}`}</h4>
        <small className="d-block mt-3">{description}</small>
      </Col>
    </Row>
  )
}

export { EmployeeCard }
