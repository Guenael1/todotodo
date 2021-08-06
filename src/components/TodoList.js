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

    const updateTodo = (todoid, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodoList(prev => prev.map(item => (item.id === todoid ? newValue : item)))
    }

    const completeTodo = id => {
        let updatedTodos = todolist.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodoList(updatedTodos)
    }

    const removeTodo = id => {
        const removeArr = [...todolist].filter(todo => todo.id !== id)
        setTodoList(removeArr)
    }


    return (
        <div>
            <h1>Quelles sont les taches du jour ?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo completeTodo={completeTodo} todolist={todolist} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList
