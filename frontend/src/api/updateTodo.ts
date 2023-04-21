import axios from 'axios'
import { loadTodos } from './loadTodos'
import type Todo from './types'

export const updateTodo = async (todo: Todo) => {
  console.log('Todo', todo)
  try {
    await axios.put<Todo>(`http://127.0.0.1:8000/api/todos/${todo.id}`, {
      completed: !todo.completed,
    })
  } catch (error) {
    console.log(error)
  }
}
