import { addTodo } from "../actions";
import { BASE_SERVER_URL } from "./server";

const addTodoInServer = (todoText) => {
  return async (dispatch) => {
    const response = await fetch(`${BASE_SERVER_URL}/todos`, {
      method: 'POST',
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
    const todo = await response.json();

    dispatch(addTodo(todo.text))
  }
}

export default addTodoInServer;