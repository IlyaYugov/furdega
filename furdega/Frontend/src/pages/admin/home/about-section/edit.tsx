import { Dispatch, FC, SetStateAction, useState } from "react"
import { Row, Col, InputGroup, Form, Button } from "react-bootstrap"

import { aboutSectionApi } from "../../../../api/home/about-section-api"
import { AdminSectionMode } from "../../../../const/admin"
import {
  AboutSectionCreateRequest,
  AboutSectionResponse,
  AboutSectionUpdateRequest,
} from "../../../../types/home/about"

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
      <Col>
        <InputGroup>
          <InputGroup.Text className="w-25 text-center text-wrap">
            Текст заголовка
          </InputGroup.Text>

          <Form.Control
            as="textarea"
            value={header}
            onChange={(event) => {
              setHeader(event.target.value)
            }}
          />
        </InputGroup>
      </Col>

      <Col>
        <InputGroup>
          <InputGroup.Text className="w-25">Текст</InputGroup.Text>
          <Form.Control
            as="textarea"
            value={text}
            onChange={(event) => {
              setText(event.target.value)
            }}
          />
        </InputGroup>
      </Col>

      <Col className="d-flex justify-content-end">
        <Row>
          <Col>
            <Button
              size="lg"
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
              size="lg"
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
    </Row>
  )
}

export { Edit }
