export interface Order {
  coupon: string
  recipient_name: string
  phone_number: string
  area: string
  full_address: string
  secret: boolean
  delivery_time: string
  delivery_date: string
  payment_method: string
  points_used: number
  message: Message
}

export interface Message {
  to: string
  from: string
  message: string
  url: string
}
