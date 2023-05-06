export interface IUser {
  readonly id: number
  name: string
  email?: string
  created_at: string
  updated_at: string
  role: string
  role_name: string
  surname?: string
  rating: number | null
  patronymic?: string
  city?: string
  address?: string
  phone?: string
  whatsapp?: string
  image: string | null
  is_active: boolean
}

export interface ISalary {
  expected_salary: number
  actual_salary: number
}

export interface IRank {
  rating: null | number
  percent: null | number
}

