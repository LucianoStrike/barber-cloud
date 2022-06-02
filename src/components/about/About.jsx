import React from 'react'
import './about.css'
import ME from '../../assets/corte1.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'


const About = () => {
    return (
        <section id='about'>
            <h5>Agende Agora</h5>
            <h2>Sobre Nós</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"></img>
                    </div>
                </div>

                <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <FaAward className='about__icon' />
                        <h5>Experiência</h5>
                        <small>+5 Anos de Trabalho</small>
                    </article>

                    <article className='about__card'>
                        <FaUsers className='about__icon'/>
                        <h5>Nossos Clientes</h5>
                        <small>+10000 em todo Territorio</small>
                    </article>

                    <article className='about__card'>
                        <AiFillFolderOpen className='about__icon'/>
                        <h5>Projetos</h5>
                        <small>+80 Completados.</small>
                    </article>
                </div>

                <p>
                    Nós temos a melhor qualidade reservada para o nosso cliente, estamos focado
                    na sua belesa e planeamos ser os melhores na área de salão de beleza e barbearia.
                    Entre em contacto conosco vamos divulgar a sua empresa a fazer-lá desenvolver
                    mesmo que não tenhas uma formação inicial.
                </p>

                <a href="#contact" className='btn btn-primary'>Fale Conosco</a>
            </div>
            </div>

            
        </section>
    )
}

export default About
