import { Dispatch, FC, SetStateAction } from "react"
import { Col, Row, Button } from "react-bootstrap"

import { SectionMode } from "../../../../const/admin"
import { CompanyBenefitsSectionResponse } from "../../../../types/company-benefits-section"

type ViewProps = {
  data: CompanyBenefitsSectionResponse
  setMode: Dispatch<SetStateAction<SectionMode>>
}

const View: FC<ViewProps> = ({ data, setMode }) => {
  if (!data)
    return (
      <Button
        size="lg"
        onClick={() => {
          setMode(SectionMode.edit)
        }}
      >
        Создать
      </Button>
    )

  const {
    header,
    companyBenefit1,
    companyBenefit2,
    companyBenefit3,
    companyBenefit4,
  } = data

  return (
    <Row className="flex-column gy-3">
      <Col>
        <h5>Заголовок</h5>
        <div>{header}</div>
      </Col>

      {/* TODO add view */}
      <Col>{companyBenefit1}</Col>

      <Col>{companyBenefit2}</Col>

      <Col>{companyBenefit3}</Col>

      <Col>{companyBenefit4}</Col>

      <Col className="d-flex justify-content-end">
        <Button
          size="lg"
          onClick={() => {
            setMode(SectionMode.edit)
          }}
        >
          Редактировать
        </Button>
      </Col>
    </Row>
  )
}

export { View }
