import { menuItems } from "../data/menuItems";
import MenuItems from "./MenuItems";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <ul className='menu-itemsE'>
        {menuItems.map((menu, index) =>{
          return <MenuItems items={menu} key={index}/>;
        })}
        <CartWidget/>
    </ul>
  )
}

export default Navbar