import React, { useState } from 'react';
import cancelImage from '../assets/images/cancel.png';
import { useDispatch } from 'react-redux';
import updateTodoStatus from '../redux/todos/thunk/updateTodoStatus';
import updateColor from '../redux/todos/thunk/updateColor';
import deleteTodoFromServer from '../redux/todos/thunk/deleteTodo';
import updateTodo from '../redux/todos/thunk/updateTodo';

const Todo = ({ todo, completedTasks }) => {
  const dispatch = useDispatch();
  const { id, text, completed, color } = todo;
  const [showTodoEditForm, setShowTodoEditForm] = useState(false);
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    input !== '' && dispatch(updateTodo(id, input));
    setShowTodoEditForm(false)
  }

  const handleStatusChange = (todoId) => {
    dispatch(updateTodoStatus(todoId, completed))
  }

  const handleColorChange = (todoId, color) => {
    dispatch(updateColor(todoId, color))
  }

  const handleDelete = (todoId) => {
    dispatch(deleteTodoFromServer(todoId))
  }

  return (
    <div
      className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
    >
      <div
        className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${completed && 'border-green-500 focus-within:border-green-500'}`}
      >
        <input
          type="checkbox"
          className="opacity-0 absolute rounded-full"
          onChange={() => handleStatusChange(id)}
        />
        {completed && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>


      {showTodoEditForm ? (
        <div className="flex-1">
          <form
            className="flex items-center bg-gray-100 px-2 py-1 rounded-md border-2 border-green-500 focus-within:border-green-500"
            onSubmit={submitHandler}
          >
            <input
              type="text"
              defaultValue={text}
              className="w-full px-0 py-1 border-none outline-none bg-gray-100 text-gray-500"
              onChange={handleInput}
            />
            <button
              type="submit"
              className={`appearance-none`}
            >
              <svg className="fill-white stroke-current w-5 h-5 text-green-500 cursor-pointer mr-2" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </button>

            <svg onClick={() => setShowTodoEditForm(false)} className="fill-white stroke-current w-6 h-6 text-red-500 cursor-pointer mr-1" viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
          </form>
        </div>
      ) : (
        <div className={`select-none flex-1 ${completed && 'line-through'}`}>
          {text}
        </div>

      )
      }

      {!completedTasks && (
        <svg onClick={() => setShowTodoEditForm(true)} className="fill-white stroke-current w-5 h-5 text-current cursor-pointer mr-1" viewBox="0 0 24 24" strokeWidth="2" ><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
      )}

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${color === 'green' && 'bg-green-500'}`}
        onClick={() => handleColorChange(id, 'green')}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${color === 'yellow' && 'bg-yellow-500'}`}
        onClick={() => handleColorChange(id, 'yellow')}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${color === 'red' && 'bg-red-500'}`}
        onClick={() => handleColorChange(id, 'red')}
      ></div>

      {!completedTasks && (
        <img
          src={cancelImage}
          className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
          alt="Cancel"
          onClick={() => handleDelete(id)}
        />
      )}
    </div>
  );
};

export default Todo;