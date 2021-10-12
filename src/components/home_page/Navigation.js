import React from 'react';

/* Styles
**********************************************************************/
import './styles/navigation_styles.css';

/* Icons
**********************************************************************/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes} from '@fortawesome/free-solid-svg-icons';


function Navigation() {
    return (
        <div>
            <nav>
                <FontAwesomeIcon icon={faBars} id="navBtn" />
                <ul id="navMenu">
                    <FontAwesomeIcon icon={faTimes} id="closeNavBtn" />
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="#">MENU</a>
                    </li>
                    <li>
                        <a href="#">GALLERY</a>
                    </li>
                    <li>
                        <a href="#">OUR STORY</a>
                    </li>
                    <li>
                        <a href="#">LOCATIONS</a>
                    </li>
                    <li>
                        <a href="#">CONTACT US</a>
                    </li>
                </ul>
            </nav>  
        </div>
    )
}

export default Navigation;