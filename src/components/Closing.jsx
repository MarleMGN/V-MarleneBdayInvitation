import React from 'react'
import flower13 from "../assets/flower13.png"
import flower15 from "../assets/flower15.png"

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
      <div className="flower__container">
                <img src={flower13} alt="" className="flower flower__bottom-left" style={{ height: "300px", width: "300px" }} />
                <img src={flower15} alt="" className="flower flower__bottom-right" style={{ height: "300px", width: "300px" }} />
              </div>
    </div>
  </section>
    </div>
  )
}

export default Closing