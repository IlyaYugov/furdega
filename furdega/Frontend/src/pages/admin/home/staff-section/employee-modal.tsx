import { FC, useEffect, useState } from "react"
// import { Modal, Button, Form } from "react-bootstrap"

// import { Employee } from "../../../../types/staff-section"

// type EmployeeModalProps = {
//   show: boolean
//   employeeToEditIndex: number
//   employees: Employee[]
//   onCancel: () => void
//   onConfirm: (employee: Employee) => void
// }

// const employeeDefault: Employee = {
//   title: "",
//   description: "",
//   imageUrl: "",
// }

// const EmployeeModal: FC<EmployeeModalProps> = ({
//   show,
//   onConfirm,
//   onCancel,
//   employees,
//   employeeToEditIndex,
// }) => {
//   const isEdit = employeeToEditIndex !== -1

//   const defaultEmployee = isEdit
//     ? employees[employeeToEditIndex]
//     : employeeDefault

//   const [employee, setEmployee] = useState<Employee>({
//     ...defaultEmployee,
//   })

//   const onSubmit = () => {
//     onConfirm(employee)
//   }

//   useEffect(() => {
//     setEmployee({ ...defaultEmployee })
//   }, [defaultEmployee, show])

//   return (
//     <Modal show={show} onHide={onCancel}>
//       <Modal.Header closeButton>
//         <Modal.Title>{isEdit ? "Редактирование" : "Создание"}</Modal.Title>
//       </Modal.Header>

//       <Modal.Body>
//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Label>Имя</Form.Label>
//             <Form.Control
//               type="text"
//               value={employee.title}
//               onChange={(e) => {
//                 setEmployee({
//                   ...employee,
//                   title: e.target.value,
//                 })
//               }}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Описание</Form.Label>
//             <Form.Control
//               type="textarea"
//               value={employee.description}
//               onChange={(e) => {
//                 setEmployee({
//                   ...employee,
//                   description: e.target.value,
//                 })
//               }}
//             />
//           </Form.Group>
//         </Form>
//       </Modal.Body>

//       <Modal.Footer>
//         <Button variant="secondary" onClick={onCancel}>
//           Отмена
//         </Button>
//         <Button variant="primary" onClick={onSubmit}>
//           {isEdit ? "Редактировать" : "Создать"}
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   )
// }

// export { EmployeeModal }
