import { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const MenuItems = ({items}) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if ( dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);
  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };
  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };
  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={closeDropdown}>
      {items.submenu && items.url ?(
        <>
          <button type="button" aria-haspopup="menu" className='dropdown-button' aria-expanded={dropdown ? "true":"false"} onClick={() => setDropdown((prev) => !prev)}>
            <Link className='menu-linkE' to={items.url}>{items.title}</Link>
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown}/>
        </>
      ):!items.url && items.submenu ? (
        <>
          <button className='dropdown-button' aria-expanded={dropdown ? "true":"false"} onClick={() => setDropdown((prev) => !prev)}>
            {items.title}{' '}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ):(
        <Link className='menu-linkE' to={items.url}>{items.title}</Link>
      )}
    </li>
  )
}

export default MenuItems