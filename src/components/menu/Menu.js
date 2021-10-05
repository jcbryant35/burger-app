import React from 'react';

/* Styles
**************************************************************************/
import './styles/menu_styles.css';

/* Icons 
*************************************************************************/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


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
                    <div className="foodWrapper">
                        <h2>
                            ADD-ONS 
                            <span className="price-line">
                            ..........
                            </span>
                            <span className="price">$.50 each</span>
                        </h2>
                        <br />
                        <p>
                            Bacon <br />
                            Cheese <br />
                            Jalepenos <br />
                            Mushrooms <br />
                            Grilled Onions <br />
                        </p>
                        <br />
                        <h5>*Add during checkout*</h5>
                    </div>
                </section>
                <section id="sides">
                    <h1>SIDES</h1>
                    <div className="underline"></div>
                    <div className="foodWrapper">
                        <h2>
                            FRIES 
                            <span className="price-line">
                            ...............
                            </span>
                            <span className="price">$2.49</span>
                        </h2>
                        <br />
                        <p>
                            Hand cut potato fries, deep fried to a
                            crispy, golden perfection
                        </p>
                        <br />
                        <button className="addToCartBtn">
                            <FontAwesomeIcon icon={faPlusCircle} /> Add to Cart
                        </button>
                    </div>
                    <div className="foodWrapper">
                        <h2>
                            CAJUN FRIES 
                            <span className="price-line">
                            ..........
                            </span>
                            <span className="price">$2.69</span>
                        </h2>
                        <br />
                        <p>
                            Cajun seasoned and battered hand cut potato fries,
                            deep fried to a crispy golden perfection 
                        </p>
                        <br />
                        <button className="addToCartBtn">
                            <FontAwesomeIcon icon={faPlusCircle} /> Add to Cart
                        </button>
                    </div>
                    <div className="foodWrapper">
                        <h2>
                            ONION RINGS 
                            <span className="price-line">
                            ...............
                            </span>
                            <span className="price">$2.79</span>
                        </h2>
                        <br />
                        <p>
                            Hand cut onion rings, battered and deep fried
                            to a cripsy golden brown perfection
                        </p>
                        <br />
                        <button className="addToCartBtn">
                            <FontAwesomeIcon icon={faPlusCircle} /> Add to Cart
                        </button>
                    </div>
                    <div className="foodWrapper">
                        <h2>
                            HOME-MADE CHIPS 
                            <span className="price-line">
                            ..........
                            </span>
                            <span className="price">$2.99</span>
                        </h2>
                        <br />
                        <p>
                            Hand cut potato chips, deep fried to a crispy golden
                            perfection, with your choice of seasoning (salt or
                            cajun seasoning)
                        </p>
                        <br />
                        <button className="addToCartBtn">
                            <FontAwesomeIcon icon={faPlusCircle} /> Add to Cart
                        </button>
                    </div>
                </section>
                <section id="drinks">
                    <h1>DRINKS</h1>
                    <div className="underline"></div>
                    <div className="foodWrapper">
                        <h2>
                            BOTTLED WATER
                            <span className="price-line">
                            ..........
                            </span>
                            <span className="price">$1.49</span>
                        </h2>
                        <br />
                        <p>
                           Your choice of Ozarka or Dasani, served ice cold
                           or temperate 
                        </p>
                        <br />
                        <button className="addToCartBtn">
                            <FontAwesomeIcon icon={faPlusCircle} /> Add to Cart
                        </button>
                    </div>
                    <div className="foodWrapper">
                        <h2>
                            FOUNTAIN DRINK 
                            <span className="price-line">
                            ...............
                            </span>
                            <span className="price">$1.79</span>
                        </h2>
                        <br />
                        <p>
                            Your choice of Coke, Sprite, Dr. Pepper, or
                            Root Beer
                        </p>
                        <br />
                        <button className="addToCartBtn">
                            <FontAwesomeIcon icon={faPlusCircle} /> Add to Cart
                        </button>
                    </div>
                    <div className="foodWrapper">
                        <h2>
                            BOTTLED SODA
                            <span className="price-line">
                            ...............
                            </span>
                            <span className="price">$1.95</span>
                        </h2>
                        <br />
                        <p>
                            Your choice of Coke, Sprite, Dr. Pepper, or
                            Root Beer
                        </p>
                        <br />
                        <button className="addToCartBtn">
                            <FontAwesomeIcon icon={faPlusCircle} /> Add to Cart
                        </button>
                    </div>
                    <div className="foodWrapper">
                        <h2>
                            CANNED SODA 
                            <span className="price-line">
                            ..........
                            </span>
                            <span className="price">$1.25</span>
                        </h2>
                        <br />
                        <p>
                            Your choice of Coke, Sprite, Dr. Pepper, or Root
                            Beer
                        </p>
                        <br />
                        <button className="addToCartBtn">
                            <FontAwesomeIcon icon={faPlusCircle} /> Add to Cart
                        </button>
                    </div>
                </section>
                <section id="shakes">
                    <h1>SHAKES</h1>
                    <div className="underline"></div>
                    <div className="foodWrapper">
                        <h2>
                            HOME-MADE MILKSHAKES
                            <span className="price-line">
                            ...............
                            </span>
                            <span className="price">$5.99</span>
                        </h2>
                        <br />
                        <p>
                            Hand scooped ice cream blended with milk, available
                            in the flavors of vanilla, chocolate, or strawberry
                        </p>
                        <br />
                        <button className="addToCartBtn">
                            <FontAwesomeIcon icon={faPlusCircle} /> Add to Cart
                        </button>
                    </div>
                </section>
                <section id="galleryBtnContainer">
                    <p>Gallery</p>
                    <a href="#galleryHeader">
                        <FontAwesomeIcon icon={faChevronDown} id="downArrow" />
                    </a>
                </section>
            </main>
        </div>
    )
};

export default Menu;