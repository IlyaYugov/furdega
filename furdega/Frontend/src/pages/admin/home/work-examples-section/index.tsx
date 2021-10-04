import { FC, useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"

import { WorkExamplesSectionResponse } from "../../../../types/work-examples-section"
import { Edit } from "./edit"
import { View } from "./view"
import { AdminSectionMode } from "../../../../const/admin"
import { workExamplesSectionApi } from "../../../../api/home/work-examples-section-api"

const WorkExamplesSection: FC = () => {
  const [data, setData] = useState<WorkExamplesSectionResponse | null>(null)
  const [mode, setMode] = useState<AdminSectionMode>(AdminSectionMode.view)

  const fetchData = async () => {
    const data = await workExamplesSectionApi.get()
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

export { WorkExamplesSection }
