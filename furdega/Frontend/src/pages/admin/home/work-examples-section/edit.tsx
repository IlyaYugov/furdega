import { Dispatch, FC, SetStateAction, useState } from "react"
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap"
import clone from "just-clone"
import { v4 as uuidv4 } from "uuid"

import { WorkExampleEdit } from "./work-example-edit"
import { AdminSectionMode } from "../../../../const/admin"
import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"
import { workExamplesSectionApi } from "../../../../api/home/work-examples-section-api"
import {
  WorkExampleResponse,
  WorkExamplesSectionResponse,
} from "../../../../types/home/examples"
import { ImageResponse } from "../../../../types/image"

type EditProps = {
  data: WorkExamplesSectionResponse
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const getNewImage = (): ImageResponse => ({
  id: uuidv4(),
  imageUrl: "",
})

const getDefaultWorkExample = (): WorkExampleResponse => ({
  title: "",
  workType: "",
  furnitureType: "",
  duration: "",
  description: "",
  beforeImage1: getNewImage(),
  beforeImage2: getNewImage(),
  beforeImage3: getNewImage(),
  afterImage1: getNewImage(),
  afterImage2: getNewImage(),
  afterImage3: getNewImage(),
})

export type WorkExampleNewImagesBase64 = {
  afterImage1?: string
  afterImage2?: string
  afterImage3?: string
  beforeImage1?: string
  beforeImage2?: string
  beforeImage3?: string
}

export type NewImagesBase64 = {
  example1: WorkExampleNewImagesBase64
  example2: WorkExampleNewImagesBase64
  example3: WorkExampleNewImagesBase64
}

const Edit: FC<EditProps> = ({ data, setMode }) => {
  const isDataEmpty = Object.values(data).every((val) => val === null)

  const [newImagesBase64, setNewImagesBase64] = useState<NewImagesBase64>({
    example1: {},
    example2: {},
    example3: {},
  })
  const [header, setHeader] = useState<string>(data.header || "")
  const [example1, setExample1] = useState<WorkExampleResponse>(
    clone(data.workExample1 || getDefaultWorkExample())
  )
  const [example2, setExample2] = useState<WorkExampleResponse>(
    clone(data.workExample2 || getDefaultWorkExample())
  )
  const [example3, setExample3] = useState<WorkExampleResponse>(
    clone(data.workExample3 || getDefaultWorkExample())
  )

  const save = async () => {
    if (isDataEmpty) {
      // await workExamplesSectionApi.create(requestData)
    } else {
      // await workExamplesSectionApi.update(requestData)
    }

    setMode(AdminSectionMode.view)
  }

  const onExample1Change = (
    newExample1: WorkExampleResponse,
    newImagesBase64Event?: WorkExampleNewImagesBase64
  ) => {
    setExample1(newExample1)

    if (newImagesBase64Event) {
      setNewImagesBase64({
        ...newImagesBase64,
        example1: {
          ...newImagesBase64.example1,
          ...newImagesBase64Event,
        },
      })
    }
  }

  const onExample2Change = (
    newExample2: WorkExampleResponse,
    newImagesBase64Event?: WorkExampleNewImagesBase64
  ) => {
    setExample2(newExample2)

    if (newImagesBase64Event) {
      setNewImagesBase64({
        ...newImagesBase64,
        example2: {
          ...newImagesBase64.example2,
          ...newImagesBase64Event,
        },
      })
    }
  }

  const onExample3Change = (
    newExample3: WorkExampleResponse,
    newImagesBase64Event?: WorkExampleNewImagesBase64
  ) => {
    setExample3(newExample3)

    if (newImagesBase64Event) {
      setNewImagesBase64({
        ...newImagesBase64,
        example3: {
          ...newImagesBase64.example3,
          ...newImagesBase64Event,
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
