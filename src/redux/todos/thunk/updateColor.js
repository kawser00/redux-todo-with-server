import { colorSelected } from "../actions";
import { BASE_SERVER_URL } from "./server";

const updateColor = (todoId, color) => {
  return async (dispatch) => {
    const response = await fetch(`${BASE_SERVER_URL}/todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        color,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
    const todo = await response.json();

    dispatch(colorSelected(todo.id, todo.color))
  }
}

export default updateColor;