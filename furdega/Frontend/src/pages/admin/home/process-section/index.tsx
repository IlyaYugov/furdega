import { FC, useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"

import { Edit } from "./edit"
import { View } from "./view"
import { AdminSectionMode } from "../../../../const/admin"
import { WorkingProcessSectionResponse } from "../../../../types/working-process-section"
import { workingProcessSectionApi } from "../../../../api/home/working-process-section-api"

const ProcessSection: FC = () => {
  const [data, setData] = useState<WorkingProcessSectionResponse | null>(null)
  const [mode, setMode] = useState<AdminSectionMode>(AdminSectionMode.view)

  const fetchData = async () => {
    const data = await workingProcessSectionApi.get()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const renderContent = () => {
    switch (mode) {
      case AdminSectionMode.view:
        return <View data={data} setMode={setMode} />
      case AdminSectionMode.edit:
        return <Edit data={data} setMode={setMode} />
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

export { ProcessSection }