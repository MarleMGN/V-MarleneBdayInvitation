import React from "react";
import flower13 from "../assets/flower13.png"
import flower15 from "../assets/flower15.png"


const Details = () => {
  return (
    <section id="details">
      <div className="section__inner">
        <span className="section__label" style={{ color: "var(--gold);" }}>
          Detalhes do Evento
        </span>
        <h2 className="section__title">O Encontro</h2>
        <div className="section__divider"></div>
        <div className="details__grid">
          <div className="detail__item">
            <span className="detail__label">Data</span>
            <div className="detail__value">13 de Junho, 2026</div>
            <div className="detail__sub">O dia exato será confirmado em breve</div>
          </div>
          <div className="detail__item">
            <span className="detail__label">Horário</span>
            <div className="detail__value">A partir das 13h</div>
            <div className="detail__sub">Tarde e noite de celebração</div>
          </div>
          <div className="detail__item">
            <span className="detail__label">Local</span>
            <div className="detail__value">A ser confirmado</div>
            <div className="detail__sub">Brasil — endereço completo em breve</div>
          </div>
          <div className="detail__item">
            <span className="detail__label">Traje</span>
            <div className="detail__value">Esporte fino</div>
            <div className="detail__sub">Elegante e confortável</div>
          </div>
        </div>
        <div className="map__placeholder">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <span>Mapa será adicionado em breve</span>
        </div>
      </div>
    </section>
  );
};

export default Details;
