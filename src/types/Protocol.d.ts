export type TProtocol = {
  id: number
  situation_id: number
  requestor: string
  phone: string
  postalCode: string
  street: string
  number: string
  neighborhood: string
  city: string
  description: string
  is_available: boolean
  created_at: Date
}

export type TCreateProtocol = {
  situation_id: number
  requestor: string
  phone: string
  postalCode: string
  street: string
  number: string
  neighborhood: string
  city: string
  description: string
  is_available: boolean
}

export type TUpdateProtocol = TCreateProtocol & {
  id: number
}

export type TProtocolListResponse = {
  list: TProtocol[]
  count: number
}
