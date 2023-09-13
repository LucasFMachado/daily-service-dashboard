export type TUser = {
  id: number
  name: string
  email: string
  admin: boolean
  active: boolean
  created_at: Date
}

export type TCreateUser = {
  name: string
  email: string
  password: string
  password_confirm: string
}

export type TUpdateUser = {
  id: number
  name: string
  email: string
}

export type TUsersListResponse = {
  list: TUser[]
  count: number
}
