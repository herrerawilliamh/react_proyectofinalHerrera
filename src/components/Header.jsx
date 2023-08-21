import { Link } from "react-router-dom"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header>
      <nav className="navbarE">
        <Link to='/' className="logoE"><h1>WillyCommerce</h1></Link>
        <Navbar/>
    </nav>
    </header>
  )
}

export default Header