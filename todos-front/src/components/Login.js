import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './LoginPage.css'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
        
    const newUser = {
      email,
      password
    }

    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, newUser)
      .then(response => {
        // aqui salvamos tudo que vem da requisição. Se no user model (do back) tivesse por ex "city", me retornaria a cidade
        localStorage.setItem("loggedInUser", JSON.stringify(response.data))
        setEmail('')
        setPassword('')

        navigate('/todos')
      })
      .catch(error => console.log(error))
    }

  return (
    <div className='LoginPage'>
      <h2 className='header'>Login</h2>
      <form className='form-group' onSubmit={handleSubmit}>

        <div className="input-group email">
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

        <div className="input-group password">
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
          className="btn btn-primary login-btn" 
          style={{width: "75px", margin: "auto", marginTop: "20px", marginBottom: "20px"}}
        >Login</button>
      </form>
    </div>
  )
}

export default Login