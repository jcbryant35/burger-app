import React from 'react';

/* Styles
**************************************************************************/
import './styles/cart_styles.css';

/* Icons
**************************************************************************/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function Cart() {
    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} id="cart" />
        </div>
    )
};

export default Cart;