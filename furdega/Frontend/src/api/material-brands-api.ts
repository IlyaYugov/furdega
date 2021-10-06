import axios from "axios"
import {
  MaterialBrand,
  MaterialBrandCreateRequest,
  MaterialBrandUpdateRequest,
} from "../types/material-brand"

const BASE_URL = "/api/material-brands"

const materialBrandsApi = {
  getMaterialBrand: async (
    materialId: number,
    brandId: number
  ): Promise<MaterialBrand> => {
    const response = await axios.get<MaterialBrand>(
      `${BASE_URL}/${materialId}/brands/${brandId}`
    )
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
}

export { materialBrandsApi }
