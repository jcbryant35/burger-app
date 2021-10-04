import React from 'react';

/* Styles
**************************************************************************/
import './styles/menu_styles.css';

/* Icons 
*************************************************************************/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


function Menu() {
    return (
        <div>
            <main id="menuMain">
                <header id="menuHeader">
                    <h1>MENU</h1>
                </header>
                <section id="burgers">
                    <h1>BURGERS</h1>
                    <div className="underline"></div>
                    <div className="foodWrapper">
                        <h2>
                            SINGLE BURGER 
                            <span className="price-line">
                            ...............
                            </span>
                            <span className="price">$4.89</span>
                        </h2>
                        <br />
                        <p>
                            Single 1/4 pound beef patty, lettuce, tomato,
                            pickles, onions, mayo, and mustard
                        </p>
                        <br />
                        <button className="addToCartBtn">
                            <FontAwesomeIcon icon={faPlusCircle} /> Add to Cart
                        </button>
                    </div>
                    <div className="foodWrapper">
                        <h2>
                            SINGLE CHEESEBURGER 
                            <span className="price-line">
                            ..........
                            </span>
                            <span className="price">$5.19</span>
                        </h2>
                        <br />
                        <p>
                            Single 1/4 pound beef patty, cheese, lettuce, tomato,
                            pickles, onions, mayo, and mustard
                        </p>
                        <br />
                        <button className="addToCartBtn">
                            <FontAwesomeIcon icon={faPlusCircle} /> Add to Cart
                        </button>
                    </div>
                    <div className="foodWrapper">
                        <h2>
                            DOUBLE BURGER 
                            <span className="price-line">
                            ...............
                            </span>
                            <span className="price">$6.39</span>
                        </h2>
                        <br />
                        <p>
                            Two 1/4 pound beef patties, lettuce, tomato,
                            pickles, onions, mayo, and mustard
                        </p>
                        <br />
                        <button className="addToCartBtn">
                            <FontAwesomeIcon icon={faPlusCircle} /> Add to Cart
                        </button>
                    </div>
                    <div className="foodWrapper">
                        <h2>
                            DOUBLE CHEESEBURGER 
                            <span className="price-line">
                            ..........
                            </span>
                            <span className="price">$6.99</span>
                        </h2>
                        <br />
                        <p>
                            Two 1/4 pound beef patties, two pieces of cheese,
                            lettuce, tomato, pickles, onions, mayo, and mustard
                        </p>
                        <br />
                        <button className="addToCartBtn">
                            <FontAwesomeIcon icon={faPlusCircle} /> Add to Cart
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
};

export default Menu;