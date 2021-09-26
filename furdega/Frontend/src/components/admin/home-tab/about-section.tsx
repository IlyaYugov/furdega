import { FC, useState } from "react"
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap"

import { AdminSectionProps } from "../../../types/admin-section-props"
import { AboutSection as AboutSectionType } from "../../../types/home"

const AboutSection: FC<AdminSectionProps<AboutSectionType>> = (props) => {
  const [header, setHeader] = useState<string>(props.header)
  const [text, setText] = useState<string>(props.text)

  return (
    <Row className="flex-column">
      <Col>
        <InputGroup className="mb-3">
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
        <InputGroup className="mb-3">
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
            props.onChange({ header, text })
          }}
        >
          Применить
        </Button>
      </Col>
    </Row>
  )
}

export { AboutSection }
