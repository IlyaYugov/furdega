import { FC, useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"

import { companyBenefitsApi } from "../../../../api/company-benefits-api"
import { Edit } from "./edit"
import { View } from "./view"
import { SectionMode } from "../../../../const/admin"
import { CompanyBenefitsSectionResponse } from "../../../../types/company-benefits-section"

const BenefitsSection: FC = () => {
  const [data, setData] = useState<CompanyBenefitsSectionResponse>(null)
  const [mode, setMode] = useState<SectionMode>(SectionMode.view)

  const fetchData = async () => {
    const data = await companyBenefitsApi.get()
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

export { BenefitsSection }
