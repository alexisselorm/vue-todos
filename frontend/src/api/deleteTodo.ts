import axios from "axios";
import loadTodos from "./loadTodos";
import type Todo from "./types";

const deleteTodo = async (todo: Todo) => {
  await axios.delete(`http://127.0.0.1:8000/api/todos/${todo.id}`);
  await loadTodos();
};

export default deleteTodo;
