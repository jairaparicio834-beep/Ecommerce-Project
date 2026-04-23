import React, { useContext } from 'react';
import NavLogo from '../../assets 13/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../context/AppContext';

const Navbar = ({ setCartOpen, setMenuOpen }) => {
    const { cartLength } = useContext(AppContext)
    return (
        <nav className='nav'>
            <div className="nav__container">
                <a href="/">
                    <img src={NavLogo} alt="" className="nav__logo" />
                </a>
                <div className="nav__links">
                    <a href="/products" className="nav__link">Products</a>
                </div>
                <button className="nav__cart" onClick={() => setCartOpen(true)}>
                    <FontAwesomeIcon icon={faCartShopping} className='nav__cart__icon ' />
                    {cartLength() > 0 && <span className="cart__length">
                        {cartLength()}
                    </span>}
                </button>
                <button className="nav__menu" onClick={() => setMenuOpen(true)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
