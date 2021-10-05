import { Dispatch, FC, SetStateAction, useState } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"

import { aboutSectionApi } from "../../../../api/home/about-section-api"
import { AdminSectionMode } from "../../../../const/admin"
import {
  AboutSectionCreateRequest,
  AboutSectionResponse,
  AboutSectionUpdateRequest,
} from "../../../../types/home/about"
import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"

type EditProps = {
  data: AboutSectionResponse
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const Edit: FC<EditProps> = ({ data, setMode }) => {
  const isDataEmpty = Object.values(data).every((val) => val === null)

  const [header, setHeader] = useState<string>(data.header || "")
  const [text, setText] = useState<string>(data.text || "")

  const save = async () => {
    if (isDataEmpty) {
      const request: AboutSectionCreateRequest = { header, text }
      await aboutSectionApi.create(request)
    } else {
      const request: AboutSectionUpdateRequest = { header, text }
      await aboutSectionApi.update(request)
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
        <h4 className="fw-bold">Контент</h4>
        <Form.Control
          as="input"
          value={text}
          onChange={(event) => {
            setText(event.target.value)
          }}
        />
      </Col>
    </Row>
  )
}

export { Edit }
