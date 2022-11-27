import axios from "axios";
import { ElMessage } from "element-plus";
import loadTodos from "./loadTodos";
import Todo from "./types";

const deleteTodo = async (todo: Todo) => {
  await axios.delete(`http://127.0.0.1:8000/api/todos/${todo.id}`);
  ElMessage({
    message: "Todo deleted",
    type: "success",
  });
  await loadTodos();
};

export default deleteTodo;
