import { Link } from 'react-router'
import './header.css'
export default function Header() {
  return (
    <header className="navbar">
      <nav>
        {/* <Link to="/" className="text-xl font-bold">
          Docto-Bahnhof
        </Link> */}
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/auth">Login</a></li>
          <li><a href="/app">User App</a></li>
          <li><a href="/doctor">Doctor App</a></li>
          <li><a href="/admin">Admin App</a></li>
        </ul>
      </nav>
    </header>
  )
}
