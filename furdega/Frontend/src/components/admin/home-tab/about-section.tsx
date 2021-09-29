import { FC, useEffect, useState } from "react"
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap"

import { homeApi } from "../../../api/home-api"
import { AboutSection as AboutSectionType } from "../../../types/home"

const AboutSection: FC = () => {
  const [header, setHeader] = useState<string>("")
  const [text, setText] = useState<string>("")

  const fetchContent = async () => {
    const response = await homeApi.getAboutSection()
    setHeader(response.header)
    setText(response.text)
  }

  const submit = async (request: AboutSectionType) => {
    await homeApi.createOrUpdateAboutSection(request)
    fetchContent()
  }

  // useEffect(() => {
  //   fetchContent()
  // })

  return (
    <Row className="flex-column gy-3">
      <Col>
        <InputGroup>
          <InputGroup.Text className="w-25 text-center text-wrap">
            Текст заголовка
          </InputGroup.Text>

          <FormControl
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
          <InputGroup.Text className="w-25">Текст секции</InputGroup.Text>
          <FormControl
            as="textarea"
            value={text}
            onChange={(event) => {
              setText(event.target.value)
            }}
          />
        </InputGroup>
      </Col>

      <Col>
        <Button
          size="lg"
          onClick={() => {
            submit({ header, text })
          }}
        >
          Применить
        </Button>
      </Col>
    </Row>
  )
}

export { AboutSection }
