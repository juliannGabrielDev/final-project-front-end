import Logo from '../assets/icons/logo.svg'; 
import Basket from '../assets/icons/Basket.svg';
import Menu from '../assets/icons/hamburger-menu.svg';

import { NavMenuProvider, useNavMenuContext } from './NavMenuContext';  // Asegúrate de importar el contexto correctamente

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Nav() {
    return (
        <NavMenuProvider>  {/* El proveedor envuelve el componente Nav */}
            <NavContent />
        </NavMenuProvider>
    )
}

// Este es el componente que contiene la lógica de navegación
function NavContent() {
    const { navMenu, navbar, handleMenu } = useNavMenuContext();  // Llamando a useNavMenuContext dentro del componente hijo que está dentro del proveedor

    return (
        <nav ref={navbar} className="bg-white sticky top-0 z-10">
            <div className="flex gap-7 items-center justify-between lg:justify-center py-4 px-5 shadow-md">
                <MenuButton />
                <img
                    src={Logo}
                    className="cursor-pointer h-8 lg:h-10"
                    alt="Little Lemon" />
                <NavMenu variant="hidden" />
                <img
                    src={Basket}
                    className="h-8 cursor-pointer"
                    alt="Basket" />
            </div>
            <div ref={navMenu} className="hidden lg:hidden p-5">
                <NavMenu variant="flex flex-col" />
            </div>
        </nav>
    )
}

function NavMenu({ variant }) {
    return (
        <ul className={`${variant} gap-7 lg:flex`}>
            <NavLink route="/">Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Menu</NavLink>
            <NavLink>Reservations</NavLink>
            <NavLink>Order Online</NavLink>
            <NavLink>Login</NavLink>
        </ul>
    )
}

function MenuButton() {
    const { handleMenu } = useNavMenuContext();  // Usando el contexto para manejar el menú

    return (
        <button onClick={handleMenu}>
            <img
                src={Menu}
                className="h-6 lg:hidden cursor-pointer"
                alt="Menu" />
        </button>
    )
}

function NavLink({ route, children }) {
    const { handleMenu } = useNavMenuContext();  // Usando el contexto para manejar el menú

    const handleClick = () => {
        handleMenu();  // Ejecutando la función handleMenu al hacer clic en el enlace
    }

    return (
        <Link
            to={route}
            onClick={handleClick}
            className='font-bold font-karla text-lg hover:underline'>
            {children}
        </Link>
    )
}

NavMenu.propTypes = {
    variant: PropTypes.string,
};
