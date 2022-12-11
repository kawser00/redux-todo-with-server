import initialState from "./initialState";
import { STATUS_CHANGED, COLOR_CHANGED } from "./actionTypes"

const filterReducers = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHANGED:
      return {
        ...state,
        status: action.payload,
      }
    case COLOR_CHANGED:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case 'added':
          return {
            ...state,
            colors: [
              ...state.colors,
              color
            ]
          }
        case 'removed':
          return {
            ...state,
            colors: state.colors.filter(existingColor => existingColor !== color)
          }
        default:
          return state;
      }
    default:
      return state;
  }
}

export default filterReducers;
