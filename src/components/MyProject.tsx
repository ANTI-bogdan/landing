import "../styles/project.scss"
import project from "../images/project.png"

export const MyProject = () => (
  <section className="main__myProject project" id="project">
    <p className="project__title">My Projects</p>
    <p className="project__text">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.</p>
    <ul className="project__sideBar">
      <li className="project__sideItem"><a href="#" className="project__links">All</a></li>
      <li className="project__sideItem project__sideItem--active"><a href="#" className="project__links">UI UX</a></li>
      <li className="project__sideItem"><a href="#" className="project__links">Website Design</a></li>
      <li className="project__sideItem"><a href="#" className="project__links">App Design</a></li>
      <li className="project__sideItem"><a href="#" className="project__links">Graphic Design</a> </li>
    </ul>
    <div className="project__fotos">
      <div className="project__foto">
        <img src={project} alt="" />
        <p className="project__technologies">UI UX</p>
        <p className="project__name">AirCalling Landing Page Design </p>
      </div>
      <div className="project__foto">
        <img src={project} alt="" />
        <p className="project__technologies">UI UX</p>
        <p className="project__name">AirCalling Landing Page Design </p>
      </div>
      <div className="project__foto">
        <img src={project} alt="" />
        <p className="project__technologies">UI UX</p>
        <p className="project__name">AirCalling Landing Page Design </p>
      </div>
    </div>
  </section>
)