import React from 'react';

/* Icons
*************************************************************************/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

/* Styles
*****************************************************/
import './styles/main_home_styles.css';

/* Components 
****************************************************/
import Navigation from './Navigation';
import Cart from './Cart';

function Home() {
    return (
        <div>
           <main id="homeMain">
               <header id="homeHeader">
                   <Navigation />
                   <Cart />
                </header>
                <section id="menuBtnContainer">
                    <p>Menu</p>
                    <a href="#menuMain">
                        <FontAwesomeIcon icon={faChevronDown} id="downArrow" />
                    </a>
                </section>
            </main> 
        </div>
    )
};

export default Home;

