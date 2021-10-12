import React from 'react';

/* Styles
************************************************************/
import './styles/gallery_styles.css';

/* Icons
************************************************************/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


function Gallery() {
    return (
        <div>
            <main id="galleryMain">
                <header id="galleryHeader">
                    <h1>FOLLOW @BOUDREAUXS</h1>
                </header>
                <section id="imageWrapper">
                    <div className="image1"></div>
                    <div className="image2"></div>
                    <div className="image3"></div>
                    <div className="image4"></div>
                    <div className="image5"></div>
                    <div className="image6"></div>
                    <div className="image7"></div>
                    <div className="image8"></div>
                </section>
                <section id="aboutBtnContainer">
                    <p>About</p>
                    <a href="#aboutMain">
                        <FontAwesomeIcon icon={faChevronDown} id="downArrow" />
                    </a>
                </section>
            </main>
        </div>
    )
}

export default Gallery;