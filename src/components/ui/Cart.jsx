import React, { useContext } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContext } from '../../context/AppContext';
import CartEmpty from '../../assets 13/empty-cart.svg'
const Cart = ({ cartOpen, setCartOpen }) => {
    const { cart, addToCart, reduceCartQuantity, removeItem } = useContext(AppContext)

    function Subtotal() {
        let totalPrice = 0

        cart.forEach(item => {
            totalPrice += (item.price * item.quantity)
        })
        return totalPrice
    }
    return (
        <div className={`cart__wrapper ${cartOpen && 'cart-open'}`}>
            <nav className="cart">
                <div className="cart__header">
                    <h3 className="cart__header__title">
                        Your shopping Cart
                    </h3>
                    <button className="cart__header__close" onClick={() => setCartOpen(false)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <div className="cart__items">
                    {
                        cart.length > 0 ?
                            cart.map(item => (
                                <div className="cart__item">
                                    <div className="cart__item__left">
                                        <img src={`https://ecommerce-samurai.up.railway.app/${item.images[0]}`} alt="" className="cart__item__img" />
                                    </div>
                                    <div className="cart__item__mid">
                                        <h4 className="cart__item__title">
                                            {item.name}
                                        </h4>
                                        <span className="cart__item__price">
                                            ${item.price}
                                        </span>
                                        <div className="cart__item__quantity">
                                            <button className="cart__item__quantity__btn" onClick={() => reduceCartQuantity(item)}>
                                                -
                                            </button>
                                            <span className="cart__item__quantity__amount">
                                                {item.quantity}
                                            </span>
                                            <button className="cart__item__quantity__btn" onClick={() => addToCart(item, 1)}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <FontAwesomeIcon icon={faTimes} className='cart__item__remove' onClick={() => removeItem(item)} />
                                </div>
                            )) : <div className='cart__empty'>
                                <img src={CartEmpty} alt="" className="cart__empty__img" />
                                <span className="cart__empty__text">
                                    Your cart is empty!
                                </span>
                                <button className="cart__empty__btn" onClick={() => setCartOpen(false)}>
                                    Keep Browsing
                                </button>
                            </div>
                    }

                    <div className="cart__footer">
                        <div className="cart__footer__details">
                            <h4 className="cart__footer__title">
                                Subtotal
                            </h4>
                            <span className="cart__footer__subtotal">
                                ${Subtotal()}
                            </span>
                        </div>
                        <button className="cart__footer__btn"
                            onClick={() => alert("Haven't implemented this feature")}>
                            Go to checkout
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Cart;
