import axios from "axios"

import { EmployeeRequest, EmployeeResponse } from "../types/staff"

const BASE_URL = "/api/staff"

const staffApi = {
  getAll: async (): Promise<EmployeeResponse[]> => {
    const response = await axios.get<EmployeeResponse[]>(BASE_URL)
    return response.data
  },

  get: async (id: number): Promise<EmployeeResponse> => {
    const response = await axios.get<EmployeeResponse>(`${BASE_URL}/${id}`)
    return response.data
  },

  create: async (request: EmployeeRequest): Promise<void> => {
    await axios.post(BASE_URL, request)
  },

  update: async (id: number, request: EmployeeRequest): Promise<void> => {
    await axios.put(`${BASE_URL}/${id}`, request)
  },

  delete: async (id: number): Promise<void> => {
    await axios.delete(`${BASE_URL}/${id}`)
  },
}

export { staffApi }
