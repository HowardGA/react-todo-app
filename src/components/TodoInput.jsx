import React, {useState} from 'react'

function TodoInput({handleAddTodo}) {
  const [todo, setTodo] = useState('');

  const handleInput = (e) => {
    setTodo(e.target.value);
  }

  return (
    <div className='input-container'>
      <input value={todo} onChange={handleInput} placeholder='Add Task'/>
      <button onClick={() => {
        if (!todo) {return}
        handleAddTodo(todo)
        setTodo('')}}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  )
}

export default TodoInput