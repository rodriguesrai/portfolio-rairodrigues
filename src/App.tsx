import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Testando</h1>} />
      <Route path='/blog' element={<h1>Testando /BLOG</h1>} />
      <Route path='/users' element={<h1>Testando /USERS</h1>} />
    </Routes>
  )
}

export default App
