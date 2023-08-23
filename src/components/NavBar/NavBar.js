import CartWidget from "../CartWidget/CartWidget.js";

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Inicio</button>
                <button>Productos</button>
                <button>Comercios</button>
                <button>Contactanos</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar