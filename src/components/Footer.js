import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { colorChanged, statusChanged } from '../redux/filters/actions';

const numberOfTodos = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return 'No task';
    case 1:
      return '1 task'
    default:
      return `${no_of_todos} tasks`;
  }
}

const Footer = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const todosRemaining = todos?.filter(todo => !todo.completed).length;
  const { status, colors } = filters;

  const handleStatusChange = (status) => {
    dispatch(statusChanged(status))
  }

  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, 'removed'))
    }else {
      dispatch(colorChanged(color, 'added'))
    }
  }

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(todosRemaining)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li onClick={() => handleStatusChange('All')} className={`cursor-pointer ${status === 'All' && 'font-bold'}`}>All</li>
        <li>|</li>
        <li onClick={() => handleStatusChange('Incomplete')} className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}`}>Incomplete</li>
        <li>|</li>
        <li onClick={() => handleStatusChange('Complete')} className={`cursor-pointer ${status === 'Complete' && 'font-bold'}`}>Complete</li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`}
          onClick={()=>handleColorChange('green')}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`}
          onClick={()=>handleColorChange('yellow')}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}
          onClick={()=>handleColorChange('red')}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;