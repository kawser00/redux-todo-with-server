import { todoUpdated } from "../actions";
import { BASE_SERVER_URL } from "./server";

const updateTodo = (todoId, todoText) => {
  return async (dispatch) => {
    const response = await fetch(`${BASE_SERVER_URL}/todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        text: todoText,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
    const todo = await response.json();

    dispatch(todoUpdated(todo.id, todo.text))
  }
}

export default updateTodo;