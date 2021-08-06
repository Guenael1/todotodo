import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todolist, setTodoList] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodoList = [todo, ...todolist]
        setTodoList(newTodoList)
        console.log(todo, ...todolist)
    }

    const completeTodo = todo => {

    }


    return (
        <div>
            <h1>Quelles sont les taches du jour ?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo completeTodo={completeTodo} todolist={todolist} />
        </div>
    )
}

export default TodoList
