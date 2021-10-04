import { Dispatch, FC, SetStateAction, useState } from "react"
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap"
import clone from "just-clone"
import { v4 as uuidv4 } from "uuid"

import { AdminSectionMode } from "../../../../const/admin"
import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"
import { FormInputEvent } from "../../../../types/utils"
import { ImageRequest } from "../../../../types/image-request"
import {
  IssueSolutionResponse,
  IssueSolutionsSectionRequest,
  IssueSolutionsSectionResponse,
} from "../../../../types/issue-solutions-section"
import { SolutionEdit } from "./solution-edit"

type EditProps = {
  data: IssueSolutionsSectionResponse | null
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const getNewSolution = (): IssueSolutionResponse => ({
  title: "",
  image: {
    id: uuidv4(),
    imageUrl: "",
  },
  description: "",
})

const getDefaultResponseData = (): IssueSolutionsSectionResponse => ({
  header: "",
  issueSolution1: getNewSolution(),
  issueSolution2: getNewSolution(),
  issueSolution3: getNewSolution(),
  issueSolution4: getNewSolution(),
})

const getDefaultRequestData = ({
  header,
  issueSolution1,
  issueSolution2,
  issueSolution3,
  issueSolution4,
}: IssueSolutionsSectionResponse): IssueSolutionsSectionRequest => ({
  header,
  issueSolution1: {
    title: issueSolution1.title,
    description: issueSolution1.description,
  },
  issueSolution2: {
    title: issueSolution2.title,
    description: issueSolution2.description,
  },
  issueSolution3: {
    title: issueSolution3.title,
    description: issueSolution3.description,
  },
  issueSolution4: {
    title: issueSolution4.title,
    description: issueSolution4.description,
  },
})

const Edit: FC<EditProps> = (props) => {
  const isCreate = !props.data

  const data = props.data || getDefaultResponseData()

  const [requestData, setRequestData] = useState<IssueSolutionsSectionRequest>(
    getDefaultRequestData(data)
  )
  const [header, setHeader] = useState<string>(data.header)
  const [solution1, setSolution1] = useState<IssueSolutionResponse>(
    clone(data.issueSolution1)
  )
  const [solution2, setSolution2] = useState<IssueSolutionResponse>(
    clone(data.issueSolution2)
  )
  const [solution3, setSolution3] = useState<IssueSolutionResponse>(
    clone(data.issueSolution3)
  )
  const [solution4, setSolution4] = useState<IssueSolutionResponse>(
    clone(data.issueSolution4)
  )

  const save = async () => {
    console.log(requestData)
  }

  const onHeaderChange = (event: FormInputEvent) => {
    const value = (event.target as HTMLInputElement).value
    setHeader(value)
    setRequestData({ ...requestData, header: value })
  }

  const onSolution1Change = (
    solution1: IssueSolutionResponse,
    newImage?: ImageRequest
  ) => {
    setSolution1(solution1)

    if (newImage) {
      setRequestData({
        ...requestData,
        issueSolution1: {
          ...requestData.issueSolution1,
          image: newImage,
        },
      })
    }
  }

  const onSolution2Change = (
    solution2: IssueSolutionResponse,
    newImage?: ImageRequest
  ) => {
    setSolution2(solution2)

    if (newImage) {
      setRequestData({
        ...requestData,
        issueSolution2: {
          ...requestData.issueSolution2,
          image: newImage,
        },
      })
    }
  }
  const onSolution3Change = (
    solution3: IssueSolutionResponse,
    newImage?: ImageRequest
  ) => {
    setSolution3(solution3)

    if (newImage) {
      setRequestData({
        ...requestData,
        issueSolution3: {
          ...requestData.issueSolution3,
          image: newImage,
        },
      })
    }
  }
  const onSolution4Change = (
    solution4: IssueSolutionResponse,
    newImage?: ImageRequest
  ) => {
    setSolution4(solution4)

    if (newImage) {
      setRequestData({
        ...requestData,
        issueSolution4: {
          ...requestData.issueSolution4,
          image: newImage,
        },
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
            onChange={onHeaderChange}
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
                props.setMode(AdminSectionMode.view)
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
