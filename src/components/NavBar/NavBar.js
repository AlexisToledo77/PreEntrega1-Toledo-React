import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget.js";
import { NavLink } from 'react-router-dom'  

const NavBar = () => {
    return (
        <nav className="nav">
           <h1 className='title'>REDELUCES </h1>
            <div className='Categories'>
                <NavLink to={`/category/cartelesNeonMadera`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Neon Madera </NavLink>
                <NavLink to={`/category/Guirnaldas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Guirnaldas </NavLink>
                <NavLink to={`/category/cartelesNeonAcrilico`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Neon Acrilico </NavLink>
            </div>
            <NavLink><CartWidget /> </NavLink>
        </nav>
    )
}

export default NavBar