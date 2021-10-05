import { Dispatch, FC, SetStateAction } from "react"
import { Col, Row, Button } from "react-bootstrap"

import { AdminSectionMode } from "../../../../const/admin"
import { CompanyBenefitsSectionResponse } from "../../../../types/home/benefits"
import { BenefitView } from "./benefit-view"

type ViewProps = {
  data: CompanyBenefitsSectionResponse
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const View: FC<ViewProps> = ({ data, setMode }) => {
  const isDataEmpty = Object.values(data).every((val) => val === null)

  if (isDataEmpty)
    return (
      <Button
        size="lg"
        onClick={() => {
          setMode(AdminSectionMode.edit)
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

      <Col>
        <BenefitView data={companyBenefit1} />
      </Col>

      <Col>
        <BenefitView data={companyBenefit2} />
      </Col>

      <Col>
        <BenefitView data={companyBenefit3} />
      </Col>

      <Col>
        <BenefitView data={companyBenefit4} />
      </Col>

      <Col className="d-flex justify-content-end">
        <Button
          size="lg"
          onClick={() => {
            setMode(AdminSectionMode.edit)
          }}
        >
          Редактировать
        </Button>
      </Col>
    </Row>
  )
}

export { View }
