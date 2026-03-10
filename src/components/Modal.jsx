import React, { useState } from "react";

const Modal = ({ closeModal, openModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [nome, setNome] = useState("");
  const [presenca, setPresenca] = useState("");

  function submitForm() {
    if (!nome.trim() || !presenca) {
      alert("Por favor, preencha seu nome e confirmação de presença.");
      return;
    }
    setSubmitted(true);
  }

  return (
    <div
      className={`modal__overlay ${openModal ? "open" : ""}`}
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <div className="modal">
        <button className="modal__close" onClick={closeModal}>
          ✕
        </button>

        {!submitted ? (
          <>
            <span className="modal__label">Confirmação de Presença</span>
            <h2 className="modal__title">Você vai?</h2>
            <p className="modal__subtitle">
              Confirme sua presença para a celebração
            </p>

            <div className="form__group">
              <label className="form__label">Nome completo</label>
              <input
                type="text"
                className="form__input"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="form__row">
              <div className="form__group">
                <label className="form__label">E-mail</label>
                <input
                  type="email"
                  className="form__input"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="form__group">
                <label className="form__label">Telefone</label>
                <input
                  type="tel"
                  className="form__input"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="form__row">
              <div className="form__group">
                <label className="form__label">Confirmação</label>
                <select
                  className="form__select"
                  value={presenca}
                  onChange={(e) => setPresenca(e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="sim">✓ Vou comparecer</option>
                  <option value="nao">✗ Não poderei ir</option>
                </select>
              </div>
              <div className="form__group">
                <label className="form__label">Número de convidados</label>
                <select className="form__select">
                  <option value="1">Apenas eu</option>
                  <option value="2">2 pessoas</option>
                  <option value="3">3 pessoas</option>
                  <option value="4">4 pessoas</option>
                  <option value="5+">5 ou mais</option>
                </select>
              </div>
            </div>

            <div className="form__group">
              <label className="form__label">
                Mensagem para a aniversariante (opcional)
              </label>
              <input
                type="text"
                className="form__input"
                placeholder="Uma mensagem carinhosa..."
              />
            </div>

            <button className="form__submit" onClick={submitForm}>
              Enviar Confirmação
            </button>
          </>
        ) : (
          <div className="form__success">
            <div style={{ fontSize: 40, marginBottom: 16 }}>✦</div>
            <h3>Obrigado!</h3>
            <p>
              Sua presença foi confirmada.<br />
              Estamos ansiosos para celebrar com você.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
