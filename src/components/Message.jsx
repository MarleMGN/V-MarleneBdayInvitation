import React from "react";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import marlene_soju from "../assets/IMG_7940.jpeg"
import gallery4 from "../assets/gallery4.JPG";
import gallery5 from "../assets/gallery5.jpg";
import flower23 from "../assets/flower_23_transparent.png";
import gold_flower from "../assets/gold_flower_transparent.png"

const Message = () => {
  return (
    <div>
      <section className="message">
        <div className="section__inner">
          <span className="section__label">Uma vida bem vivida</span>
          <h2 className="section__title">
            Noventa anos de amor, histórias e graça
          </h2>
          <div className="section__divider"></div>
          <p className="section__text">
            Com muita alegria em nossos corações, convidamos você para celebrar
            um momento muito especial em nossa família. Nossa querida Marlene
            está completando 90 anos de vida — uma vida cheia de histórias,
            amor, sabedoria e memórias que ajudaram a construir quem somos hoje.
            Ao longo de todos esses anos, ela foi o coração da nossa familia,
            sempre reunindo todos com carinho, generosidade e um sorriso
            acolhedor. Nada nos deixaria mais felizes do que celebrar esta data
            tão especial ao lado de pessoas queridas que fizeram parte da sua
            caminhada. Será um dia para recordar histórias, compartilhar
            momentos e celebrar uma vida tão bonita e significativa.
          </p>
          <blockquote className="message__quote">
            "A idade não diminui o encanto de uma vida bem vivida — ela apenas
            revela a profundidade de quem realmente somos."
          </blockquote>
        </div>
        <div className="divider"></div>
        <div className="gallery">
          <div className="gallery__item gallery__item--tall">
            <img src={gallery1} alt="" />
          </div>
          <div className="gallery__item gallery__item--face">
            <img
              src={gallery2}
              alt=""
            />
          </div>
          <div className="gallery__item gallery__item--face">
            <img
              src={marlene_soju}
              alt=""
            />
          </div>
          <div className="gallery__item gallery__item--tall">
            <img src={gallery4} alt="" />
          </div>
          <div className="gallery__item gallery__item--face">
            <img src={gallery5} alt="" />
          </div>
        </div>
        <div className="divider"></div>
        <div className="flower__container-msg">
          <img src={flower23} alt="" className="flower flower__right--msg" />
          <img src={gold_flower} alt="" className="flower gold__flower--left" />
          <img src={gold_flower} alt="" className="flower gold__flower--right" />
        </div>
      </section>
    </div>
  );
};

export default Message;
