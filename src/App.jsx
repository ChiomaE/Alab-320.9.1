import { useReducer, useState } from 'react'
import './App.css'
import TodoButtons from './Todo/TodoButtons'

export const actions = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

function reducer(todos, action) {
  switch(action.type) {
    case actions.ADD_TODO: 
      return[...todos, newTodo(action.payload.name)]

    case actions.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id) {
          return {...todo, complete: !todo.complete}
        }
        return todo;
      })
    case actions.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default: 
      return todos
      

  }
}

function newTodo(name) {
  return{id: Date.now(), name: name, complete:false}
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState("")
  


  function handleSubmit(e) {
    e.preventDefault()
    dispatch({type: actions.ADD_TODO, payload:{name:name}})
    setName('')
  }

  /* console.log(todos) */

  return (
    <div>
    <h1>Todo List</h1>
    <form onSubmit={(handleSubmit)}>
      <input type='text'value={name} onChange={e => setName(e.target.value)}>

      </input>
    </form>
    {todos.map(todo => {
      return <TodoButtons key={todo.id}  todo={todo} dispatch={dispatch}/>
    })}
      
    </div>
  )
}

export default App
