import { FC, useEffect, useState } from "react"
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap"

import { homeApi } from "../../../api/home-api"
import { WorkingProcessSection } from "../../../types/home"

const ProcessSection: FC = () => {
  const [header, setHeader] = useState<string>("")
  const [firstStage, setFirstStage] = useState<string>("")
  const [secondStage, setSecondStage] = useState<string>("")
  const [thirdStage, setThirdStage] = useState<string>("")
  const [finalStage, setFinalStage] = useState<string>("")

  const fetchContent = async () => {
    const response = await homeApi.getProcessSection()
    setHeader(response.header)
    setFirstStage(response.firstStage)
    setSecondStage(response.secondStage)
    setThirdStage(response.thirdStage)
    setFinalStage(response.finalStage)
  }

  const submit = async (request: WorkingProcessSection) => {
    await homeApi.createOrUpdateWorkingProcessSection(request)
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

      <Col className="d-flex justify-content-end">
        <Row>
          <Col>
            <Button
              size="lg"
              onClick={() => {
                submit({
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

export { ProcessSection }
