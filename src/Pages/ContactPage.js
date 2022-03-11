import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact'} span={'Contact'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2783.7349121865595!2d4.8445841059758115!3d45.75646011280815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6154a4e149ad154b!2zNDXCsDQ1JzI0LjQiTiA0wrA1MCczNy41IkU!5e0!3m2!1sfr!2sfr!4v1646929305288!5m2!1sfr!2sfr" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+33 771219079'} title={'Téléphone'}/>
                    <ContactItem icon={email} text1={'guichardanthony@live.fr'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Lyon'} text2={'3ème arrondissement'} title={'Adresse'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
