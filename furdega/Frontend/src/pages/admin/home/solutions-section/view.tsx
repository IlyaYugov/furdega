import { Dispatch, FC, SetStateAction } from "react"
import { Col, Row, Button } from "react-bootstrap"

import { AdminSectionMode } from "../../../../const/admin"
import { IssueSolutionsSectionResponse } from "../../../../types/home/solutions"
import { SolutionView } from "./solution-view"
import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"

type ViewProps = {
  data: IssueSolutionsSectionResponse
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
    issueSolution1,
    issueSolution2,
    issueSolution3,
    issueSolution4,
  } = data

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
        <h4 className="fw-bold">Решение 1</h4>
        <SolutionView data={issueSolution1} />
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <h4 className="fw-bold">Решение 2</h4>
        <SolutionView data={issueSolution2} />
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <h4 className="fw-bold">Решение 3</h4>
        <SolutionView data={issueSolution3} />
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <h4 className="fw-bold">Решение 4</h4>
        <SolutionView data={issueSolution4} />
      </Col>
    </Row>
  )
}

export { View }
