import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Principal from './pages/Main'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Principal />} />
          <Route path='/contato' element={<h1>Testando /CONTATO</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
