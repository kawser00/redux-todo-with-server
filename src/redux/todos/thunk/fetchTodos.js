import { loadedTodo } from "../actions";
import { BASE_SERVER_URL } from "./server";

const fetchTodos = async (dispatch, getState) => {
  const response = await fetch(`${BASE_SERVER_URL}/todos`);
  const todos = await response.json();

  dispatch(loadedTodo(todos))
}

export default fetchTodos;