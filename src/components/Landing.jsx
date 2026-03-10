import React from 'react'
import vomarlene1 from '../assets/vomarlene&tiomarcos.jpg'

const Landing = ({ openModal }) => {
  return (
    <div>
        <section id="landing">
            <img className="landing__img" src={vomarlene1} alt="" />
            <p className="landing__title">Uma Celebração Especial</p>
            <div className="landing__number">90</div>
            <div className="landing__anos">anos</div>
            <div className="landing__divider"></div>
            <h1 className="landing__name">Donna Marlene<span className="landing__name--ornament"> De Queiroz</span></h1>
            <p className="landing__subtitle">Venha celebrar conosco</p>
            <p className="landing__date">Junho 13 de 2026</p>
            <button className="landing__rsvp-btn" onClick={openModal}>Confirmar Presença</button>
        </section>
    </div>
  )
}

export default Landing