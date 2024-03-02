import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <h1>Book Store</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header