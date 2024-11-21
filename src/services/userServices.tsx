import axios from "axios"

export interface User {
  id: number
  username: string
  email: string
  password: string
  role: string
  createdAt: string
  updatedAt: string
}

export const registerUser = async (user: User): Promise<User> => {
  const response = await axios.post(
    "{{url_api}}/{{version}}/member/login",
    user
  )
  return response.data
}
