import React, { useEffect } from 'react';
import Todo from './Todo';
import { useDispatch, useSelector } from 'react-redux';
import fetchTodos from '../redux/todos/thunk/fetchTodos';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const completedTodos = todos?.filter(todo => todo.completed);
  const inCompletedTodos = todos?.filter(todo => !todo.completed);

  //dispatch fetchTodos that will call api to get todos from server
  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch])

  const filterByStatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case "Complete":
        return todo.completed;
      case "Incomplete":
        return !todo.completed;
      default:
        return true;
    }
  }
  const filterByColor = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  }

  return (
    <div
      className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
    >
      {
        inCompletedTodos.length === 0 ? (
          <h2 className="flex items-center justify-center text-emerald-500 font-bold">
            <svg className="fill-white stroke-current w-5 h-5 text-green-500 pointer-events-none mr-1" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>

            All tasks completed
          </h2>
        ) : (
          <>
            {
              inCompletedTodos
                .filter(filterByStatus)
                .filter(filterByColor)
                .map((todo) => <Todo key={todo.id} todo={todo} />)
            }
          </>
        )
      }
      {
        completedTodos.length > 0 && (
          <>
            <h1 className="mt-5 mb-2 text-lg font-semibold">
              Completed tasks
            </h1>
            {
              completedTodos
                .filter(filterByStatus)
                .filter(filterByColor)
                .map((todo) => <Todo key={todo.id} todo={todo} completedTasks />)
            }
          </>
        )
      }
    </div>
  );
};

export default TodoList;