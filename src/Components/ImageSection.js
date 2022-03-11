import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <p className="about-text">
                Passionné d'informatique, je n'ai eu de cesse de m'intéresser, en m'autoformant, 
                au vaste monde de ce dernier. Polyvalent, je possède des connaissances des différentes étapes techniques de la création d’un site ou d’une application web ; 
                de la compréhension des besoins utilisateurs, au développement frontend et backend.<br />
                Mon domaine de prédilection est le Javascript.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Age</p>
                        <p>Nationalité</p>
                        <p>Langues Parlées</p>
                        <p>Adresse</p>
                    </div>
                    <div className="right-section">
                        <p>: 31</p>
                        <p>: Française</p>
                        <p>: Français, Anglais</p>
                        <p>: Alentours Lyon</p>
                    </div>
                </div>
                <form action='https://www.canva.com/design/DAE1rG1C8Sw/d86vcQ8-l3i742c5cRN6bw/view?utm_content=DAE1rG1C8Sw
                                &utm_campaign=designshare
                                &utm_medium=link
                                &utm_source=homepage_design_menu'
                      target='_blank'>
                    <button className="btn">Consulter mon Cv</button>
                </form>
            </div>
        </div>
    )
}

export default ImageSection;
