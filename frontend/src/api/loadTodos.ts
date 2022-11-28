import axios from 'axios'
import type Todo from './types'

export const loadTodos = async () => {
  const response = await axios.get<Todo[]>(`http://127.0.0.1:8000/api/todos`)
  return response.data
}
