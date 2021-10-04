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
           <main>
               <header>
                   <Navigation />
                   <Cart />
                </header>
                <section id="menuBtnContainer">
                    <p>Menu</p>
                    <button id="menuBtn">
                        <FontAwesomeIcon icon={faChevronDown} id="downArrow" />
                    </button>
                </section>
            </main> 
        </div>
    )
};

export default Home;

