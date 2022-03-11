import React from 'react';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Bonjour, je suis 
                    <span> Anthony Guichard.</span>
                </h1>
                <p className="h-sub-text">
                    Bienvenue sur mon portfolio ! <br />
                    Développeur junior spécialisé en Javascript, je vous invite à consulter mon profil ainsi que mes projets et le cas échéant, me contacter. <br />
                    Bonne visite !
                </p>
                <div className="icons">
                    <a href="https://linkedin.com/in/anthony-guichard" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon lk" />
                    </a>
                    <a href="https://github.com/Thanystos" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
