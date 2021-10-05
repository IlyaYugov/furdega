import { Dispatch, FC, SetStateAction } from "react"
import { Col, Row, Button } from "react-bootstrap"

import { AdminSectionMode } from "../../../../const/admin"
import { WorkingProcessSectionResponse } from "../../../../types/home/process"
import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"

type ViewProps = {
  data: WorkingProcessSectionResponse
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

  const { header, firstStage, secondStage, thirdStage, finalStage } = data

  return (
    <Row className="flex-column gy-3">
      <Col className="d-flex justify-content-end">
        <Button
          onClick={() => {
            setMode(AdminSectionMode.edit)
          }}
        >
          Редактировать
        </Button>
      </Col>

      <Col>
        <h4 className="fw-bold">Заголовок секции</h4>
        <div>{header}</div>
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <h4 className="fw-bold">Первый этап</h4>
        <div>{firstStage}</div>
      </Col>

      <Col>
        <h4 className="fw-bold">Второй этап</h4>
        <div>{secondStage}</div>
      </Col>

      <Col>
        <h4 className="fw-bold">Третий этап</h4>
        <div>{thirdStage}</div>
      </Col>

      <Col>
        <h4 className="fw-bold">Конечный этап</h4>
        <div>{finalStage}</div>
      </Col>
    </Row>
  )
}

export { View }
