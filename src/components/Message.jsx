import React from "react";

const Message = () => {
  return (
    <div>
      <section class="message">
        <div class="section__inner">
          <span class="section__label">Uma vida bem vivida</span>
          <h2 class="section__title">
            Noventa anos de amor, histórias e graça 
          </h2>
          <div class="section__divider"></div>
          <p class="section__text">
            Com imenso carinho, convidamos você a se juntar a nós para celebrar
            os 90 anos de uma mulher extraordinária. Uma vida marcada pela
            dedicação à família, pela força silenciosa e pelo amor que
            transborda em cada momento. Será uma tarde de muita alegria,
            memórias e gratidão.
          </p>
          <blockquote class="message__quote">
            "A idade não diminui o encanto de uma vida bem vivida — ela apenas
            revela a profundidade de quem realmente somos."
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Message;
