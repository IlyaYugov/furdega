import { Dispatch, FC, SetStateAction, useState } from "react"
import { Row, Col, Form, Button, ListGroup, ButtonGroup } from "react-bootstrap"

import { ResponseData } from "."
import { AdminSectionMode } from "../../../../const/admin"
import { EmployeeEdit, NEW_EMPLOYEE_ID } from "./employee-edit"
import { employeesApi } from "../../../../api/employees-api"
import { staffSectionApi } from "../../../../api/sections/staff-section-api"
import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"
import {
  EmployeeCreateRequest,
  EmployeeResponse,
  EmployeeUpdateRequest,
} from "../../../../types/home/employee"

type EditProps = {
  data: ResponseData
  fetchData: () => Promise<void>
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const Edit: FC<EditProps> = ({ data, setMode, fetchData }) => {
  const isSectionEmpty = data.header === null

  const [header, setHeader] = useState<string>(data.header || "")
  const [isEmployeeEditOpen, setIsEmployeeEditOpen] = useState<boolean>(false)
  const [employeeEditId, setEmployeeEditId] = useState<number>(NEW_EMPLOYEE_ID)

  const deleteEmployeeById = async (id: number) => {
    await employeesApi.delete(id)
    fetchData()
  }

  const save = async () => {
    if (isSectionEmpty) {
      await staffSectionApi.create({ header })
    } else {
      await staffSectionApi.update({ header })
    }

    setMode(AdminSectionMode.view)
  }

  const onEmployeeEditSubmit = async (
    employee: EmployeeResponse,
    newImageBase64: string | null
  ) => {
    const isCreate = employeeEditId === NEW_EMPLOYEE_ID

    if (isCreate) {
      if (!newImageBase64) return

      const request: EmployeeCreateRequest = {
        firstName: employee.firstName,
        lastName: employee.lastName,
        description: employee.description,
        image: {
          id: employee.image.id,
          base64ImageString: newImageBase64,
        },
      }

      await employeesApi.create(request)
    } else {
      const request: EmployeeUpdateRequest = {
        firstName: employee.firstName,
        lastName: employee.lastName,
        description: employee.description,
        image: {
          id: employee.image.id,
          base64ImageString: newImageBase64 || null,
        },
      }

      await employeesApi.update(employeeEditId, request)
    }

    setIsEmployeeEditOpen(false)

    fetchData()
  }

  return (
    <>
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
          <h4 className="fw-bold">Сотрудники</h4>

          <ListGroup className="mb-3">
            {data.employees.map((employee) => (
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
                        variant="outline-dark"
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
            variant="outline-dark"
            onClick={() => {
              setEmployeeEditId(NEW_EMPLOYEE_ID)
              setIsEmployeeEditOpen(true)
            }}
          >
            Добавить сотрудника
          </Button>
        </Col>
      </Row>

      <EmployeeEdit
        show={isEmployeeEditOpen}
        employeeId={employeeEditId}
        submit={onEmployeeEditSubmit}
        close={() => {
          setIsEmployeeEditOpen(false)
        }}
      />
    </>
  )
}

export { Edit }
