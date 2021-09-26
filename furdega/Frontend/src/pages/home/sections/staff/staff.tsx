import { FC } from "react"
import { Row, Col } from "react-bootstrap"

import { EmployeeCard } from "./employee-card"

import { StaffSection } from "../../../../types/home/staff-section"

import styles from "../../home.module.scss"

const Staff: FC<StaffSection> = ({ header, employees }) => {
  return (
    <>
      <h2 className={styles["block-title"]}>{header}</h2>

      <div className={styles["block-content"]}>
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
