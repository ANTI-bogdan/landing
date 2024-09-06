import "../styles/testimonials.scss"
import "../styles/card.scss"
import slider from "../images/slider.svg"
import foto from "../images/user.png"


export const Tesimonials = () => (
  <section className="main__tesimonials tesimonials" id="testimonials">
    <p className="tesimonials__title">Testimonials</p>
    <p className="tesimonials__text">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.</p>
    <div className="tesimonials__card card">
      <img src={foto} alt="foto" className="card__foto" />
      <div className="card__texts">

        <p className="card__text">
          <span className="card__quotes">“</span>
          Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.Nunc gravida egestas suspendisse
          volutpat suscipit suspendisse faucibus amet convallis.
          <span className="card__quotes">“</span>
        </p>

        <p className="card__name">Name</p>
        <p className="card__position">CEO</p>
      </div>

    </div>
    <img src={slider} alt="slider" className="tesimonials__slider" />
  </section>
)