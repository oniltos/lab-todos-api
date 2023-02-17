// import axios from 'axios'
// import './TodosPage.css'
// import todoGif from '../assets/images/todoGif.gif'
// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// const TodosPage = () => {
//   const [todos, setTodos] = useState([])
//   const [todo, setTodo] = useState('')
//   const [toBeCompletedAt, setToBeCompletedAt] = useState('')
//   const [completed, setCompleted] = useState(false)
//   const [refresh, setRefresh] = useState(true)

//   const navigate = useNavigate()

//   const token = localStorage.getItem('token')
//   const headers = {
//     Authorization: `Bearer ${token}`
//   }

//   const handleSubmit = e => {
//     e.preventDefault()

//     const newTodo = { 
//       title: todo, 
//       completed: false, 
//       toBeCompletedAt: toBeCompletedAt
//     }

//     setTodos([...todos, newTodo])
//     setTodo('')

//     axios.post(`${process.env.REACT_APP_API_URL}/todos`, newTodo, { headers })
//     .then(response => {
//       if(response.status === 201) {
//         setRefresh(!refresh)
//       }
//     })
//     .catch(error => console.log(error))
//   }

//   const deleteToDo = (id) => {
//     axios.delete(`${process.env.REACT_APP_API_URL}/todos/${id}`, {headers})
//       .then(setRefresh(!refresh))
//       .catch(error => console.log(error))
//   }

//   useEffect(() => {
//   axios.get(`${process.env.REACT_APP_API_URL}/todos`, { headers })
//     .then(response => {
//       setTodos(response.data)
//     }).catch(error => console.log(error))
//   }, [refresh])

//   const logOut = () => {
//     localStorage.removeItem('token')
//     navigate('/')
//   }

//   return (
//     <div className='TodoPage'>
//       <button 
//         type="button"
//         className='logout'
//         onClick={() => logOut(todo._id)}
//         >Logout
//       </button>
//       <h1 className='header'>To Dos List</h1>
//       <img src={ todoGif } alt="Gif To Do" width="100px" style={{marginBottom: "20px"}}/>
//       <div className="form-checkbox">
//         <div className="todo-form">
//           <form onSubmit={handleSubmit}>
//             <div className="input-group todo">
//               <input
//                 type="text"
//                 className="form"
//                 aria-label="Sizing example input"
//                 aria-describedby="inputGroup-sizing-default"
//                 value={todo}
//                 onChange={e => setTodo(e.target.value)}
//                 placeholder="Type your to do here"
//               />
//               <input 
//                 type="date" 
//                 className="form"
//                 required
//                 style={{width: "130px"}}
//                 aria-label="Sizing example input"
//                 aria-describedby="inputGroup-sizing-default"
//                 value={toBeCompletedAt}
//                 onChange={e => setToBeCompletedAt(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 className="btn btn-primary"
//                 style={{width: "75px"}}
//               >Add</button>
//             </div>
//           </form>
//         </div>
//         <div className="todo-list">
//           {todos.length > 0 && todos.map(todo => {
//             return (
//             <div key={todo._id} className="todo">
//               <div className="checkbox-todo-date">
//                 <div className="checkbox-todo">
//                   <input
//                     type="checkbox"
//                     className='check'
//                     name="todoCheck"
//                     value={completed}
//                     onChange={e => setCompleted(e.target.value)}
//                     defaultChecked={todo.completed}
//                   />
//                   <span>{todo.title}</span>
//                 </div>
//               </div>
//               <div className="date-delete">
//                 <span className='date'> <span className="dueDate">Due Date:</span> {todo.toBeCompletedAt.slice(0, 10)}</span>
//                 <button
//                   type= "button"
//                   className="delete-btn"
//                   style={{width: "25px", height: "25px", marginLeft: "8px"}}
//                   onClick={() => deleteToDo(todo._id)}
//                   >X
//                 </button>
//               </div>
//             </div>)
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default TodosPage

import axios from 'axios'
import './TodosPage.css'
import todoGif from '../assets/images/todoGif.gif'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const TodosPage = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [userName, setUserName] = useState('')
  const [toBeCompletedAt, setToBeCompletedAt] = useState('')
  const [completed, setCompleted] = useState(false)
  const [refresh, setRefresh] = useState(true)

  const navigate = useNavigate()

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
  const headers = {
    Authorization: `Bearer ${loggedInUser.jwt}`
  }

  const handleSubmit = e => {
    e.preventDefault()

    const newTodo = { 
      title: todo, 
      completed: false, 
      toBeCompletedAt: toBeCompletedAt
    }

    setTodos([...todos, newTodo])
    setTodo('')
    setToBeCompletedAt('')

    axios.post(`${process.env.REACT_APP_API_URL}/todos`, newTodo, { headers })
    .then(response => {
      if(response.status === 201) {
        setRefresh(!refresh)
      }
    })
    .catch(error => console.log(error))
  }

  const deleteToDo = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/todos/${id}`, {headers})
      .then(setRefresh(!refresh))
      .catch(error => console.log(error))
  }

  useEffect(() => {
  axios.get(`${process.env.REACT_APP_API_URL}/todos`, { headers })
    .then(response => {
      setTodos(response.data)
      setUserName(loggedInUser.user.name)
    }).catch(error => console.log(error))
  }, [refresh])

  const logOut = () => {
    localStorage.removeItem(loggedInUser.jwt)
    navigate('/')
  }

  return (
    <div className='TodoPage'>
      <button 
        type="button"
        className='logout'
        onClick={() => logOut(todo._id)}
        >Logout
      </button>
      <h1 className='header'>Welcome { userName }</h1>
      <img src={ todoGif } alt="Gif To Do" width="100px" style={{marginBottom: "20px"}}/>
      <div className="form-checkbox">
        <div className="todo-form">
          <form onSubmit={handleSubmit}>
            <div className="input-group todo">
              <input
                type="text"
                className="form"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={todo}
                onChange={e => setTodo(e.target.value)}
                placeholder="Type your to do here"
              />
              <input 
                type="date" 
                className="form"
                required
                style={{width: "130px"}}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={toBeCompletedAt}
                onChange={e => setToBeCompletedAt(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{width: "75px"}}
              >Add</button>
            </div>
          </form>
        </div>
        <div className="todo-list">
          {todos.length > 0 && todos.map(todo => {
            return (
            <div key={todo._id} className="todo">
              <div className="checkbox-todo-date">
                <div className="checkbox-todo">
                  <input
                    type="checkbox"
                    className='check'
                    name="todoCheck"
                    value={completed}
                    onChange={e => setCompleted(e.target.value)}
                    defaultChecked={todo.completed}
                  />
                  <span>{todo.title}</span>
                </div>
              </div>
              <div className="date-delete">
                <span className='date'> <span className="dueDate">Due Date:</span> {todo.toBeCompletedAt.slice(0, 10)}</span>
                <button
                  type= "button"
                  className="delete-btn"
                  style={{width: "25px", height: "25px", marginLeft: "8px"}}
                  onClick={() => deleteToDo(todo._id)}
                  >X
                </button>
              </div>
            </div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default TodosPage

