import { Dispatch, FC, SetStateAction, useState } from "react"
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap"
import clone from "just-clone"
import { v4 as uuidv4 } from "uuid"

import { AdminSectionMode } from "../../../../const/admin"
import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"
import { BenefitEdit } from "./benefit-edit"
import {
  CompanyBenefitResponse,
  CompanyBenefitsSectionResponse,
  CompanyBenefitsSectionCreateRequest,
  CompanyBenefitsSectionUpdateRequest,
} from "../../../../types/home/benefits"
import { companyBenefitsApi } from "../../../../api/home/company-benefits-api"

type EditProps = {
  data: CompanyBenefitsSectionResponse
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const getDefaultBenefit = (): CompanyBenefitResponse => ({
  title: "",
  image: {
    id: uuidv4(),
    imageUrl: "",
  },
  description: "",
})

type NewImagesBase64 = {
  benefit1?: string
  benefit2?: string
  benefit3?: string
  benefit4?: string
}

const Edit: FC<EditProps> = ({ data, setMode }) => {
  const isDataEmpty = Object.values(data).every((val) => val === null)

  const [newImagesBase64, setNewImagesBase64] = useState<NewImagesBase64>({})
  const [header, setHeader] = useState<string>(data.header || "")
  const [benefit1, setBenefit1] = useState<CompanyBenefitResponse>(
    clone(data.companyBenefit1 || getDefaultBenefit())
  )
  const [benefit2, setBenefit2] = useState<CompanyBenefitResponse>(
    clone(data.companyBenefit2 || getDefaultBenefit())
  )
  const [benefit3, setBenefit3] = useState<CompanyBenefitResponse>(
    clone(data.companyBenefit3 || getDefaultBenefit())
  )
  const [benefit4, setBenefit4] = useState<CompanyBenefitResponse>(
    clone(data.companyBenefit3 || getDefaultBenefit())
  )

  const save = async () => {
    const request = {
      header,
      companyBenefit1: {
        ...benefit1,
        image: {
          id: benefit1.image.id,
          base64ImageString: newImagesBase64.benefit1 || null,
        },
      },
      companyBenefit2: {
        ...benefit2,
        image: {
          id: benefit2.image.id,
          base64ImageString: newImagesBase64.benefit2 || null,
        },
      },
      companyBenefit3: {
        ...benefit3,
        image: {
          id: benefit3.image.id,
          base64ImageString: newImagesBase64.benefit3 || null,
        },
      },
      companyBenefit4: {
        ...benefit4,
        image: {
          id: benefit4.image.id,
          base64ImageString: newImagesBase64.benefit4 || null,
        },
      },
    }

    if (isDataEmpty) {
      if (
        !(
          request.companyBenefit1.image.base64ImageString &&
          request.companyBenefit2.image.base64ImageString &&
          request.companyBenefit3.image.base64ImageString &&
          request.companyBenefit4.image.base64ImageString
        )
      ) {
        // TODO предупреждение
        return
      }

      await companyBenefitsApi.create(
        request as CompanyBenefitsSectionCreateRequest
      )
    } else {
      await companyBenefitsApi.update(
        request as CompanyBenefitsSectionUpdateRequest
      )
    }

    setMode(AdminSectionMode.view)
  }

  const onBenefit1Change = (
    benefit1: CompanyBenefitResponse,
    newImageBase64?: string
  ) => {
    setBenefit1(benefit1)

    if (newImageBase64) {
      setNewImagesBase64({
        ...newImagesBase64,
        benefit1: newImageBase64,
      })
    }
  }

  const onBenefit2Change = (
    benefit2: CompanyBenefitResponse,
    newImageBase64?: string
  ) => {
    setBenefit2(benefit2)

    if (newImageBase64) {
      setNewImagesBase64({
        ...newImagesBase64,
        benefit2: newImageBase64,
      })
    }
  }

  const onBenefit3Change = (
    benefit3: CompanyBenefitResponse,
    newImageBase64?: string
  ) => {
    setBenefit3(benefit3)

    if (newImageBase64) {
      setNewImagesBase64({
        ...newImagesBase64,
        benefit3: newImageBase64,
      })
    }
  }

  const onBenefit4Change = (
    benefit4: CompanyBenefitResponse,
    newImageBase64?: string
  ) => {
    setBenefit4(benefit4)

    if (newImageBase64) {
      setNewImagesBase64({
        ...newImagesBase64,
        benefit4: newImageBase64,
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
