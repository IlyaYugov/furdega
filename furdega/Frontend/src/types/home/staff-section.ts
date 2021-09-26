import { Employee } from "./employee"
import { HomeSectionBase } from "./home-section-base"

export type StaffSection = HomeSectionBase & {
  employees: Employee[]
}
