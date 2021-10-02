import { FC, useEffect, useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"

import { CompanyBenefitResponse } from "../../../../types/company-benefits-section"

type BenefitModalProps = {
  show: boolean
  benefitToEditIndex: number
  benefits: CompanyBenefitResponse[]
  onCancel: () => void
  onConfirm: (benefit: CompanyBenefitResponse) => void
}

const benefitDefault: CompanyBenefitResponse = {
  title: "",
  description: "",
  imageUrl: "",
}

const BenefitModal: FC<BenefitModalProps> = ({
  show,
  onConfirm,
  onCancel,
  benefits,
  benefitToEditIndex,
}) => {
  const isEdit = benefitToEditIndex !== -1

  const defaultBenefit = isEdit ? benefits[benefitToEditIndex] : benefitDefault

  const [benefit, setBenefit] = useState<CompanyBenefitResponse>({
    ...defaultBenefit,
  })

  const onSubmit = () => {
    onConfirm(benefit)
  }

  useEffect(() => {
    setBenefit({ ...defaultBenefit })
  }, [defaultBenefit, show])

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
              value={benefit.title}
              onChange={(e) => {
                setBenefit({
                  ...benefit,
                  title: e.target.value,
                })
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Описание</Form.Label>
            <Form.Control
              type="textarea"
              value={benefit.description}
              onChange={(e) => {
                setBenefit({
                  ...benefit,
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

export { BenefitModal }
