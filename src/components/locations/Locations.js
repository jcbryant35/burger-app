import React from 'react';
import Map from './Maps';

/* Styles
**********************************************/
import './styles/location_styles.css';


function Location() {
    return (
        <div>
            <main id="locationMain">
                <header id="locationHeader">
                    <h1>LOCATIONS</h1>
                </header>
                <Map />
                <article id="locationText">
                    BOUDREAUX'S BURGERS<br />
                    117 North Main Street <br />
                    Jennings, La 70546 <br />
                    337-259-8432
                </article>
            </main>
        </div>
    )
};

export default Location;