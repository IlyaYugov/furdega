import { Dispatch, FC, SetStateAction, useState } from "react"
import { Row, Col, Button, Form } from "react-bootstrap"

import { workingProcessSectionApi } from "../../../../api/home/working-process-section-api"
import { AdminSectionMode } from "../../../../const/admin"
import { WorkingProcessSectionResponse } from "../../../../types/home/process"
import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"

type EditProps = {
  data: WorkingProcessSectionResponse
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const Edit: FC<EditProps> = ({ data, setMode }) => {
  const isDataEmpty = Object.values(data).every((val) => val === null)

  const [header, setHeader] = useState<string>(data.header || "")
  const [firstStage, setFirstStage] = useState<string>(data.firstStage || "")
  const [secondStage, setSecondStage] = useState<string>(data.secondStage || "")
  const [thirdStage, setThirdStage] = useState<string>(data.thirdStage || "")
  const [finalStage, setFinalStage] = useState<string>(data.finalStage || "")

  const save = async () => {
    const request = {
      header,
      firstStage,
      secondStage,
      thirdStage,
      finalStage,
    }

    if (isDataEmpty) {
      await workingProcessSectionApi.create(request)
    } else {
      await workingProcessSectionApi.update(request)
    }

    setMode(AdminSectionMode.view)
  }

  return (
    <Row className="flex-column gy-3">
      <Col className="d-flex justify-content-end">
        <Row>
          <Col>
            <Button
              className="text-nowrap"
              onClick={() => {
                save()
              }}
            >
              Сохранить изменения
            </Button>
          </Col>
          <Col>
            <Button
              variant="secondary"
              onClick={() => {
                setMode(AdminSectionMode.view)
              }}
            >
              Отмена
            </Button>
          </Col>
        </Row>
      </Col>

      <Col>
        <h4 className="fw-bold">Заголовок секции</h4>
        <Form.Control
          as="input"
          value={header}
          onChange={(event) => {
            setHeader(event.target.value)
          }}
        />
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <h4 className="fw-bold">Первый этап</h4>
        <Form.Control
          as="input"
          value={firstStage}
          onChange={(event) => {
            setFirstStage(event.target.value)
          }}
        />
      </Col>

      <Col>
        <h4 className="fw-bold">Второй этап</h4>
        <Form.Control
          as="input"
          value={secondStage}
          onChange={(event) => {
            setSecondStage(event.target.value)
          }}
        />
      </Col>

      <Col>
        <h4 className="fw-bold">Третий этап</h4>
        <Form.Control
          as="input"
          value={thirdStage}
          onChange={(event) => {
            setThirdStage(event.target.value)
          }}
        />
      </Col>

      <Col>
        <h4 className="fw-bold">Конечный этап</h4>
        <Form.Control
          as="input"
          value={finalStage}
          onChange={(event) => {
            setFinalStage(event.target.value)
          }}
        />
      </Col>
    </Row>
  )
}

export { Edit }
