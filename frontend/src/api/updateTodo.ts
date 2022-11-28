import axios from 'axios'
import { loadTodos } from './loadTodos'
import type Todo from './types'

export const updateTodo = async (todo: Todo) => {
  console.log('Todo', todo)
  const response = await axios.put<Todo>(
    `http://127.0.0.1:8000/api/todos/${todo}`,
    {
      completed: !todo.completed,
    }
  )
  console.log(response)
}
