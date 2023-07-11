import { useState } from 'react'
import "./Style.css"
import AddTodo from './component/AddTodo'


function App() {


  const [todos, setTodos] = useState([
    "Go to the library",
    "Work hard next week",
    "Don't play computer games"
  ])
  const [enteredTodos, setEnteredTodos] = useState("")

  function submitHandler(e) {
    e.preventDefault();
    if (enteredTodos === "") {
      alert("Lütfen bir değer giriniz")
      
    }


    else

      setTodos((item) => [...item, enteredTodos])
    setEnteredTodos("")
    
  }

  function onDeleteHandler(id) {
    setTodos(todos.filter((item, index) => index !== id))
  }

  function clearHandler() {
    setTodos([])
  }

  return (
    <>
      <div className='container'>
        <div className='todoList'>
          <h1>Todo App</h1>
          <form onSubmit={submitHandler} className='todoForm'>
            <input id='todo' value={enteredTodos}
              onChange={(e) => setEnteredTodos(e.target.value)} type="text" placeholder='Please enter a todo...' />
            <button className='submitButton'>Add Todo</button>
          </form>
          {
            todos.map((item, index) => <AddTodo
              key={index}
              todo={item}
              id={index}
              deleteHandler={onDeleteHandler} />)
          }
          <button onClick={() => clearHandler()}
            className='clearAll'>Clear All Todos</button>

        </div>
      </div>
    </>
  )
}

export default App
