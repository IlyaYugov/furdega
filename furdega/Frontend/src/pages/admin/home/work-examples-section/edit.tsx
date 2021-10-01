import { Dispatch, FC, SetStateAction, useState } from "react"
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap"
import clone from "just-clone"
import { v4 as uuidv4 } from "uuid"

import {
  WorkExampleResponse,
  WorkExamplesSectionRequest,
  WorkExamplesSectionResponse,
} from "../../../../types/work-examples-section"
import { WorkExampleEdit } from "./work-example-edit"
import { SectionMode } from "../../../../const/admin"
import { HomeSectionBase } from "../../../../types/home/home-section-base"
import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"
import { workExamplesSectionApi } from "../../../../api/work-examples-section-api"
import { FormInputEvent } from "../../../../types/utils"
import { ImageRequest } from "../../../../types/image-request"

type EditProps = {
  data: WorkExamplesSectionResponse
  setMode: Dispatch<SetStateAction<SectionMode>>
}

const getNewWorkExample = (): WorkExampleResponse => ({
  title: "",
  workType: "",
  furnitureType: "",
  duration: "",
  description: "",
  beforeImage1: {
    id: uuidv4(),
    imageUrl: "",
  },
  beforeImage2: {
    id: uuidv4(),
    imageUrl: "",
  },
  beforeImage3: {
    id: uuidv4(),
    imageUrl: "",
  },
  afterImage1: {
    id: uuidv4(),
    imageUrl: "",
  },
  afterImage2: {
    id: uuidv4(),
    imageUrl: "",
  },
  afterImage3: {
    id: uuidv4(),
    imageUrl: "",
  },
})

type ResponseData = HomeSectionBase & {
  workExample1: WorkExampleResponse
  workExample2: WorkExampleResponse
  workExample3: WorkExampleResponse
}

export type ImagesChangeEvent = {
  afterImage1?: ImageRequest
  afterImage2?: ImageRequest
  afterImage3?: ImageRequest
  beforeImage1?: ImageRequest
  beforeImage2?: ImageRequest
  beforeImage3?: ImageRequest
}

const getDefaultResponseData = (): ResponseData => ({
  header: "",
  workExample1: getNewWorkExample(),
  workExample2: getNewWorkExample(),
  workExample3: getNewWorkExample(),
})

const getDefaultRequestData = ({
  header,
  workExample1,
  workExample2,
  workExample3,
}: ResponseData): WorkExamplesSectionRequest => ({
  header,
  workExample1: {
    title: workExample1.title,
    furnitureType: workExample1.furnitureType,
    duration: workExample1.duration,
    workType: workExample1.workType,
    description: workExample1.description,
  },
  workExample2: {
    title: workExample2.title,
    furnitureType: workExample2.furnitureType,
    duration: workExample2.duration,
    workType: workExample2.workType,
    description: workExample2.description,
  },
  workExample3: {
    title: workExample3.title,
    furnitureType: workExample3.furnitureType,
    duration: workExample3.duration,
    workType: workExample3.workType,
    description: workExample3.description,
  },
})

const Edit: FC<EditProps> = (props) => {
  const data = props.data || getDefaultResponseData()

  const [requestData, setRequestData] = useState<WorkExamplesSectionRequest>(
    getDefaultRequestData(data)
  )
  const [header, setHeader] = useState<string>(data.header)
  const [example1, setExample1] = useState<WorkExampleResponse>(
    clone(data.workExample1)
  )
  const [example2, setExample2] = useState<WorkExampleResponse>(
    clone(data.workExample2)
  )
  const [example3, setExample3] = useState<WorkExampleResponse>(
    clone(data.workExample3)
  )

  const save = async () => {
    console.log(requestData)
    await workExamplesSectionApi.update(requestData)
  }

  const onHeaderChange = (event: FormInputEvent) => {
    const value = (event.target as HTMLInputElement).value
    setHeader(value)
    setRequestData({ ...requestData, header: value })
  }

  const onExample1Change = (
    newExample1: WorkExampleResponse,
    imagesChangeEvent?: ImagesChangeEvent
  ) => {
    setExample1(newExample1)

    if (imagesChangeEvent) {
      setRequestData({
        ...requestData,
        workExample1: {
          ...requestData.workExample1,
          ...imagesChangeEvent,
        },
      })
    }
  }

  const onExample2Change = (
    newExample2: WorkExampleResponse,
    imagesChangeEvent?: ImagesChangeEvent
  ) => {
    setExample2(newExample2)

    if (imagesChangeEvent) {
      setRequestData({
        ...requestData,
        workExample2: {
          ...requestData.workExample2,
          ...imagesChangeEvent,
        },
      })
    }
  }

  const onExample3Change = (
    newExample3: WorkExampleResponse,
    imagesChangeEvent?: ImagesChangeEvent
  ) => {
    setExample3(newExample3)

    if (imagesChangeEvent) {
      setRequestData({
        ...requestData,
        workExample3: {
          ...requestData.workExample3,
          ...imagesChangeEvent,
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
        <h5>Работа 1</h5>
        <WorkExampleEdit value={example1} onChange={onExample1Change} />
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <h5>Работа 2</h5>
        <WorkExampleEdit value={example2} onChange={onExample2Change} />
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <h5>Работа 3</h5>
        <WorkExampleEdit value={example3} onChange={onExample3Change} />
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
                props.setMode(SectionMode.view)
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
