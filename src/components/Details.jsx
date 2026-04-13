import React from "react";

const Details = () => {
  return (
    <section id="details">
      <div className="section__inner">
        <span className="section__label" style={{ color: "var(--gold)" }}>
          Detalhes do Evento
        </span>
        <h2 className="section__title">O Encontro</h2>
        <div className="section__divider"></div>
        <div className="details__grid">
          <div className="detail__item">
            <span className="detail__label">Data</span>
            <div className="detail__value">13 de Junho, 2026</div>
          </div>
          <div className="detail__item">
            <span className="detail__label">Abertura com missa</span>
            <div className="detail__value">
              Capela Imaculada Conceição - 11:00 hrs
            </div>
            <div className="detail__sub">
              Av. Ana Jacinta, 301 - Vila Santa Maria de Nazareth, Anápolis -
              GO, 75113-355
            </div>
          </div>
          <div className="detail__item">
            <span className="detail__label">Celebração</span>
            <div className="detail__value">
              Chácara do Italiano - A partir das 12:30 hrs
            </div>
            <div className="detail__sub">
              BR-414 - Jardin Promissão, Anápolis - GO, 75073-815
            </div>
          </div>
          <div className="detail__item">
            <span className="detail__label">Nota Importante</span>
            <div className="detail__value">
              Apresentar convite individual no local do evento
            </div>
            <div className="detail__sub">Traje: esporte fino</div>
          </div>
        </div>
        <div className="map__container">
          <iframe
            title="missa"
            src="https://www.google.com/maps?q=Av.+Ana+Jacinta,+301+Vila+Santa+Maria+de+Nazareth+Anápolis+GO&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
            <span>Capela Imaculada Conceição</span>
          <iframe
            title="celebracao"
            src="https://www.google.com/maps?q=Chácara+do+Italiano+BR-414+Jardim+Promissão+Anápolis+GO&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
          <span>Chácara do Italiano</span>
        </div>
      </div>
    </section>
  );
};

export default Details;
