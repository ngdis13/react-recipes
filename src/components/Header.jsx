import { Link } from "react-router-dom/cjs/react-router-dom.min"

function Header() {
    return   <nav className=" deep-purple lighten-3">
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">React Recipe</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </div>
  </nav>
}

export {Header}