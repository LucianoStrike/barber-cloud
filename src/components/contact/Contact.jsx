import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        {/*ESTES SÃO OS DADOS DA MINHA API : idserviço , id template, id do perfil */}
        emailjs.sendForm('service_55zlh6s', 'template_mkyg7kd', form.current, 'amFjXLhtoauEjxdBy')

        e.target.reset()
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
    return (
        <section id='contact'>
            <h5>Fique Atualizado</h5>
            <h2>Contacta-nos</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>lucuanostrike@gmail.com</h5>
                        <a href="mailto:lucuanostrike@gmail.com" target="_blank">Enviar uma Mensagem</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>Barber Cloud</h5>
                        <a href="https://m.me/" target="_blank">Enviar uma Mensagem</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>Whatsapp</h4>
                        <h5>+244 946711325</h5>
                        <a href="https://api.whatsapp.com/send?phone+244946711325" target="_blank">Enviar uma Mensagem</a>
                    </article>
                </div>
                {/*fim das opcoes de contacto */}
                
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Seu nome completo' required />
                    <input type="email" name='email' placeholder='Seu email' required />
                    <textarea name="message" rows="7" placeholder='Sua mensagem' required></textarea>
                    <button type='submit' className='btn btn-primary'>Enviar Mensagem</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
