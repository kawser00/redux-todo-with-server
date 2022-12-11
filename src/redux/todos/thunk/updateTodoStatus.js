import { toggled } from "../actions";
import { BASE_SERVER_URL } from "./server";

const updateTodoStatus = (todoId, currentStatus) => {
  return async (dispatch) => {
    const response = await fetch(`${BASE_SERVER_URL}/todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: !currentStatus,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
    const todo = await response.json();

    dispatch(toggled(todo.id))
  }
}

export default updateTodoStatus;