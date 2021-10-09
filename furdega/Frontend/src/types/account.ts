export type TokenRequest = {
  login: string
  password: string
}

export type ChangePasswordRequest = {
  login: string
  password: string
  oldPassword: string
}
