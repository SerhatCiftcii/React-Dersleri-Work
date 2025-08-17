import React, { useState } from 'react'
import { IoRemoveCircleOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import '../App.css'
import type { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}


function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps;

    const dispatch = useDispatch()

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id))
    }
    const [editTable, setEditTable] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(content)
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px', border: '1px solid lightgrey', padding: '12px', borderRadius: '5px' }}>



            {editTable ? <input type="text" value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> : <div> {content} </div>}

            <div className='icons' >
                <IoRemoveCircleOutline onClick={handleRemoveTodo} style={{ marginRight: '5px' }} />

                {editTable ? <FaCheck /> : <FaEdit onClick={() =>
                    setEditTable(true)
                } />}


            </div>
        </div>
    )
}

export default Todo