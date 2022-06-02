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
                            <p>Alinhamos a barba..</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Remodelamos os Bígodes.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Tratamos da sua beleza.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Deixamos voçê escolher o corte.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Tudo a sua disposição.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Faça um corte Americano.</p>
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
                            <p>Corte Executivo.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Corte dos Ministros.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Cabelinho na Régua.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Podes escolher o seu corte favorito.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Cuidados do cliente.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Nossos cortes extravagantes vão animar-te muito.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>As melhores tecnologia para Barbeiros.</p>
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
                            <p>Os melhores produtos de tratamentos.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Francesa moderna.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Corte Doss.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Gringo Louco.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Cortes Sofisticados.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Tudo que voçê deseja.</p>
                        </li>
                    </ul>
                </article>
                {/*FIM DE CORTES angolanos */}
            </div>

        </section>
    )
} 

export default services
