import { Link } from "react-router-dom"

const Dropdown = ({submenus, dropdown}) => {
  return (
    <ul className={`dropdownE ${dropdown ? "show":""}`}>
      {submenus.map((submenu,index) =>(
        <li className='dropdown-menu-linkE' key={index}>
          <Link className='dropdown-menu-linkE' to={submenu.url}>{submenu.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Dropdown