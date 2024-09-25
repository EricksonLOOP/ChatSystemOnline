import "./global.css"
import LoginForm from './app/components/login'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './app/pages/dashboard'
function App() {

  return (
    <Routes>
      <Route path='/' element={<LoginForm />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
