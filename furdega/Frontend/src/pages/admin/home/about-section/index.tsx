import { FC, useEffect, useState } from "react"
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap"

import { aboutSectionApi } from "../../../../api/about-section-api"
import { AboutSectionRequest } from "../../../../types/about-section"

const AboutSection: FC = () => {
  const [header, setHeader] = useState<string>("")
  const [text, setText] = useState<string>("")

  const fetchContent = async () => {
    const response = await aboutSectionApi.get()
    setHeader(response.header)
    setText(response.text)
  }

  const submit = async (request: AboutSectionRequest) => {
    await aboutSectionApi.createOrUpdate(request)
    fetchContent()
  }

  const reset = () => {
    fetchContent()
  }

  useEffect(() => {
    fetchContent()
  }, [])

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

      <Col className="d-flex justify-content-end">
        <Row>
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
          <Col>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => {
                reset()
              }}
            >
              Сбросить
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export { AboutSection }
