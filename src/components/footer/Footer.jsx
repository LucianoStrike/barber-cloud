import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Barber Cloud</a>

            <ul className='permalinks'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#experience">Experiências</a></li>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebookF /></a>
                <a href="https://instagram.com"><FiInstagram /></a>
                <a href="https://twitter.com"><IoLogoTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Gambole Luciano. Todos direitos reservados</small>
            </div>
        </footer>
    )
}

export default Footer
