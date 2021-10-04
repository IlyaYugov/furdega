import { Dispatch, FC, SetStateAction, useState } from "react"
import {
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  ListGroup,
  ButtonGroup,
} from "react-bootstrap"
import clone from "just-clone"

import { ResponseData } from "."
import { AdminSectionMode } from "../../../../const/admin"
import { EmployeeResponse } from "../../../../types/staff"
import { EmployeeEdit, NEW_EMPLOYEE_ID } from "./employee-edit"
import { staffApi } from "../../../../api/staff-api"
import { staffSectionApi } from "../../../../api/home/staff-section-api"

type EditProps = {
  data: ResponseData | null
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const defaultResponseData: ResponseData = {
  header: "",
  employees: [],
}

const Edit: FC<EditProps> = (props) => {
  const isCreate = !props.data

  const data = props.data || defaultResponseData

  const [header, setHeader] = useState<string>(data.header)
  const [employees, setEmployees] = useState<EmployeeResponse[]>(
    clone(data.employees)
  )
  const [isEmployeeEditOpen, setIsEmployeeEditOpen] = useState<boolean>(false)
  const [employeeEditId, setEmployeeEditId] = useState<number>(NEW_EMPLOYEE_ID)

  const deleteEmployeeById = async (id: number) => {
    await staffApi.delete(id)
  }

  const save = async () => {
    if (isCreate) {
      await staffSectionApi.create({ header })
    } else {
      await staffSectionApi.update({ header })
    }
  }

  return (
    <>
      <Row className="flex-column gy-3">
        <Col>
          <InputGroup>
            <InputGroup.Text className="w-25 text-center text-wrap">
              Текст заголовка
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
          <h4>Персонал</h4>

          <ListGroup className="mb-3">
            {employees.map((employee) => (
              <ListGroup.Item>
                <Row className="flex-nowrap">
                  <Col className="flex-fill">
                    {employee.firstName}&nbsp;{employee.lastName}
                  </Col>

                  <Col>
                    <ButtonGroup size="sm">
                      <Button
                        onClick={() => {
                          setEmployeeEditId(employee.id)
                          setIsEmployeeEditOpen(true)
                        }}
                      >
                        Редактировать
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          deleteEmployeeById(employee.id)
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
              setEmployeeEditId(NEW_EMPLOYEE_ID)
              setIsEmployeeEditOpen(true)
            }}
          >
            Добавить сотрудника
          </Button>
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

      <EmployeeEdit
        show={isEmployeeEditOpen}
        employeeId={employeeEditId}
        onCancel={() => {
          setIsEmployeeEditOpen(false)
        }}
      />
    </>
  )
}

export { Edit }
