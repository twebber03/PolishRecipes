import { Link } from "react-router-dom";
import "./style/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/aboutus" className="nav-item large">About Us</Link>
      <Link to="/home" className="nav-item">Home</Link>
      <Link to="/discover" className="nav-item">Discover</Link>
      <Link to="/saved" className="nav-item">Saved</Link>
      <Link to="/search" className="nav-item large">Search</Link>
    </nav>
  );
}

export default Navbar;
