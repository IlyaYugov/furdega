import { FC, useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"

import { Edit } from "./edit"
import { View } from "./view"
import { AdminSectionMode } from "../../../../const/admin"
import { mainHomeSectionApi } from "../../../../api/home/main-home-section-api"
import { MainHomeSectionResponse } from "../../../../types/home/main"

const MainHomeSection: FC = () => {
  const [data, setData] = useState<MainHomeSectionResponse | null>(null)
  const [mode, setMode] = useState<AdminSectionMode>(AdminSectionMode.view)

  const fetchData = async () => {
    const data = await mainHomeSectionApi.get()
    setData(data)
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

export { MainHomeSection }
