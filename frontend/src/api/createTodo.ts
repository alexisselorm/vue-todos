import axios from "axios";
import { ElMessage } from "element-plus";
import loadTodos from "./loadTodos";
import Todo from "./types";

const createTodo = async (todo: any) => {
  console.log("Todo", todo);
  await axios.post<Todo>(`http://127.0.0.1:8000/api/todos`, {
    title: todo.title,
    completed: todo.completed,
  });
  ElMessage({
    message: "Todo created",
    type: "success",
  });
  await loadTodos();
};

export default createTodo;
