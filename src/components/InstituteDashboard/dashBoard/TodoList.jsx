import React from 'react';

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {

    const isScrollable = todos.length > 4;

    return (
        <ul className={`list-none p-0 flex flex-col gap-4 h-[360px] ${isScrollable ? 'overflow-y-auto' : 'overflow-hidden'} scrollbar-thin pr-4`}>
            {todos.map((todo, index) => (
                <li key={index} className="flex gap-2 items-center pb-4 border-b border-gray-300">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(index)}
                        className="roundedCheckbox"
                    />
                    <span className={`flex flex-col gap-1 ${todo.completed ? 'line-through' : ''} flex-1`}>
                        {todo.text}
                        <small>
                            {/* Format the date as dd/mm/yy */}
                            {todo.date.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: '2-digit' })}
                            {/* Format the time as HH:mm in IST with AM/PM */}
                            {` ${todo.date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' })}`}
                        </small>
                    </span>
                    <button onClick={() => deleteTodo(index)} className="ml-2">
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
