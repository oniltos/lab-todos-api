import axios from "axios";
import { useState } from 'react'


const AddToDo = () => {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const token = localStorage.getItem('token')
    const headers = {
    'Authorization': `Bearer ${token}`
  }

    const newTodo = { title: title, completed: false }
    setTodos([...todos, newTodo])
    setTitle('')

    axios.post(`${process.env.REACT_APP_API_URL}/todos`, { headers })
      .then(response => {
        setTodos("")
      }).catch(error => console.log(error))
}



  return (
    <div className="addToDo">
      <form onSubmit={ handleSubmit }>
        <div className="input-group-sm flex-nowrap newToDo">
          <span className="input-group-text" id="addon-wrapping">New To Do: </span>
          <input 
            type="text" 
            className="form-control"
            id="add-todo" 
            placeholder="Type a title" 
            aria-label="Title" 
            aria-describedby="addon-wrapping"
            value={title}
            onChange={ e => setTitle(e.target.value) }
            />
        </div>
        <button type="submit" className="btn btn-outline-primary btn-sm submit-btn">Add</button>
      </form>
    </div>
  )
}

export default AddToDo