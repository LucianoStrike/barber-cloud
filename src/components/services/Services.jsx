import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const services = () => {
    return (
        <section id='services'>
            <h5>Tudo que oferecemos</h5>
            <h2>Serviços</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Extravagante</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                    </ul>
                </article>
                {/*FIM DE CORTES EXTRAVAGANTES */}

                <article className="service">
                    <div className="service__head">
                        <h3>Cortes Regrados</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                    </ul>
                </article>
                {/*FIM DE CORTES REGRADOS */}

                <article className="service">
                    <div className="service__head">
                        <h3>Cabelinho</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Este corte extravagante vai animar-te muito.</p>
                        </li>
                    </ul>
                </article>
                {/*FIM DE CORTES angolanos */}
            </div>

        </section>
    )
} 

export default services
