import { Dispatch, FC, SetStateAction, useState } from "react"
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap"
import clone from "just-clone"
import { v4 as uuidv4 } from "uuid"

import { AdminSectionMode } from "../../../../const/admin"
import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"
import { FormInputEvent } from "../../../../types/utils"
import { BenefitEdit } from "./benefit-edit"
import {
  CompanyBenefitResponse,
  CompanyBenefitsSectionRequest,
  CompanyBenefitsSectionResponse,
} from "../../../../types/company-benefits-section"
import { ImageRequest } from "../../../../types/image-request"

type EditProps = {
  data: CompanyBenefitsSectionResponse | null
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const getNewBenefit = (): CompanyBenefitResponse => ({
  title: "",
  image: {
    id: uuidv4(),
    imageUrl: "",
  },
  description: "",
})

const getDefaultResponseData = (): CompanyBenefitsSectionResponse => ({
  header: "",
  companyBenefit1: getNewBenefit(),
  companyBenefit2: getNewBenefit(),
  companyBenefit3: getNewBenefit(),
  companyBenefit4: getNewBenefit(),
})

const getDefaultRequestData = ({
  header,
  companyBenefit1,
  companyBenefit2,
  companyBenefit3,
  companyBenefit4,
}: CompanyBenefitsSectionResponse): CompanyBenefitsSectionRequest => ({
  header,
  companyBenefit1: {
    title: companyBenefit1.title,
    description: companyBenefit1.description,
  },
  companyBenefit2: {
    title: companyBenefit2.title,
    description: companyBenefit2.description,
  },
  companyBenefit3: {
    title: companyBenefit3.title,
    description: companyBenefit3.description,
  },
  companyBenefit4: {
    title: companyBenefit4.title,
    description: companyBenefit4.description,
  },
})

const Edit: FC<EditProps> = (props) => {
  const isCreate = !props.data

  const data = props.data || getDefaultResponseData()

  const [requestData, setRequestData] = useState<CompanyBenefitsSectionRequest>(
    getDefaultRequestData(data)
  )
  const [header, setHeader] = useState<string>(data.header)
  const [benefit1, setBenefit1] = useState<CompanyBenefitResponse>(
    clone(data.companyBenefit1)
  )
  const [benefit2, setBenefit2] = useState<CompanyBenefitResponse>(
    clone(data.companyBenefit2)
  )
  const [benefit3, setBenefit3] = useState<CompanyBenefitResponse>(
    clone(data.companyBenefit3)
  )
  const [benefit4, setBenefit4] = useState<CompanyBenefitResponse>(
    clone(data.companyBenefit3)
  )

  const save = async () => {
    console.log(requestData)
  }

  const onHeaderChange = (event: FormInputEvent) => {
    const value = (event.target as HTMLInputElement).value
    setHeader(value)
    setRequestData({ ...requestData, header: value })
  }

  const onBenefit1Change = (
    benefit1: CompanyBenefitResponse,
    newImage?: ImageRequest
  ) => {
    setBenefit1(benefit1)

    if (newImage) {
      setRequestData({
        ...requestData,
        companyBenefit1: {
          ...requestData.companyBenefit1,
          image: newImage,
        },
      })
    }
  }

  const onBenefit2Change = (
    benefit2: CompanyBenefitResponse,
    newImage?: ImageRequest
  ) => {
    setBenefit2(benefit2)

    if (newImage) {
      setRequestData({
        ...requestData,
        companyBenefit2: {
          ...requestData.companyBenefit2,
          image: newImage,
        },
      })
    }
  }
  const onBenefit3Change = (
    benefit3: CompanyBenefitResponse,
    newImage?: ImageRequest
  ) => {
    setBenefit3(benefit3)

    if (newImage) {
      setRequestData({
        ...requestData,
        companyBenefit3: {
          ...requestData.companyBenefit3,
          image: newImage,
        },
      })
    }
  }
  const onBenefit4Change = (
    benefit4: CompanyBenefitResponse,
    newImage?: ImageRequest
  ) => {
    setBenefit4(benefit4)

    if (newImage) {
      setRequestData({
        ...requestData,
        companyBenefit4: {
          ...requestData.companyBenefit4,
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
        <h5>Преимущество 1</h5>
        <BenefitEdit value={benefit1} onChange={onBenefit1Change} />
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <h5>Преимущество 2</h5>
        <BenefitEdit value={benefit2} onChange={onBenefit2Change} />
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <h5>Преимущество 3</h5>
        <BenefitEdit value={benefit3} onChange={onBenefit3Change} />
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <h5>Преимущество 4</h5>
        <BenefitEdit value={benefit4} onChange={onBenefit4Change} />
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