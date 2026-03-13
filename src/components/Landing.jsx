import React from "react";
import vomarlene1 from "../assets/vo-marlene-garden.png";
import flower2 from "../assets/flower2.png";
import flower12 from "../assets/flower12.jpg";
import flower14 from "../assets/flower14.png";
import landing__border from "../assets/landing__border.png";

const Landing = ({ openModal }) => {
  return (
    <div>
      <section id="landing">
        <p className="landing__title">Uma Celebração Especial</p>
        <div className="landing__img--wrapper">
          <img className="landing__img" src={vomarlene1} alt="" />
          <img src={landing__border} alt="" className="landing__img--border" />
        </div>
        <h1 className="landing__name">
          Maria Marlene
          <span className="landing__name--ornament"> da Silva Queiroz</span>
        </h1>
        <div className="landing__number">90</div>
        <div className="landing__anos">anos</div>
        <div className="landing__divider"></div>
        <p className="landing__subtitle">Venha celebrar conosco</p>
        <p className="landing__date">13 de Junho de 2026</p>
        <div className="flower__container">
          <img src={flower12} alt="" className="flower flower__bottom-left" />
          {/* <img src={flower2} alt="" className="flower flower__top-right" /> */}
          <img src={flower14} alt="" className="flower flower__left" />
          <img src={flower14} alt="" className="flower flower__right" />
        </div>
        <button className="landing__rsvp-btn" onClick={openModal}>
          Confirmar Presença
        </button>
      </section>
    </div>
  );
};

export default Landing;
