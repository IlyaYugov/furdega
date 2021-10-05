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
  WorkExamplesSectionCreateRequest,
  WorkExamplesSectionResponse,
  WorkExamplesSectionUpdateRequest,
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
    const {
      afterImage1: example1AfterImage1,
      afterImage2: example1AfterImage2,
      afterImage3: example1AfterImage3,
      beforeImage1: example1BeforeImage1,
      beforeImage2: example1BeforeImage2,
      beforeImage3: example1BeforeImage3,
    } = newImagesBase64.example1

    const {
      afterImage1: example2AfterImage1,
      afterImage2: example2AfterImage2,
      afterImage3: example2AfterImage3,
      beforeImage1: example2BeforeImage1,
      beforeImage2: example2BeforeImage2,
      beforeImage3: example2BeforeImage3,
    } = newImagesBase64.example2

    const {
      afterImage1: example3AfterImage1,
      afterImage2: example3AfterImage2,
      afterImage3: example3AfterImage3,
      beforeImage1: example3BeforeImage1,
      beforeImage2: example3BeforeImage2,
      beforeImage3: example3BeforeImage3,
    } = newImagesBase64.example3

    if (isDataEmpty) {
      if (
        !(
          example1AfterImage1 &&
          example1AfterImage2 &&
          example1AfterImage3 &&
          example1BeforeImage1 &&
          example1BeforeImage2 &&
          example1BeforeImage3
        ) ||
        !(
          example2AfterImage1 &&
          example2AfterImage2 &&
          example2AfterImage3 &&
          example2BeforeImage1 &&
          example2BeforeImage2 &&
          example2BeforeImage3
        ) ||
        !(
          example3AfterImage1 &&
          example3AfterImage2 &&
          example3AfterImage3 &&
          example3BeforeImage1 &&
          example3BeforeImage2 &&
          example3BeforeImage3
        )
      ) {
        return
      }

      const request: WorkExamplesSectionCreateRequest = {
        header,
        workExample1: {
          ...example1,
          beforeImage1: {
            id: example1.beforeImage1.id,
            base64ImageString: example1BeforeImage1,
          },
          beforeImage2: {
            id: example1.beforeImage2.id,
            base64ImageString: example1BeforeImage2,
          },
          beforeImage3: {
            id: example1.beforeImage3.id,
            base64ImageString: example1BeforeImage3,
          },
          afterImage1: {
            id: example1.afterImage1.id,
            base64ImageString: example1AfterImage1,
          },
          afterImage2: {
            id: example1.afterImage2.id,
            base64ImageString: example1AfterImage2,
          },
          afterImage3: {
            id: example1.afterImage3.id,
            base64ImageString: example1AfterImage3,
          },
        },
        workExample2: {
          ...example2,
          beforeImage1: {
            id: example2.beforeImage1.id,
            base64ImageString: example2BeforeImage1,
          },
          beforeImage2: {
            id: example2.beforeImage2.id,
            base64ImageString: example2BeforeImage2,
          },
          beforeImage3: {
            id: example2.beforeImage3.id,
            base64ImageString: example2BeforeImage3,
          },
          afterImage1: {
            id: example2.afterImage1.id,
            base64ImageString: example2AfterImage1,
          },
          afterImage2: {
            id: example2.afterImage2.id,
            base64ImageString: example2AfterImage2,
          },
          afterImage3: {
            id: example2.afterImage3.id,
            base64ImageString: example2AfterImage3,
          },
        },
        workExample3: {
          ...example3,
          beforeImage1: {
            id: example3.beforeImage1.id,
            base64ImageString: example3BeforeImage1,
          },
          beforeImage2: {
            id: example3.beforeImage2.id,
            base64ImageString: example3BeforeImage2,
          },
          beforeImage3: {
            id: example3.beforeImage3.id,
            base64ImageString: example3BeforeImage3,
          },
          afterImage1: {
            id: example3.afterImage1.id,
            base64ImageString: example3AfterImage1,
          },
          afterImage2: {
            id: example3.afterImage2.id,
            base64ImageString: example3AfterImage2,
          },
          afterImage3: {
            id: example3.afterImage3.id,
            base64ImageString: example3AfterImage3,
          },
        },
      }

      await workExamplesSectionApi.create(request)
    } else {
      const request: WorkExamplesSectionUpdateRequest = {
        header,
        workExample1: {
          ...example1,
          beforeImage1: {
            id: example1.beforeImage1.id,
            base64ImageString: example1BeforeImage1 || null,
          },
          beforeImage2: {
            id: example1.beforeImage2.id,
            base64ImageString: example1BeforeImage2 || null,
          },
          beforeImage3: {
            id: example1.beforeImage3.id,
            base64ImageString: example1BeforeImage3 || null,
          },
          afterImage1: {
            id: example1.afterImage1.id,
            base64ImageString: example1AfterImage1 || null,
          },
          afterImage2: {
            id: example1.afterImage2.id,
            base64ImageString: example1AfterImage2 || null,
          },
          afterImage3: {
            id: example1.afterImage3.id,
            base64ImageString: example1AfterImage3 || null,
          },
        },
        workExample2: {
          ...example2,
          beforeImage1: {
            id: example2.beforeImage1.id,
            base64ImageString: example2BeforeImage1 || null,
          },
          beforeImage2: {
            id: example2.beforeImage2.id,
            base64ImageString: example2BeforeImage2 || null,
          },
          beforeImage3: {
            id: example2.beforeImage3.id,
            base64ImageString: example2BeforeImage3 || null,
          },
          afterImage1: {
            id: example2.afterImage1.id,
            base64ImageString: example2AfterImage1 || null,
          },
          afterImage2: {
            id: example2.afterImage2.id,
            base64ImageString: example2AfterImage2 || null,
          },
          afterImage3: {
            id: example2.afterImage3.id,
            base64ImageString: example2AfterImage3 || null,
          },
        },
        workExample3: {
          ...example3,
          beforeImage1: {
            id: example3.beforeImage1.id,
            base64ImageString: example3BeforeImage1 || null,
          },
          beforeImage2: {
            id: example3.beforeImage2.id,
            base64ImageString: example3BeforeImage2 || null,
          },
          beforeImage3: {
            id: example3.beforeImage3.id,
            base64ImageString: example3BeforeImage3 || null,
          },
          afterImage1: {
            id: example3.afterImage1.id,
            base64ImageString: example3AfterImage1 || null,
          },
          afterImage2: {
            id: example3.afterImage2.id,
            base64ImageString: example3AfterImage2 || null,
          },
          afterImage3: {
            id: example3.afterImage3.id,
            base64ImageString: example3AfterImage3 || null,
          },
        },
      }

      await workExamplesSectionApi.update(request)
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
      <Col className="d-flex justify-content-end">
        <Row>
          <Col>
            <Button
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

      <Col>
        <h4 className="fw-bold">Заголовок секции</h4>
        <Form.Control
          as="input"
          value={header}
          onChange={(event) => {
            setHeader(event.target.value)
          }}
        />
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <h4 className="fw-bold">Пример 1</h4>
        <WorkExampleEdit value={example1} onChange={onExample1Change} />
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <h4 className="fw-bold">Пример 2</h4>
        <WorkExampleEdit value={example2} onChange={onExample2Change} />
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <h4 className="fw-bold">Пример 3</h4>
        <WorkExampleEdit value={example3} onChange={onExample3Change} />
      </Col>
    </Row>
  )
}

export { Edit }
