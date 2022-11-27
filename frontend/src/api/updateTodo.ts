import axios from "axios";
import { ElMessage } from "element-plus";
import loadTodos from "./loadTodos";
import Todo from "./types";

const updateTodo = async (todo: Todo) => {
  console.log("Todo", todo);
  await axios.put<Todo>(`http://127.0.0.1:8000/api/todos/${todo.id}`, {
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
  });
  ElMessage({
    message: "Todo updated",
    type: "success",
  });
  await loadTodos();
};

export default updateTodo;
