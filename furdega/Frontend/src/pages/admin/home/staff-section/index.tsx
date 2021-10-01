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
import {
  StaffSection as StaffSectionType,
  Employee,
} from "../../../../types/home"
import { EmployeeModal } from "./employee-modal"

const StaffSection: FC<AdminSectionProps<StaffSectionType>> = (props) => {
  const [header, setHeader] = useState<string>(props.header)
  const [employees, setEmployees] = useState<Employee[]>([...props.employees])

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [employeeToEditIndex, setEmployeeToEditIndex] = useState<number>(-1)

  const onModalConfirm = (employee: Employee) => {
    if (employeeToEditIndex !== null) {
      const newExamples = [...employees]
      newExamples.splice(employeeToEditIndex, 1, employee)
      setEmployees(newExamples)
    } else {
      setEmployees([...employees, employee])
    }
    setIsModalOpen(false)
    setEmployeeToEditIndex(-1)
  }

  const deleteBenefitByIndex = (indexToDelete: number) => {
    setEmployees(employees.filter((_, index) => index !== indexToDelete))
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
          <h4>Персонал</h4>

          <ListGroup className="mb-3">
            {employees.map((benefit, index) => (
              <ListGroup.Item>
                <Row className="flex-nowrap">
                  <Col className="flex-fill">{benefit.title}</Col>
                  <Col>
                    <ButtonGroup size="sm">
                      <Button
                        onClick={() => {
                          setEmployeeToEditIndex(index)
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
              setEmployeeToEditIndex(-1)
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
              props.onChange({ header, employees })
            }}
          >
            Применить
          </Button>
        </Col>
      </Row>

      <EmployeeModal
        show={isModalOpen}
        employeeToEditIndex={employeeToEditIndex}
        employees={employees}
        onConfirm={onModalConfirm}
        onCancel={() => {
          setIsModalOpen(false)
        }}
      />
    </>
  )
}

export { StaffSection }
