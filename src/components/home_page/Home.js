import React from 'react';

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
            </main> 
        </div>
    )
};

export default Home;

