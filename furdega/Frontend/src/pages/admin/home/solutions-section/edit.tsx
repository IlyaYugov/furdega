import { Dispatch, FC, SetStateAction, useState } from "react"
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap"
import clone from "just-clone"
import { v4 as uuidv4 } from "uuid"

import { AdminSectionMode } from "../../../../const/admin"
import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"
import { SolutionEdit } from "./solution-edit"
import {
  IssueSolutionResponse,
  IssueSolutionsSectionResponse,
  IssueSolutionsSectionCreateRequest,
  IssueSolutionsSectionUpdateRequest,
} from "../../../../types/home/solutions"
import { issueSolutionsSectionApi } from "../../../../api/home/issue-solutions-section-api"

type EditProps = {
  data: IssueSolutionsSectionResponse
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const getDefaultSolution = (): IssueSolutionResponse => ({
  title: "",
  image: {
    id: uuidv4(),
    imageUrl: "",
  },
  description: "",
})

type NewImagesBase64 = {
  solution1?: string
  solution2?: string
  solution3?: string
  solution4?: string
}

const Edit: FC<EditProps> = ({ data, setMode }) => {
  const isDataEmpty = Object.values(data).every((val) => val === null)

  const [newImagesBase64, setNewImagesBase64] = useState<NewImagesBase64>({})
  const [header, setHeader] = useState<string>(data.header || "")
  const [solution1, setSolution1] = useState<IssueSolutionResponse>(
    clone(data.issueSolution1 || getDefaultSolution())
  )
  const [solution2, setSolution2] = useState<IssueSolutionResponse>(
    clone(data.issueSolution2 || getDefaultSolution())
  )
  const [solution3, setSolution3] = useState<IssueSolutionResponse>(
    clone(data.issueSolution3 || getDefaultSolution())
  )
  const [solution4, setSolution4] = useState<IssueSolutionResponse>(
    clone(data.issueSolution4 || getDefaultSolution())
  )

  const save = async () => {
    if (isDataEmpty) {
      if (
        !(
          newImagesBase64.solution1 &&
          newImagesBase64.solution2 &&
          newImagesBase64.solution3 &&
          newImagesBase64.solution4
        )
      )
        return

      const request: IssueSolutionsSectionCreateRequest = {
        header,
        issueSolution1: {
          ...solution1,
          image: {
            id: solution1.image.id,
            base64ImageString: newImagesBase64.solution1,
          },
        },
        issueSolution2: {
          ...solution2,
          image: {
            id: solution2.image.id,
            base64ImageString: newImagesBase64.solution2,
          },
        },
        issueSolution3: {
          ...solution3,
          image: {
            id: solution3.image.id,
            base64ImageString: newImagesBase64.solution3,
          },
        },
        issueSolution4: {
          ...solution4,
          image: {
            id: solution4.image.id,
            base64ImageString: newImagesBase64.solution4,
          },
        },
      }

      await issueSolutionsSectionApi.create(request)
    } else {
      const request: IssueSolutionsSectionUpdateRequest = {
        header,
        issueSolution1: {
          ...solution1,
          image: {
            id: solution1.image.id,
            base64ImageString: newImagesBase64.solution1 || null,
          },
        },
        issueSolution2: {
          ...solution2,
          image: {
            id: solution2.image.id,
            base64ImageString: newImagesBase64.solution2 || null,
          },
        },
        issueSolution3: {
          ...solution3,
          image: {
            id: solution3.image.id,
            base64ImageString: newImagesBase64.solution3 || null,
          },
        },
        issueSolution4: {
          ...solution4,
          image: {
            id: solution4.image.id,
            base64ImageString: newImagesBase64.solution4 || null,
          },
        },
      }

      await issueSolutionsSectionApi.update(request)
    }

    setMode(AdminSectionMode.view)
  }

  const onSolution1Change = (
    solution1: IssueSolutionResponse,
    newImageBase64?: string
  ) => {
    setSolution1(solution1)

    if (newImageBase64) {
      setNewImagesBase64({
        ...newImagesBase64,
        solution1: newImageBase64,
      })
    }
  }

  const onSolution2Change = (
    solution2: IssueSolutionResponse,
    newImageBase64?: string
  ) => {
    setSolution2(solution2)

    if (newImageBase64) {
      setNewImagesBase64({
        ...newImagesBase64,
        solution2: newImageBase64,
      })
    }
  }

  const onSolution3Change = (
    solution3: IssueSolutionResponse,
    newImageBase64?: string
  ) => {
    setSolution3(solution3)

    if (newImageBase64) {
      setNewImagesBase64({
        ...newImagesBase64,
        solution3: newImageBase64,
      })
    }
  }

  const onSolution4Change = (
    solution4: IssueSolutionResponse,
    newImageBase64?: string
  ) => {
    setSolution4(solution4)

    if (newImageBase64) {
      setNewImagesBase64({
        ...newImagesBase64,
        solution4: newImageBase64,
      })
    }
  }

  return (
    <Row className="flex-column gy-3">
      <Col>
        <h5>Название секции</h5>

        <InputGroup>
          <InputGroup.Text className="w-25 text-center text-wrap">
            Название
          </InputGroup.Text>

          <Form.Control
            as="textarea"
            value={header}
            onChange={(event) => {
              setHeader(event.target.value)
            }}
          />
        </InputGroup>
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <h5>Решение 1</h5>
        <SolutionEdit value={solution1} onChange={onSolution1Change} />
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <h5>Решение 2</h5>
        <SolutionEdit value={solution2} onChange={onSolution2Change} />
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <h5>Решение 3</h5>
        <SolutionEdit value={solution3} onChange={onSolution3Change} />
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <h5>Решение 4</h5>
        <SolutionEdit value={solution4} onChange={onSolution4Change} />
      </Col>

      <Col className="d-flex justify-content-end">
        <Row>
          <Col>
            <Button
              size="lg"
              className="text-nowrap"
              onClick={() => {
                save()
              }}
            >
              Сохранить изменения
            </Button>
          </Col>
          <Col>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => {
                setMode(AdminSectionMode.view)
              }}
            >
              Отмена
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export { Edit }
