import React from 'react';
import Map from './Maps';

/* Styles
**********************************************/
import './styles/location_styles.css';

/* Icons
**********************************************/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


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
                <section id="contactBtnContainer">
                    <p>Contact Us</p>
                    <a href="#contactMain">
                        <FontAwesomeIcon icon={faChevronDown} id="downArrow" />
                    </a>
                </section>
            </main>
        </div>
    )
};

export default Location;