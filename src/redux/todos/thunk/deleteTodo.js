import { deleteTodo } from "../actions";
import { BASE_SERVER_URL } from "./server";

const deleteTodoFromServer = (todoId) => {
  return async (dispatch) => {
    await fetch(`${BASE_SERVER_URL}/todos/${todoId}`, {
      method: 'DELETE',
    });
    dispatch(deleteTodo(todoId))
  }
}

export default deleteTodoFromServer;