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
import { CompanyBenefit, CompanyBenefitsSection } from "../../../../types/home"
import { BenefitModal } from "./benefit-modal"

const BenefitsSection: FC<AdminSectionProps<CompanyBenefitsSection>> = (
  props
) => {
  const [header, setHeader] = useState<string>(props.header)
  const [companyBenefits, setCompanyBenefits] = useState<CompanyBenefit[]>([
    ...props.companyBenefits,
  ])

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [benefitToEditIndex, setBenefitToEditIndex] = useState<number>(-1)

  const onModalConfirm = (companyBenefit: CompanyBenefit) => {
    if (benefitToEditIndex !== null) {
      const newExamples = [...companyBenefits]
      newExamples.splice(benefitToEditIndex, 1, companyBenefit)
      setCompanyBenefits(newExamples)
    } else {
      setCompanyBenefits([...companyBenefits, companyBenefit])
    }
    setIsModalOpen(false)
    setBenefitToEditIndex(-1)
  }

  const deleteBenefitByIndex = (indexToDelete: number) => {
    setCompanyBenefits(
      companyBenefits.filter((_, index) => index !== indexToDelete)
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
          <h4>Преимущества</h4>

          <ListGroup className="mb-3">
            {companyBenefits.map((benefit, index) => (
              <ListGroup.Item>
                <Row className="flex-nowrap">
                  <Col className="flex-fill">{benefit.title}</Col>
                  <Col>
                    <ButtonGroup size="sm">
                      <Button
                        onClick={() => {
                          setBenefitToEditIndex(index)
                          setIsModalOpen(true)
                        }}
                      >
                        Редактировать
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          deleteBenefitByIndex(index)
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
              setBenefitToEditIndex(-1)
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
              props.onChange({ header, companyBenefits })
            }}
          >
            Применить
          </Button>
        </Col>
      </Row>

      <BenefitModal
        show={isModalOpen}
        benefitToEditIndex={benefitToEditIndex}
        benefits={companyBenefits}
        onConfirm={onModalConfirm}
        onCancel={() => {
          setIsModalOpen(false)
        }}
      />
    </>
  )
}

export { BenefitsSection }
