import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/corte2.jpg'
import IMG2 from '../../assets/corte3.jpg'
import IMG3 from '../../assets/corte4.jpg'
import IMG4 from '../../assets/corte5.jpg'
import IMG5 from '../../assets/corte6.jpg'
import IMG6 from '../../assets/corte8.jpg'

const Portfolio = () => {
    return (
        <section>
            <h5>Nossos Trabalhos Recentes</h5>
            <h2>Trabalhos</h2>

            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>Americano</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
                        <a href="https://youtu.be/InNlaxPi8Xg" className='btn btn-primary' target='_blank'>Live Youtube</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>Zuca</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
                        <a href="https://youtu.be/InNlaxPi8Xg" className='btn btn-primary' target='_blank'>Live Youtube</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>Sul Africano</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
                        <a href="https://youtu.be/InNlaxPi8Xg" className='btn btn-primary' target='_blank'>Live Youtube</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt="" />
                    </div>
                    <h3>Angolano</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
                        <a href="https://youtu.be/InNlaxPi8Xg" className='btn btn-primary' target='_blank'>Live Youtube</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG5} alt="" />
                    </div>
                    <h3>Ingles</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
                        <a href="https://youtu.be/InNlaxPi8Xg" className='btn btn-primary' target='_blank'>Live Youtube</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG6} alt="" />
                    </div>
                    <h3>Frances</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
                        <a href="https://youtu.be/InNlaxPi8Xg" className='btn btn-primary' target='_blank'>Live Youtube</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio
