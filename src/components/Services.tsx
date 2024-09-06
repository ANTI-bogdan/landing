import "../styles/services.scss"
import UI from "../images/services/ux.png"
import appServises from "../images/services/app.png"
import webDesign from "../images/services/web.png"
import graficDesign from "../images/services/graphic.png"

export const Services = () => (
  <section className="main__services services" id="services">
    <p className="services__title">Services</p>
    <p className="services__text">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.</p>

    <div className="services__cards">

      <div className="services__card">
        <img src={UI} alt="UI/UX" />
        <h3 className="services__card--titlte">UI/UX</h3>
        <p className="services__card--text">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh</p>
      </div>
      <div className="services__card">
        <img src={webDesign} alt="web-design" />
        <h3 className="services__card--titlte">Web Design </h3>
        <p className="services__card--text">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh</p>
      </div>
      <div className="services__card">
        <img src={appServises} alt="app-design" />
        <h3 className="services__card--titlte">App Design</h3>
        <p className="services__card--text">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh</p>
      </div>
      <div className="services__card">
        <img src={graficDesign} alt="grafic-design" />
        <h3 className="services__card--titlte">Graphic Design </h3>
        <p className="services__card--text">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh</p>
      </div>
    </div>
  </section>
)