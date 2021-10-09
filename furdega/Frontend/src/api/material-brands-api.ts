import axios from "./axios"
import {
  MaterialBrand,
  MaterialBrandCreateRequest,
  MaterialBrandUpdateRequest,
} from "../types/material-brand"

const BASE_URL = "/api/material-brands"

const materialBrandsApi = {
  getMaterialBrand: async (brandId: number): Promise<MaterialBrand> => {
    const response = await axios.get<MaterialBrand>(`${BASE_URL}/${brandId}`)
    return response.data
  },

  create: async (request: MaterialBrandCreateRequest): Promise<void> => {
    await axios.post(BASE_URL, request)
  },

  update: async (
    brandId: number,
    request: MaterialBrandUpdateRequest
  ): Promise<void> => {
    await axios.put(`${BASE_URL}/${brandId}`, request)
  },

  delete: async (brandId: number): Promise<void> => {
    await axios.delete(`${BASE_URL}/${brandId}`)
  },
}

export { materialBrandsApi }
