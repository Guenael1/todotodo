import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({ todolist, completeTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })



    return todolist.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={(() => completeTodo(todo.id))}>
                {todo.text}
            </div>
            <div>
                <RiCloseCircleLine />
                <TiEdit />
            </div>
        </div>
    ))
}

export default Todo
