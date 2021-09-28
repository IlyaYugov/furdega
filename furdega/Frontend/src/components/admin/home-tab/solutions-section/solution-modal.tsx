import { FC, useEffect, useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"

import { IssueSolution } from "../../../../types/home"

type SolutionModalProps = {
  show: boolean
  solutionToEditIndex: number
  issueSolutions: IssueSolution[]
  onCancel: () => void
  onConfirm: (issueSolution: IssueSolution) => void
}

const issueSolutionDefault: IssueSolution = {
  title: "",
  description: "",
  imageUrl: "",
}

const SolutionModal: FC<SolutionModalProps> = ({
  show,
  onConfirm,
  onCancel,
  issueSolutions,
  solutionToEditIndex,
}) => {
  const isEdit = solutionToEditIndex !== -1

  const defaultSolution = isEdit
    ? issueSolutions[solutionToEditIndex]
    : issueSolutionDefault

  const [solution, setSolution] = useState<IssueSolution>({
    ...defaultSolution,
  })

  const onSubmit = () => {
    onConfirm(solution)
  }

  useEffect(() => {
    setSolution({ ...defaultSolution })
  }, [defaultSolution, show])

  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{isEdit ? "Редактирование" : "Создание"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Заголовок</Form.Label>
            <Form.Control
              type="text"
              value={solution.title}
              onChange={(e) => {
                setSolution({
                  ...solution,
                  title: e.target.value,
                })
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Описание</Form.Label>
            <Form.Control
              type="textarea"
              value={solution.description}
              onChange={(e) => {
                setSolution({
                  ...solution,
                  description: e.target.value,
                })
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Отмена
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          {isEdit ? "Редактировать" : "Создать"}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export { SolutionModal }
