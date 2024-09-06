import React from "react"
import "../styles/home.scss"
import me from "../images/image-1.png"
import facebookLight from "../images/social/lightTheme/Facebook_Negative.png"
import instagramLight from "../images/social/lightTheme/Instagram_Negative.png"
import linkedInlight from "../images/social/lightTheme/LinkedIn_Negative.png"
import twitterlight from "../images/social/lightTheme/Twitter_Negative.png"
import facebookDark from "../images/social/darkTheme/Facebook_Negative.png"
import instagramDark from "../images/social/darkTheme/Instagram_Negative.png"
import linkedInDark from "../images/social/darkTheme/LinkedIn_Negative.png"
import twitterDark from "../images/social/darkTheme/Twitter_Negative.png"

type Props = {
  isDark: boolean;
};

export const Home : React.FC<Props>= ({ isDark }) => (
  <section className="main__home home" id="home">
    <div className="home__section--left">
      <p className="home__text--hi">Hi I am</p>
      <p className="home__text--name">Muhammad Bin Jameel</p>
      <h1 className="home__title--UI">UI & UX</h1>
      <h1 className="home__title--designer">Designer</h1>

      <p className="home__text">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus</p>
      <button className="home__button">Hire Me</button>
    </div>
    <div className="home__section--right">
      <img src={me} alt="me" className="home__image" />
      <div className="home__icons">
        <a href="https://uk-ua.facebook.com/" className="home__icon">
          <img src={isDark ? facebookDark : facebookLight} alt="facebook" />
        </a>
        <a href="https://twitter.com/x/migrate?tok=7b2265223a222f3f6c616e673d7275222c2274223a313732353631373538387d452270ed05566593e91131d31ffdbe37" className="home__icon">
          <img src={isDark ? twitterDark : twitterlight} alt="twitter" />
        </a>
        <a href="https://www.instagram.com/" className="home__icon">
          <img src={isDark ?  instagramDark : instagramLight} alt="instagram" />
        </a>
        <a href="https://www.linkedin.com/home/?originalSubdomain=ua" className="home__icon">
          <img src={isDark ? linkedInDark : linkedInlight} alt="linkedIn" />
        </a>
      </div>
    </div>
  </section>

)