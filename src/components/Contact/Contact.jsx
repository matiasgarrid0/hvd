import React from 'react';
import { ContactForm } from './ContactForm';
import { MapContact } from './MapContact';
import './Contact.css';

export const Contact = () => {
    return (
        <div className='contact'>
            <div className="banner-bg-contact">
                <div className="banner-contact-bgblack">
                    <p className='p-title-contact'>Contacto</p>
                </div>
            </div>
            <div className="contact-elements">
                <div className='container-elemnts-contact'>
                    <div className="contact-map">
                        <MapContact />
                    </div>
                    <div className="contact-form-container">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
