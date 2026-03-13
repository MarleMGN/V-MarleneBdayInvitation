import React from 'react'
import flower21 from '../assets/flower21.jpg'

const Closing = ({ openModal }) => {
  return (
    <div>
        <section className="closing">
    <div className="section__inner">
      <div className="closing__ornament">✦</div>
      <span className="section__label">Até lá</span>
      <h2 className="section__title">Esperamos você com muito carinho</h2>
      <div className="section__divider"></div>
      <p className="section__text">
        Sua presença tornará essa celebração ainda mais especial.
        Por favor, confirme sua presença até <strong>31 de maio de 2025</strong>.
      </p>
      <button className="landing__rsvp-btn" onClick={openModal}>Confirmar Presença</button>
    </div>
  </section>
    </div>
  )
}

export default Closing