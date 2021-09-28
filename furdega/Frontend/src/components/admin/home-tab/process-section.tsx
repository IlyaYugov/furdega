import { FC, useState } from "react"
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap"

import { AdminSectionProps } from "../../../types/admin-section-props"
import { WorkingProcessSection } from "../../../types/home"

const ProcessSection: FC<AdminSectionProps<WorkingProcessSection>> = (
  props
) => {
  const [header, setHeader] = useState<string>(props.header)
  const [firstStage, setFirstStage] = useState<string>(props.firstStage)
  const [secondStage, setSecondStage] = useState<string>(props.secondStage)
  const [thirdStage, setThirdStage] = useState<string>(props.thirdStage)
  const [finalStage, setFinalStage] = useState<string>(props.finalStage)

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
          <InputGroup.Text className="w-25">Первый этап</InputGroup.Text>
          <FormControl
            as="textarea"
            value={firstStage}
            onChange={(event) => {
              setFirstStage(event.target.value)
            }}
          />
        </InputGroup>
      </Col>

      <Col>
        <InputGroup>
          <InputGroup.Text className="w-25">Второй этап</InputGroup.Text>
          <FormControl
            as="textarea"
            value={secondStage}
            onChange={(event) => {
              setSecondStage(event.target.value)
            }}
          />
        </InputGroup>
      </Col>

      <Col>
        <InputGroup>
          <InputGroup.Text className="w-25">Третий этап</InputGroup.Text>
          <FormControl
            as="textarea"
            value={thirdStage}
            onChange={(event) => {
              setThirdStage(event.target.value)
            }}
          />
        </InputGroup>
      </Col>

      <Col>
        <InputGroup>
          <InputGroup.Text className="w-25">Конечный этап</InputGroup.Text>
          <FormControl
            as="textarea"
            value={finalStage}
            onChange={(event) => {
              setFinalStage(event.target.value)
            }}
          />
        </InputGroup>
      </Col>

      <Col>
        <Button
          size="lg"
          onClick={() => {
            props.onChange({
              header,
              firstStage,
              secondStage,
              thirdStage,
              finalStage,
            })
          }}
        >
          Применить
        </Button>
      </Col>
    </Row>
  )
}

export { ProcessSection }
