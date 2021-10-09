import axios from "./axios"

import { ChangePasswordRequest, TokenRequest } from "../types/account"

const BASE_URL = "/api/account"

const accountApi = {
  token: async (request: TokenRequest): Promise<string | null> => {
    try {
      const response = await axios.post<string>(`${BASE_URL}/token`, request)
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  },

  changePassword: async (request: ChangePasswordRequest): Promise<string> => {
    const response = await axios.post<string>(
      `${BASE_URL}/changepassword`,
      request
    )
    return response.data
  },
}

export { accountApi }
