import Login from "../components/Login"
import './HomePage.css'
import todoImg from '../assets/images/todo-img.png'
import { Link } from "react-router-dom"




const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>Welcome to the best Todo list</h1>
      <div className="todo-img-login">
        <img src={ todoImg } alt="To Do" className="todo-img"/>
        <div className="notHaveAccount-login">
          <Login />
          <h5 className="notHaveAccount">Don't Have an account? <Link to={'/sign-up'}>Sign Up here</Link></h5>
        </div>
      </div> 
    </div>
  )

}

export default HomePage