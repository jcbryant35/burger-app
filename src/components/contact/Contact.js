import React from 'react';
import './styles/contact_styles.css';

function Contact() {
    return (
        <div>
            <main id="contactMain">
                <header id="contactHeader">
                    <h1>CONTACT US</h1>
                </header>
                <section id="contactIntroText">
                    <p>
                        IF YOU HAVE ANY QUESTIONS, COMMENTS, OR 
                        COMPLAINTS, PLEASE FEEL FREE TO  USE THE 
                        FORM BELOW TO SEND US A MESSAGE!            
                    </p>
                </section>
                <form action="#" id="form">
                    <input type="text" id="name" name="name" placeholder="NAME:" /><br /><br />
                    <input type="text" id="email" name="email" placeholder="EMAIL:" /><br /><br />
                    <input type="text" id="subject" name="subject" placeholder="SUBJECT:" /><br /><br /><br />
                    <textarea id="messageBox" name="messageBox" placeholder="MESSAGE.."></textarea>
                    <br /><br />
                    <input type="submit" id="submitBtn" value="SUBMIT" />
                </form>
            </main>
        </div>
    )
};

export default Contact;