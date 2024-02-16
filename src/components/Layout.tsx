import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/users'>Users</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}
