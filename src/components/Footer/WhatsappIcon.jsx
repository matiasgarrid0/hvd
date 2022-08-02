import React from 'react'
import whatsapp from '../../images/whatsapp.png'
import './WhatsappIcon.css'

export const WhatsappIcon = () => {

    return (
        <div className='whatsappIcon'>
            <a href='https://api.whatsapp.com/send?phone=261' target="blank">
                <img src={whatsapp} alt="whatsap" />
            </a>
        </div>
    )
}