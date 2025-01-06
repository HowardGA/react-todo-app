import React from 'react'

const Header = ({todoList}) => {
    const todosLength = todoList.length
    const isPlural = todoList !== 1
    const taskOrTasks = isPlural ? 'tasks' : 'task'

    return (
        <header>
            <h1 className='text-gradient'>You have {todosLength} open {taskOrTasks}.</h1>
        </header>
    )
}

export default Header