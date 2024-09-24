import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) return;
        addTodo(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-5">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo"
                className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Add Todo
            </button>
        </form>
    );
};

export default TodoForm;
