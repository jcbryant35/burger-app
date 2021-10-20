import React from 'react';

/* Styles
*********************************************/
import './styles/footer_styles.css';

/* Icons
**********************************************/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';



function Footer() {
    return (
        <div>
            <main id="storeInfoMain">
                <header id="storeInfoHeader">
                    <h1>WE'RE OPEN</h1>
                </header>
                <section id="storeInfoText">
                    <p>
                        Monday-Thursday : 11am-10pm<br /><br />
                        Friday-Sunday : 11am-12am<br /><br /><br />
                        117 North Main Street<br /><br />
                        Jennings, LA 70546<br /><br /><br />
                        Tel: 337-259-8432<br /><br />
                        Email: b_b_info@gmail.com
                    </p>
                    <section id="icons">
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </section>
                </section>
                <footer id="footer">
                    <span id="copySymbol">&copy;</span> 2021 Boudreaux's Burgers
                </footer>
            </main>
        </div>
    )
}

export default Footer;