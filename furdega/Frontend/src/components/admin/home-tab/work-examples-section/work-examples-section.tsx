import { FC, useEffect, useState } from "react"
import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  ListGroup,
  ButtonGroup,
} from "react-bootstrap"
import { homeApi } from "../../../../api/home-api"

import { WorkExample } from "../../../../types/home"
import { WorkExampleRequest } from "../../../../types/home-api/work-example-request"
import { WorkExamplesSectionRequest } from "../../../../types/home-api/work-examples-section-request"
import { getWorkExampleRequestFromWorkExample } from "../../../../utils/getWorkExampleRequestFromWorkExample"
import { WorkExampleCreateModal } from "./work-example-create-modal"
import { WorkExampleEditModal } from "./work-example-edit-modal"

const WorkExamplesSection: FC = () => {
  const [header, setHeader] = useState<string>("")
  const [workExamples, setWorkExamples] = useState<WorkExample[]>([])
  const [workExampleRequests, setWorkExampleRequests] = useState<
    WorkExampleRequest[]
  >([])

  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false)

  const [workExampleToEditIndex, setWorkExampleToEditIndex] =
    useState<number>(-1)

  const fetchContent = async () => {
    const data = await homeApi.getWorkExamplesSection()

    setHeader(data.header)
    setWorkExamples(data.workExamples)
    setWorkExampleRequests(
      data.workExamples.map((e) => getWorkExampleRequestFromWorkExample(e))
    )
  }

  const submit = async (section: WorkExamplesSectionRequest) => {
    await homeApi.createOrUpdateWorkExamplesSection(section)
    await fetchContent()
  }

  const reset = () => {
    fetchContent()
  }

  useEffect(() => {
    fetchContent()
  }, [])

  const onCreateModalConfirm = async (
    workExampleRequest: WorkExampleRequest
  ) => {
    const newWorkExampleRequests = [...workExampleRequests, workExampleRequest]
    await submit({ header, workExamples: newWorkExampleRequests })
    setIsCreateModalOpen(false)
  }

  const onEditModalConfirm = async (workExampleRequest: WorkExampleRequest) => {
    if (workExampleToEditIndex !== -1) {
      const newWorkExampleRequests = [...workExampleRequests]
      newWorkExampleRequests.splice(
        workExampleToEditIndex,
        1,
        workExampleRequest
      )

      await submit({ header, workExamples: newWorkExampleRequests })
    }

    setIsEditModalOpen(false)
    setWorkExampleToEditIndex(-1)
  }

  const deleteWorkExampleRequestByIndex = (indexToDelete: number) => {
    setWorkExampleRequests(
      workExampleRequests.filter((_, index) => index !== indexToDelete)
    )
  }

  const workExampleToEdit = workExamples[workExampleToEditIndex]

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
                          setIsEditModalOpen(true)
                        }}
                      >
                        Редактировать
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          deleteWorkExampleRequestByIndex(index)
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
            variant="outline-dark"
            onClick={() => {
              setIsCreateModalOpen(true)
            }}
          >
            Добавить
          </Button>
        </Col>

        <Col className="d-flex justify-content-end">
          <Row>
            <Col>
              <Button
                size="lg"
                onClick={() => {
                  submit({ header, workExamples: workExampleRequests })
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

      <WorkExampleCreateModal
        show={isCreateModalOpen}
        onConfirm={onCreateModalConfirm}
        onCancel={() => {
          setIsCreateModalOpen(false)
        }}
      />

      {workExampleToEdit && (
        <WorkExampleEditModal
          show={isEditModalOpen}
          workExample={workExampleToEdit}
          onConfirm={onEditModalConfirm}
          onCancel={() => {
            setIsEditModalOpen(false)
            setWorkExampleToEditIndex(-1)
          }}
        />
      )}
    </>
  )
}

export { WorkExamplesSection }
