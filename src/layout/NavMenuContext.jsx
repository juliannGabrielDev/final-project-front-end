import {createContext, useContext, useRef, useState} from "react";
import PropTypes from "prop-types";

// Create a context for the NavMenu component
const NavMenuContext = createContext();

// Context provider that provides state and handleMenu function
export function NavMenuProvider({children}) {
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
        <NavMenuContext.Provider value={{navMenu, navbar, handleMenu}}>
            {children}
        </NavMenuContext.Provider>
    )
}

export function useNavMenuContext() {
    return useContext(NavMenuContext);
}

NavMenuProvider.propTypes = {
    children: PropTypes.node.isRequired,
}