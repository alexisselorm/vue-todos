import axios from "axios";
import loadTodos from "./loadTodos";
import type Todo from "./types";

const createTodo = async (todo: Todo) => {
  console.log("Todo", todo);
  await axios.post<Todo>(`http://127.0.0.1:8000/api/todos`, {
    title: todo.title,
    completed: todo.completed,
  });
  await loadTodos();
};

export default createTodo;
