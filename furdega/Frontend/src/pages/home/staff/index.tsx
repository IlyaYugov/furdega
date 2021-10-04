import { FC, useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"

import { EmployeeCard } from "./employee-card"
import { StaffSectionResponse } from "../../../types/staff-section"
import { EmployeeResponse } from "../../../types/staff"
import { staffApi } from "../../../api/staff-api"

const Staff: FC<StaffSectionResponse> = ({ header }) => {
  const [employees, setEmployees] = useState<EmployeeResponse[]>([])

  const fetchData = async () => {
    const data = await staffApi.getAll()
    setEmployees(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

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
