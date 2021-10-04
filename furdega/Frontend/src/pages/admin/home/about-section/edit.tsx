import { Dispatch, FC, SetStateAction, useState } from "react"
import { Row, Col, InputGroup, Form, Button } from "react-bootstrap"
import clone from "just-clone"

import { aboutSectionApi } from "../../../../api/home/about-section-api"
import { AdminSectionMode } from "../../../../const/admin"
import { defaultAboutSection } from "../../../../const/home"
import {
  AboutSectionRequest,
  AboutSectionResponse,
} from "../../../../types/about-section"

type EditProps = {
  data: AboutSectionResponse | null
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const Edit: FC<EditProps> = (props) => {
  const isCreate = !props.data

  const [data, setData] = useState<AboutSectionResponse>(
    clone(props.data || defaultAboutSection)
  )

  const save = async () => {
    const request: AboutSectionRequest = { ...data }
    if (isCreate) {
      await aboutSectionApi.create(request)
    } else {
      await aboutSectionApi.update(request)
    }
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
            value={data.header}
            onChange={(event) => {
              setData({ ...data, header: event.target.value })
            }}
          />
        </InputGroup>
      </Col>

      <Col>
        <InputGroup>
          <InputGroup.Text className="w-25">Текст</InputGroup.Text>
          <Form.Control
            as="textarea"
            value={data.text}
            onChange={(event) => {
              setData({ ...data, text: event.target.value })
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
                props.setMode(AdminSectionMode.view)
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
