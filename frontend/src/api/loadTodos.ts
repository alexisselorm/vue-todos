import axios from "axios";
import Todo from "./types";

const loadTodos = async () => {
  const response = await axios.get<Todo[]>(`http://127.0.0.1:8000/api/todos`);
  return response.data;
};

export default loadTodos;
