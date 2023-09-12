import CartWidget from "../CartWidget/CartWidget.js";
import { NavLink } from 'react-router-dom'  

const NavBar = () => {
    return (
        <nav className="NavBar">
            <link to='/'>
            <h1>REDELUCES</h1>
            </link>
            <div className='Categories'>
                <NavLink to={`/category/celular`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celular</NavLink>
                <NavLink to={`/category/tablet`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablet</NavLink>
                <NavLink to={`/category/Laptop`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Laptop</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar