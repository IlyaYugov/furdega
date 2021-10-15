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

  isAuthorize: async (): Promise<boolean> => {
    try {
      const accessToken = localStorage.getItem("accessToken")

      await axios.get(`${BASE_URL}/isAuthorize`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })

      return true
    } catch (error) {
      console.error(error)
      return false
    }
  },
}

export { accountApi }
