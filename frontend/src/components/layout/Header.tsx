import { Link } from 'react-router'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Docto-Bahnhof
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/discovery" className="hover:text-gray-300">
              Discover
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
