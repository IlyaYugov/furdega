import { Dispatch, FC, SetStateAction } from "react"
import { Row, Col, Button, ListGroup } from "react-bootstrap"

import { ResponseData } from "."
import { AdminSectionMode } from "../../../../const/admin"

type ViewProps = {
  data: ResponseData
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const View: FC<ViewProps> = ({ data, setMode }) => {
  const isDataEmpty = Object.values(data).every(
    (val) => (Array.isArray(val) && val.length === 0) || val === null
  )

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

  const { header, employees } = data

  return (
    <Row className="flex-column gy-3">
      <Col>
        <h5>Заголовок</h5>
        <div>{header}</div>
      </Col>

      <Col>
        <h4>Персонал</h4>

        <ListGroup className="mb-3">
          {employees.map((employee) => (
            <ListGroup.Item>
              <Row className="flex-nowrap">
                <Col className="flex-fill">
                  {employee.firstName}&nbsp;{employee.lastName}
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
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
