import { FC, useState } from "react"
import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  ListGroup,
  ButtonGroup,
} from "react-bootstrap"

import {
  WorkExample,
  WorkExamplesSection as WorkExamplesSectionType,
} from "../../../../types/home"
import { WorkExamplesSectionRequest } from "../../../../types/home-api/work-examples-section-request"
import { WorkExampleModal } from "./work-example-modal"

const WorkExamplesSection: FC<
  WorkExamplesSectionType & {
    onChange: (request: WorkExamplesSectionRequest) => void
  }
> = (props) => {
  const [header, setHeader] = useState<string>(props.header)
  const [workExamples, setWorkExamples] = useState<WorkExample[]>([
    ...props.workExamples,
  ])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [workExampleToEditIndex, setWorkExampleToEditIndex] =
    useState<number>(-1)

  const onModalConfirm = (workExample: WorkExample) => {
    if (workExampleToEditIndex !== null) {
      const newExamples = [...workExamples]
      newExamples.splice(workExampleToEditIndex, 1, workExample)
      setWorkExamples(newExamples)
    } else {
      setWorkExamples([...workExamples, workExample])
    }
    setIsModalOpen(false)
    setWorkExampleToEditIndex(-1)
  }

  const deleteWorkExampleByIndex = (indexToDelete: number) => {
    setWorkExamples(workExamples.filter((_, index) => index !== indexToDelete))
  }

  return (
    <>
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
          <h4>Работы</h4>

          <ListGroup className="mb-3">
            {workExamples.map((example, index) => (
              <ListGroup.Item>
                <Row className="flex-nowrap">
                  <Col className="flex-fill">{example.title}</Col>
                  <Col>
                    <ButtonGroup size="sm">
                      <Button
                        onClick={() => {
                          setWorkExampleToEditIndex(index)
                          setIsModalOpen(true)
                        }}
                      >
                        Редактировать
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          deleteWorkExampleByIndex(index)
                        }}
                      >
                        Удалить
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <Button
            variant="outline-primary"
            onClick={() => {
              setWorkExampleToEditIndex(-1)
              setIsModalOpen(true)
            }}
          >
            Создать
          </Button>
        </Col>

        <Col>
          <Button
            size="lg"
            onClick={() => {
              props.onChange({ header, workExamples: [] })
            }}
          >
            Применить
          </Button>
        </Col>
      </Row>

      <WorkExampleModal
        show={isModalOpen}
        workExampleToEditIndex={workExampleToEditIndex}
        workExamples={workExamples}
        onConfirm={onModalConfirm}
        onCancel={() => {
          setIsModalOpen(false)
        }}
      />
    </>
  )
}

export { WorkExamplesSection }
