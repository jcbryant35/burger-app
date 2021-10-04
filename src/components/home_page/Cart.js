import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './styles/cart_styles.css';

function Cart() {
    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} id="cart" />
        </div>
    )
};

export default Cart;