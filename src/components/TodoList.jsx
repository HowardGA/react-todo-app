import React from 'react'
import TodoCard from './TodoCard';

const TodoList = ({todoList, currentTab, handleDeleteTodo, handleCompleteTodo}) => {

  const filteredTodos = (currentTab === 'All') ? todoList :
      (currentTab === 'Open') ? todoList.filter(todo => !todo.complete) : todoList.filter(todo => todo.complete)
  return (
    <>
      {filteredTodos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex}
            todoIndex={todoList.findIndex(val => val.input === todo.input)}
            todo = {todo} 
            handleDeleteTodo={handleDeleteTodo} 
            handleCompleteTodo={handleCompleteTodo}/>
        );
      })}
    </>
  )
}

export default TodoList