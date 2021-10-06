import { FC, useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"

import { Edit } from "./edit"
import { View } from "./view"
import { AdminSectionMode } from "../../../../const/admin"
import { staffSectionApi } from "../../../../api/sections/staff-section-api"
import { employeesApi } from "../../../../api/employees-api"
import { StaffSectionResponse } from "../../../../types/home/staff"
import { EmployeeResponse } from "../../../../types/home/employee"

export type ResponseData = StaffSectionResponse & {
  employees: EmployeeResponse[]
}

const StaffSection: FC = () => {
  const [data, setData] = useState<ResponseData | null>(null)
  const [mode, setMode] = useState<AdminSectionMode>(AdminSectionMode.view)

  const fetchData = async () => {
    const sectionData = await staffSectionApi.get()
    if (!sectionData) {
      setData(null)
      return
    }

    const employees = await employeesApi.getAll()
    setData({ ...sectionData, employees })
  }

  useEffect(() => {
    fetchData()
  }, [mode])

  const renderContent = () => {
    if (!data) return null

    switch (mode) {
      case AdminSectionMode.view:
        return <View data={data} setMode={setMode} />
      case AdminSectionMode.edit:
        return <Edit data={data} fetchData={fetchData} setMode={setMode} />
      default:
        return null
    }
  }

  return (
    <Row className="flex-column gy-3">
      <Col>{renderContent()}</Col>
    </Row>
  )
}

export { StaffSection }
