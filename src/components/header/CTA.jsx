import React from 'react'
/*
import CV from '../../assets/cv.pdf'

const CTA = () => {
    return (
        <div>
            <a href={CV} download>Download CV</a>
            <a href="#contact" >Fale Conosco</a>

        </div>
    )
}
*/
const CTA = () => {
    return (
        <div className="cta">
            <a href="#contact" className="btn"> Agendar </a>
            <a href="#contact" className="btn btn-primary"> Fale Conosco </a>

        </div>
    )
}

export default CTA
