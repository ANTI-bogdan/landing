import me from "../images/image-2.png"
import UI from "../images/ranges/ux.png"
import web from "../images/ranges/website.png"
import app from "../images/ranges/app.png"
import graf from "../images/ranges/graphic.png"

import "../styles/aboutMe.scss"

export const AboutMe = () => (
  <section className="main__aboutMe aboutMe" id="about">
    <img src={me} alt="me" className="aboutMe__image" />
    <div className="aboutMe__section">
      <p className="aboutMe__title">About Me </p>
      <p className="aboutMe__text">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus</p>

      <h3 className="aboutMe__skill">UX</h3>
      <img src={UI} alt="master" />
      <h3 className="aboutMe__skill">Website Design</h3>
      <img src={web} alt="profi" />

      <h3 className="aboutMe__skill">App Design</h3>
      <img src={app} alt="pre-master" />

      <h3 className="aboutMe__skill">Graphic Design</h3>
      <img src={graf} alt="pre-profi" />

    </div>
  </section>
)