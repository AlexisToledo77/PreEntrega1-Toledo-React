import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget.js";
import { NavLink } from 'react-router-dom'  

const NavBar = () => {
    return (
        <nav className="nav">
           <h1 className='title'>REDELUCES </h1>
            <CartWidget />
            <div className='Categories'>
                <NavLink to={`/category/celular`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Neon Madera </NavLink>
                <NavLink to={`/category/tablet`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Guirnaldas </NavLink>
                <NavLink to={`/category/Laptop`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Neon Acrilico </NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar