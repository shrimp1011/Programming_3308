import { useState } from 'react'
import Button from './Button.jsx'
import { useState } from 'react';
export default function TodoAdder() {
    const [inputTodo, setInputTodo] =useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!inputTodo) return;
        addTodo(inputTodo.trim());
        setInputTodo('');
    }
    return (
        <form className="todo__form" onSubmit={handleSubmit }>
            <input
                type="text"
                placeholder="할 일을 입력하세요."
                className="todo__input"
                value={inputTodo}
                onChange={(event) => setInputTodo(event.target.value)}
            />
            <Button type="submit" className="todo__button todo__button--add">Add</Button>
        </form>
    )
}