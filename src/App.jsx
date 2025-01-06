import { isValidElement, useEffect, useState } from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoList from './components/TodoList'
import TodoCard from './components/TodoCard'
import "./index.css"
import "./fanta.css"
import TodoInput from './components/TodoInput'

function App() {

  const [todos, setTodos] = useState([{input: "Add your first todo", complete: true}]);
  const [currentTab, setCurrentTab] = useState('All');


  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, {input: newTodo, complete: false}];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  const handleCompleteTodo = (index) => {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList);
  }

  const handleDeleteTodo = (index) => {
    let newTodoList = todos.filter((_, valIndex) => {return valIndex !== index})
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  const handleSaveData = (currTodos) => {
    localStorage.setItem('todo-app', JSON.stringify({todos: currTodos}))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')){return}
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  },[]);

  return (
      <>
        <Header todoList={todos}/>
        <Tabs todoList={todos} setCurrentTab={setCurrentTab} currentTab={currentTab}/>
        <TodoList todoList={todos} currentTab={currentTab} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo}/>
        <TodoInput handleAddTodo = {handleAddTodo}/>
     </>
  )
}

export default App
