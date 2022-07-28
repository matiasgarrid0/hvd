import React from 'react'
import './Nav.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { useScrollPosition } from '../../CustomHooks/useScrollPosition'

export const Nav = () => {
    const scrollPosition = useScrollPosition();
  return (
    <div className={scrollPosition > 10 ? 'nav-bar-complete-scroll'  : 'nav-bar-complete'}>
        <div className='container-nav'>
            <div className='container-elements-nav'>
                <img className={scrollPosition > 10 ? 'logo-nav-scroll' : 'logo-nav'} src={logo} alt="horvindul" />
                <div className='container-titles-nav'>
                    <Link className="hover-underline-animation" to='/'>Nosotros</Link>
                    <Link className="hover-underline-animation" to={'/'}>Productos</Link>
                    <Link className="hover-underline-animation" to={'/'}>Contacto</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
