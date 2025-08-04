import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import '../App.css'
import { useState } from 'react';

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo; //todo.content todo.id yerine geçiyor objejct destructuring ile
    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request); //todo.content yerine newTodo kullanıyoruz çünkü input'tan gelen değeri kullanmak istiyoruz
        setEditTable(false); // güncelleme işlemi tamamlandığında edit modunu kapatıyoruz
    }
    const [editTable, setEditTable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const removeTodo = () => {
        onRemoveTodo(id); //todo.id yerine id kullanıyoruz çünkü destructuring ile id'yi aldık
        //onRemoveTodo(todo.id); //todo.id yerine id kullanıyoruz çünkü destructuring ile id'yi aldık
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid ligtgray', padding: '10px 0', marginTop: '6px' }}>
            <div>
                {
                    editTable ? <input style={{ width: '380px' }}
                        value={newTodo}
                        type="text"
                        onChange={(e) => setNewTodo(e.target.value)}
                        className='todo-input' /> : content

                }
            </div>
            <div>
                <CiCircleRemove className='todo-icons' onClick={removeTodo} />
                {
                    editTable ? <FaCheck className='todo-icons' onClick={updateTodo} />
                        : <FaEdit className='todo-icons' onClick={() => setEditTable(true)} />
                }



            </div>
        </div>
    )
}

export default Todo