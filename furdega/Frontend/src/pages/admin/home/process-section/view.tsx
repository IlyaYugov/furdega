import { Dispatch, FC, SetStateAction } from "react"
import { Col, Row, Button } from "react-bootstrap"

import { AdminSectionMode } from "../../../../const/admin"
import { WorkingProcessSectionResponse } from "../../../../types/working-process-section"

type ViewProps = {
  data: WorkingProcessSectionResponse | null
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const View: FC<ViewProps> = ({ data, setMode }) => {
  if (!data)
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

  const { header, firstStage, secondStage, thirdStage, finalStage } = data

  return (
    <Row className="flex-column gy-3">
      <Col>
        <h5>Заголовок</h5>
        <div>{header}</div>
      </Col>

      <Col>
        <h5>Этап 1</h5>
        <div>{firstStage}</div>
      </Col>

      <Col>
        <h5>Этап 2</h5>
        <div>{secondStage}</div>
      </Col>

      <Col>
        <h5>Этап 3</h5>
        <div>{thirdStage}</div>
      </Col>

      <Col>
        <h5>Заключительный этап</h5>
        <div>{finalStage}</div>
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
