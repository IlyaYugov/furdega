import { Dispatch, FC, SetStateAction } from "react"
import { Col, Row, Button } from "react-bootstrap"

import { AdminSectionMode } from "../../../../const/admin"
import { WorkExamplesSectionResponse } from "../../../../types/home/examples"
import { WorkExampleView } from "./work-example-view"

type ViewProps = {
  data: WorkExamplesSectionResponse
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

  const { header, workExample1, workExample2, workExample3 } = data

  return (
    <Row className="flex-column gy-3">
      <Col>
        <h5>Заголовок</h5>
        <div>{header}</div>
      </Col>

      <WorkExampleView data={workExample1} />
      <WorkExampleView data={workExample2} />
      <WorkExampleView data={workExample3} />

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
