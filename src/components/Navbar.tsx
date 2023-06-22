import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="ul">
        <li className="li">
          <Link to="/" className="link" activeClassName="active">
            Home
          </Link>
        </li>
        <li className="li">
          <Link to="/products" className="link" activeClassName="active">
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
