import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import GlobalStyle from './components/GlobalStyle.styled'

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<h1>Testando</h1>} />
          <Route path='/blog' element={<h1>Testando /BLOG</h1>} />
          <Route path='/users' element={<h1>Testando /USERS</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
