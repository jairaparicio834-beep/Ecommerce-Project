import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <menu className={`menu ${menuOpen && 'menu-open'}`}>
            <button className="menu__close">
                <FontAwesomeIcon icon={faTimes} onClick={() => setMenuOpen(false)} />
            </button>
            <div className="menu__links">
                <a href="/" className="menu__link">Home</a>
                <a href="/products" className="menu__link">Products</a>
                <button className="menu__link menu__cart">
                    Cart
                </button>
            </div>

        </menu>
    );
}

export default Menu;
