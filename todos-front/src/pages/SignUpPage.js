import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './SignUpPage.css'
import Swal from 'sweetalert2'

const SignUpPage = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
        
    const newUser = {
      name,
      email,
      password
    }

    axios.post(`${process.env.REACT_APP_API_URL}/auth/sign-up`, newUser)
      .then(response => {
        if(response.status === 201) {
          setName('')
          setEmail('')
          setPassword('')
          Swal.fire({
            text: 'User created successfully',
            imageUrl: "https://cdn.dribbble.com/users/995553/screenshots/2589741/4.gif",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
          navigate('/')
        }
      })
    .catch(error => console.log(error))
  }

  return (
    <div className='SignUpPage'>
      <h1 className='header'>Sign Up</h1>
      <form className='form-group' onSubmit={handleSubmit}>
    
        <div className="input-group name">
          <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
          <input 
            type="text" 
            className="form" 
            aria-label="Sizing example input" 
            aria-describedby="inputGroup-sizing-default"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="input-group name">
          <span className="input-group-text" id="inputGroup-sizing-default">E-mail</span>
          <input 
            type="text" 
            className="form" 
            aria-label="Sizing example input" 
            aria-describedby="inputGroup-sizing-default"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group name">
          <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
          <input 
            type="password" 
            className="form" 
            aria-label="Sizing example input" 
            aria-describedby="inputGroup-sizing-default"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary" 
          style={{width: "75px", margin: "auto", marginTop: "20px"}}
        >Save</button>
      </form>
    </div>
  )
}

export default SignUpPage