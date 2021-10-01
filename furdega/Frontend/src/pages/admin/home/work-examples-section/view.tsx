import { Dispatch, FC, SetStateAction } from "react"
import { Col, Row, Button } from "react-bootstrap"

import { SectionMode } from "../../../../const/admin"
import { WorkExamplesSectionResponse } from "../../../../types/work-examples-section"

type ViewProps = {
  data: WorkExamplesSectionResponse
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

  const { header, workExample1, workExample2, workExample3 } = data

  return (
    <Row className="flex-column gy-3">
      <Col>
        <h5>Заголовок</h5>
        <div>{header}</div>
      </Col>

      <Col>{workExample1}</Col>

      <Col>{workExample2}</Col>

      <Col>{workExample3}</Col>

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
