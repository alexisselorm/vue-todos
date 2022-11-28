import axios from 'axios'
import { loadTodos } from './loadTodos'
import type Todo from './types'

export const deleteTodo = async (todo: Todo) => {
  console.log(todo)
  await axios.delete(`http://127.0.0.1:8000/api/todos/${todo}`)
  await loadTodos()
}
