import { EmployeeResponse } from "./employee-response"
import { HomeSectionBase } from "../home-section-base"

export type StaffSectionResponse = HomeSectionBase & {
  employees: EmployeeResponse[]
}
