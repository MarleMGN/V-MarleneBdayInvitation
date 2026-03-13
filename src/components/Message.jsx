import React from "react";
import gallery1 from "../assets/gallery1.jpg"
import gallery2 from "../assets/gallery2.jpg"
import gallery3 from "../assets/gallery3.jpg"
import gallery4 from "../assets/gallery4.JPG"
import gallery5 from "../assets/gallery5.jpg"
import flower13 from "../assets/flower13.png"
import flower15 from "../assets/flower15.png"
import flower23 from "../assets/flower_23_transparent.png"

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
            Com muita alegria em nossos corações, convidamos você para celebrar um momento muito especial
            em nossa família. Nossa querida Marlene está completando 90 anos de vida — uma vida cheia de 
            histórias, amor, sabedoria e memórias que ajudaram a construir quem somos hoje. Ao longo de todos esses
            anos, ela foi o coração da nossa familia, sempre reunindo todos com carinho, generosidade e um sorriso
            acolhedor. Nada nos deixaria mais felizes do que celebrar esta data tão especial ao lado de pessoas queridas
            que fizeram parte da sua caminhada. Será um dia para recordar histórias, compartilhar momentos e celebrar 
            uma vida tão bonita e significativa.
          </p>
          <blockquote class="message__quote">
            "A idade não diminui o encanto de uma vida bem vivida — ela apenas
            revela a profundidade de quem realmente somos."
          </blockquote>
        </div>
        <div className="gallery">
          <div className="gallery__item gallery__item--tall">
            <img src={gallery1} alt="" />
          </div>
          <div className="gallery__item">
            <img src={gallery2} alt="" style={{ objectPosition: "0px -150px" }} />
          </div>
          <div className="gallery__item">
            <img src={gallery3} alt="" style={{ objectPosition: "0px -200px" }} />
          </div>
          <div className="gallery__item gallery__item--tall">
            <img src={gallery4} alt="" />
          </div>
          <div className="gallery__item">
            <img src={gallery5} alt="" />
          </div>
        </div>
        <div className="flower__container-msg">
          <img src={flower13} alt="" className="flower flower__bottom-left" style={{ height: "300px", width: "300px" }} />
          <img src={flower15} alt="" className="flower flower__bottom-right" style={{ height: "300px", width: "300px" }} />
          <img src={flower23} alt="" className="flower flower__right--msg" />
          <img src="" alt="" className="flower flower__left" />
        </div>
      </section>
    </div>
  );
};

export default Message;
