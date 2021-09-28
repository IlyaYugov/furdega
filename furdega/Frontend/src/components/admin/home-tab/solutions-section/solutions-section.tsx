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

import { AdminSectionProps } from "../../../../types/admin-section-props"
import { IssueSolution, IssueSolutionsSection } from "../../../../types/home"

import { SolutionModal } from "./solution-modal"

const SolutionsSection: FC<AdminSectionProps<IssueSolutionsSection>> = (
  props
) => {
  const [header, setHeader] = useState<string>(props.header)
  const [issueSolutions, setIssueSolutions] = useState<IssueSolution[]>([
    ...props.issueSolutions,
  ])

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [solutionToEditIndex, setSolutionToEditIndex] = useState<number>(-1)

  const onModalConfirm = (issueSolution: IssueSolution) => {
    if (solutionToEditIndex !== null) {
      const newExamples = [...issueSolutions]
      newExamples.splice(solutionToEditIndex, 1, issueSolution)
      setIssueSolutions(newExamples)
    } else {
      setIssueSolutions([...issueSolutions, issueSolution])
    }
    setIsModalOpen(false)
    setSolutionToEditIndex(-1)
  }

  const deleteSolutionByIndex = (indexToDelete: number) => {
    setIssueSolutions(
      issueSolutions.filter((_, index) => index !== indexToDelete)
    )
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
          <h4>Решения</h4>

          <ListGroup className="mb-3">
            {issueSolutions.map((solution, index) => (
              <ListGroup.Item>
                <Row className="flex-nowrap">
                  <Col className="flex-fill">{solution.title}</Col>
                  <Col>
                    <ButtonGroup size="sm">
                      <Button
                        onClick={() => {
                          setSolutionToEditIndex(index)
                          setIsModalOpen(true)
                        }}
                      >
                        Редактировать
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          deleteSolutionByIndex(index)
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
              setSolutionToEditIndex(-1)
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
              props.onChange({ header, issueSolutions })
            }}
          >
            Применить
          </Button>
        </Col>
      </Row>

      <SolutionModal
        show={isModalOpen}
        solutionToEditIndex={solutionToEditIndex}
        issueSolutions={issueSolutions}
        onConfirm={onModalConfirm}
        onCancel={() => {
          setIsModalOpen(false)
        }}
      />
    </>
  )
}

export { SolutionsSection }
