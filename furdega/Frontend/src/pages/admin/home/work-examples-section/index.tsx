import { FC, useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"

import { workExamplesSectionApi } from "../../../../api/work-examples-section-api"
import { WorkExamplesSectionResponse } from "../../../../types/work-examples-section"
import { Edit } from "./edit"
import { View } from "./view"
import { SectionMode } from "../../../../const/admin"

const WorkExamplesSection: FC = () => {
  const [data, setData] = useState<WorkExamplesSectionResponse>(null)
  const [mode, setMode] = useState<SectionMode>(SectionMode.view)

  const fetchData = async () => {
    const data = await workExamplesSectionApi.get()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const renderContent = () => {
    switch (mode) {
      case SectionMode.view:
        return <View data={data} setMode={setMode} />
      case SectionMode.edit:
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
