import React from 'react';

/* Styles
****************************************************/
import './styles/about_styles.css';

/* Icons 
***************************************************/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


function About() {
    return (
        <div>
            <main id="aboutMain">
                <header id="aboutHeader">
                    <h1>OUR STORY</h1>
                </header>
            {/*   <img src={Logo} alt="logo" /> */}
                <article id="textBox">
                    <p>
                        WE ARE A FAMILY OWNED AND OPERATED RESTAURANT
                        LOCATED IN SOUTH LOUISIANA SINCE 2003. WE ARE 
                        WELL-KNOWN LOCALLY FOR OUR DELICOUS BURGERS. 
                        WE GOT OUR INSPIRATION TO OPEN A BURGER RESTAURANT
                        FROM FRIENDS AND FAMILY AFTER HAVING MANY BACKYARD
                        COOKOUTS AND RECEIVING MANY COMPLIMENTS ABOUT HOW
                        TASTY OUR BURGERS WERE. WE USE 100% PURE GROUND
                        BEEF PATTIES AND A SECRET BLEND OF SEASONINGS TO 
                        ACHIEVE THE WONDERFUL FLAVOURS THAT SO MANY PEOPLE
                        LOVE. ALL OF OUR BURGERS ARE MADE TO ORDER AND
                        CHARCOAL GRILLED TO PERFECTION.
                    </p>
                </article>
                <section id="locationBtnContainer">
                    <p>Locations</p>
                    <a href="#locationMain">
                        <FontAwesomeIcon icon={faChevronDown} id="downArrow" />
                    </a>
                </section>
            </main>
        </div>
    )
}

export default About;