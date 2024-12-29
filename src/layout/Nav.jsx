import Logo from "../assets/icons/logo.svg";
import Basket from "../assets/icons/Basket.svg";
import Menu from "../assets/icons/hamburger-menu.svg";
import Link from "../components/Link";

import PropTypes from "prop-types";
import {useRef, useState} from "react";

export default function Nav() {
    const navMenu = useRef(null);
    const navbar = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        if (isOpen) {
            setIsOpen(false);
            navMenu.current.classList.add("hidden");
            navbar.current.classList.remove("h-screen");
        } else {
            setIsOpen(true);
            navMenu.current.classList.remove("hidden");
            navbar.current.classList.add("h-screen");
        }
    }

    return (
        <nav ref={navbar} className="bg-white sticky top-0 z-10">
            <div className="flex gap-7 items-center justify-between lg:justify-center py-4 px-5  shadow-md">
                <img src={Menu} onClick={handleMenu} className="h-6 lg:hidden cursor-pointer" alt="Menu" />
                <img src={Logo} className="cursor-pointer h-8 lg:h-10" alt="Little Lemon" />
                <NavMenu className="hidden" />
                <img src={Basket} className="h-8 cursor-pointer" alt="Basket" />
            </div>
            <div ref={navMenu} className="hidden lg:hidden p-5">
                <NavMenu className="flex flex-col" />
            </div>
        </nav>
    )
}

function NavMenu(props) {
    return (
        <ul className={`${props.className} gap-7 lg:flex`}>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Menu</Link>
                <Link>Reservations</Link>
                <Link>Order Online</Link>
                <Link>Login</Link>
            </ul>
    )
}

NavMenu.propTypes = {
    className: PropTypes.string,
};