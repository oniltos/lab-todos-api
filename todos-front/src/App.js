import './App.css';
import { Routes, Route } from 'react-router-dom'
import TodosPage from './pages/TodosPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/todos' element={<TodosPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;