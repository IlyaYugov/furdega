import { Dispatch, FC, SetStateAction } from "react"
import { Row, Col, Button } from "react-bootstrap"

import { ResponseData } from "."
import { AdminSectionMode } from "../../../../const/admin"
import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"

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
        <h4 className="fw-bold">Сотрудники</h4>

        <Row className="flex-column gy-3">
          {employees.map((employee) => (
            <Col>
              {employee.firstName}&nbsp;{employee.lastName}
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export { View }
