import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = (useState(''))

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                name='text'
                placeholder='Ajouter une tache'
                className='todo-input'
                onChange={handleChange}
                value={input}
                type='text'
            />
            <button className='todo-button'>Ajouter tache</button>
        </form>
    )
}

export default TodoForm
