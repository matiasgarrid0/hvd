import React from 'react';
import './Footer.css'
import logo from '../../images/logo.png'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoLocation } from "react-icons/go";

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <img src={logo} alt="footer-logo" />
                    <div className='footer-logo-networks'>
                        <p>Seguinos!</p>
                        <BsInstagram className='footer-icons' />
                        <BsFacebook className='footer-icons' />
                    </div>
                </div>
                <div className='footer-info-elements-phone'>
                    <div>
                        <BsFillTelephoneFill className='elements-icon' />
                        <span>(+54) 263 4462999</span>
                    </div>
                    <div>
                        <BsFillTelephoneFill className='elements-icon' />
                        <span>(+54) 4720-5603</span>
                    </div>
                </div>
                <div className='footer-info-elements-email'>
                    <div>
                        <MdOutlineMailOutline className='elements-icon' />
                        <span>info@encurtidoshorvindul.com.ar</span>
                    </div>
                </div>
                <div className='footer-info-elements-location'>
                    <div>
                        <GoLocation className='elements-icon' />
                        <span>Carril Chimba s/n - Palmira</span>
                    </div>
                    <div>
                        <GoLocation className='elements-icon' />
                        <span>San Martín - CP 5584</span>
                    </div>
                    <div>
                        <GoLocation className='elements-icon' />
                        <span>Mendoza - Argentina</span>
                    </div>
                </div>
            </div>
        </div >
    )
}
