import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container" >
                <h5>Bem Vindo</h5>
                <h1>Barber Cloud</h1>
                <h5 className="text-light">Faça a sua reserva Online</h5>
                <CTA />
                <HeaderSocials />

                <div >
                    <img src={ME} alt="" className="me" ></img>
                    <a href="#contact" className='scroll__down'>--></a>
                </div>
            </div>
        </header>
    )
}

export default Header
