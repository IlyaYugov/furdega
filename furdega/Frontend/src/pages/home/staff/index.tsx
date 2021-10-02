import { FC } from "react"
import { Row, Col } from "react-bootstrap"

import { EmployeeCard } from "./employee-card"
import { StaffSectionResponse } from "../../../types/staff-section"

const Staff: FC<StaffSectionResponse> = ({ header, employees }) => {
  return (
    <>
      <h2 className="block-title">{header}</h2>

      <div className="block-content">
        <Row className="flex-column gy-5">
          {employees.map((employee, index) => (
            <Col>
              <EmployeeCard reverse={index % 2 === 1} {...employee} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

export { Staff }
