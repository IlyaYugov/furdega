import { FC, useEffect, useState } from "react"
import { Modal, Button, Form, Row, Col } from "react-bootstrap"
import { v4 as uuidv4 } from "uuid"
import { staffApi } from "../../../../api/staff-api"

import { EmployeeRequest, EmployeeResponse } from "../../../../types/staff"
import { FormInputEvent } from "../../../../types/utils"
import { fileToBase64 } from "../../../../utils/fileToBase64"

type EmployeeEditProps = {
  show: boolean
  employeeId: number
  onCancel: () => void
}

export const NEW_EMPLOYEE_ID = -1

const getDefaultEmployeeResponse = (): EmployeeResponse => ({
  id: NEW_EMPLOYEE_ID,
  firstName: "",
  lastName: "",
  description: "",
  image: {
    id: uuidv4(),
    imageUrl: "",
  },
})

const EmployeeEdit: FC<EmployeeEditProps> = ({
  show,
  employeeId,
  onCancel,
}) => {
  const isCreate = employeeId === NEW_EMPLOYEE_ID

  const [employee, setEmployee] = useState<EmployeeResponse | null>(null)
  const [newImageBase64, setNewImageBase64] = useState<string>("")

  const fetchData = async () => {
    if (isCreate) {
      setEmployee(getDefaultEmployeeResponse())
    } else {
      const data = await staffApi.get(employeeId)
      setEmployee(data)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onImageChange = async (event: FormInputEvent) => {
    const files = (event.currentTarget as HTMLInputElement).files
    if (!files) return null

    const file = files[0]
    const fileUrl = URL.createObjectURL(file)
    const base64 = await fileToBase64(file)

    if (!employee) return

    setEmployee({
      ...employee,
      image: { ...employee.image, imageUrl: fileUrl },
    })
    setNewImageBase64(base64)
  }

  const onSubmitClick = async () => {
    if (!employee) return

    const request: EmployeeRequest = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      description: employee.description,
    }

    if (newImageBase64) {
      request.image = {
        id: employee.image.id,
        base64ImageString: newImageBase64,
      }
    }

    if (isCreate) {
      await staffApi.create(request)
    } else {
      await staffApi.update(employeeId, request)
    }
  }

  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>
          {isCreate
            ? "Добавление сотрудника"
            : "Редактирование данных сотрудника"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {employee ? (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                type="text"
                value={employee.firstName}
                onChange={(e) => {
                  setEmployee({
                    ...employee,
                    firstName: e.target.value,
                  })
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                type="text"
                value={employee.lastName}
                onChange={(e) => {
                  setEmployee({
                    ...employee,
                    lastName: e.target.value,
                  })
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Описание</Form.Label>
              <Form.Control
                type="textarea"
                value={employee.description}
                onChange={(e) => {
                  setEmployee({
                    ...employee,
                    description: e.target.value,
                  })
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Фото</Form.Label>

              <Row className="flex-column gy-2">
                <Col>
                  <img
                    src={employee.image.imageUrl}
                    alt={employee.image.imageUrl}
                    className="img-fluid w-100"
                  />
                </Col>

                <Col>
                  <Form.Control
                    type="file"
                    accept=".jpeg, .jpg, .png"
                    onChange={onImageChange}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        ) : //   loader?
        null}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Отмена
        </Button>
        <Button variant="primary" onClick={onSubmitClick}>
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export { EmployeeEdit }
