import { FC, useState } from "react"
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap"

import { AdminSectionProps } from "../../../types/admin-section-props"
import {
  WorkExample,
  WorkExamplesSection as WorkExamplesSectionType,
} from "../../../types/home"

const WorkExamplesSection: FC<AdminSectionProps<WorkExamplesSectionType>> = (
  props
) => {
  const [header, setHeader] = useState<string>(props.header)
  const [workExamples, setWorkExamples] = useState<WorkExample[]>(
    props.workExamples
  )

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

      <Col></Col>

      <Col>
        <Button
          size="lg"
          onClick={() => {
            props.onChange({ header, workExamples })
          }}
        >
          Применить
        </Button>
      </Col>
    </Row>
  )
}

export { WorkExamplesSection }
