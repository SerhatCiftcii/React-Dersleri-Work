import React, { useState } from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice';
import type { TodoType } from '../types/Types';


function TodoCreate() {

    const dispatch = useDispatch();
    const [newTodo, SetnewTodo] = useState<string>('')
    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("todo giriniz")
            return
        }

        const payload: TodoType = {
            id: Math.floor(Math.random() * 999999999),
            content: newTodo
        }
        dispatch(createTodo(payload))
        SetnewTodo('');
    }
    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    SetnewTodo(e.target.value)
                } className='todo-input' placeholder='Todo giriniz' type="text" />
            <button onClick={handleCreateTodo} className='todo-button'>Oluştur</button>
        </div>
    )
}

export default TodoCreate