import React from "react";
import vomarlene3 from "../assets/vomarlene-garden-3.png";
import flower12 from "../assets/flower12.jpg";
import GoldParticles from "./GoldParticles";

const Landing = ({ openModal }) => {
  return (
    <div>
      <section id="landing">
        <GoldParticles />
        <p className="landing__title">Uma Celebração Especial</p>
        <h1 className="landing__name">
          Maria Marlene
          <span className="landing__name--ornament"> da Silva Queiroz</span>
        </h1>
        <img className="landing__img" src={vomarlene3} alt="" />
        <div className="divider"></div>
        <p className="landing__subtitle">Venha celebrar conosco</p>
        <p className="landing__date">13 de Junho de 2026</p>
        <div className="flower__container">
          <img src={flower12} alt="" className="flower flower__bottom-left" />
        </div>
        <div className="landing__anos-container">
          <p className="landing__anos-number">90</p>
          <p className="landing__anos">anos</p>
        </div>
        <button className="landing__rsvp-btn" onClick={openModal}>
          Confirmar Presença
        </button>
      </section>
    </div>
  );
};

export default Landing;
