import axios from "axios"
import {
  EmployeeCreateRequest,
  EmployeeResponse,
  EmployeeUpdateRequest,
} from "../types/home/employee"

const BASE_URL = "/api/employees"

const employeesApi = {
  getAll: async (): Promise<EmployeeResponse[]> => {
    const response = await axios.get<EmployeeResponse[]>(BASE_URL)
    return response.data
  },

  get: async (id: number): Promise<EmployeeResponse> => {
    const response = await axios.get<EmployeeResponse>(`${BASE_URL}/${id}`)
    return response.data
  },

  create: async (request: EmployeeCreateRequest): Promise<void> => {
    await axios.post(BASE_URL, request)
  },

  update: async (id: number, request: EmployeeUpdateRequest): Promise<void> => {
    await axios.put(`${BASE_URL}/${id}`, request)
  },

  delete: async (id: number): Promise<void> => {
    await axios.delete(`${BASE_URL}/${id}`)
  },
}

export { employeesApi }
