import { combineReducers } from "redux";
import filterReducers from "./filters/reducer";
import todoReducers from "./todos/reducer";


const rootReducer = combineReducers({
  todos: todoReducers,
  filters: filterReducers,
})

export default rootReducer;