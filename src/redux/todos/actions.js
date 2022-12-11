import { ADD_TODO, TOGGLED, DELETE_TODO, ALL_COMPLETED, CLEAR_COMPLETED, COLOR_SELECTED, LOADED_TODO, UPDATE_TODO } from "./actionTypes"

export const loadedTodo = (todos) => {
  return {
    type: LOADED_TODO,
    payload: todos,
  }
}

export const addTodo = (todoText) => {
  return {
    type: ADD_TODO,
    payload: todoText
  }
}

export const todoUpdated = (id, todoText) => {
  return {
    type: UPDATE_TODO,
    payload: { id, todoText }
  }
}

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId
  }
}

export const colorSelected = (todoId, color) => {
  return {
    type: COLOR_SELECTED,
    payload: { todoId, color }
  }
}

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId
  }
}

export const allCompleted = () => {
  return {
    type: ALL_COMPLETED
  }
}

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED
  }
}