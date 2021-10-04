import { Dispatch, FC, SetStateAction } from "react"
import { Col, Row, Button } from "react-bootstrap"

import { AdminSectionMode } from "../../../../const/admin"
import { IssueSolutionsSectionResponse } from "../../../../types/issue-solutions-section"
import { SolutionView } from "./solution-view"

type ViewProps = {
  data: IssueSolutionsSectionResponse | null
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

  const {
    header,
    issueSolution1,
    issueSolution2,
    issueSolution3,
    issueSolution4,
  } = data

  return (
    <Row className="flex-column gy-3">
      <Col>
        <h5>Заголовок</h5>
        <div>{header}</div>
      </Col>

      <Col>
        <SolutionView {...issueSolution1} />
      </Col>

      <Col>
        <SolutionView {...issueSolution2} />
      </Col>

      <Col>
        <SolutionView {...issueSolution3} />
      </Col>

      <Col>
        <SolutionView {...issueSolution4} />
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
