import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Quais Habilidades Possuímos</h5>
            <h2>As Experiências</h2>

            <div className="container experience__container">
                <div className="experience__visual">
                    <h3>Barbas</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>AMERICANA</h4>
                                <small className='text-light'>Profissional</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>BARBA ZUCA</h4>
                                <small className='text-light'>Profissional</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>BARBA INGLESA</h4>
                                <small className='text-light'>Intermédia</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>SUL AFRICANA</h4>
                                <small className='text-light'>Profissional</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>ANGOLANA</h4>
                                <small className='text-light'>Profissional</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* experiencia de cortes */}
                <div className="experience__cortes">
                    <h3>Cortes</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>CARECA</h4>
                                <small className='text-light'>Profissional</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>ESCOVINHA CHEIA</h4>
                                <small className='text-light'>Profissional</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>FRANCESA</h4>
                            <small className='text-light'>Intermédia</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>CRISTA</h4>
                                <small className='text-light'>Profissional</small>
                            </div>
                        </article>
                        
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>CORTE AMERICANO</h4>
                                <small className='text-light'>Profissional</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
