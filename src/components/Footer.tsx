import { Nav } from "./Nav"
import '../styles/nav.scss'
import '../styles/footer.scss'

import facebookLight from "../images/social/lightTheme/Facebook_Negative.png"
import instagramLight from "../images/social/lightTheme/Instagram_Negative.png"
import linkedInlight from "../images/social/lightTheme/LinkedIn_Negative.png"
import twitterlight from "../images/social/lightTheme/Twitter_Negative.png"
import facebookDark from "../images/social/darkTheme/Facebook_Negative.png"
import instagramDark from "../images/social/darkTheme/Instagram_Negative.png"
import linkedInDark from "../images/social/darkTheme/LinkedIn_Negative.png"
import twitterDark from "../images/social/darkTheme/Twitter_Negative.png"
import logo from "../images/Logo.svg"
import logoWhite from '../images/Logo-white.svg'


type Props = {
  isDark: boolean;
};

export const Footer : React.FC<Props>= ({ isDark }) => (
  <footer className="footer"  style={isDark ? { backgroundColor: '#000'} : { backgroundColor: '#fff'}}>
    <div className="footer__main">
      <img src={isDark ? logoWhite : logo} alt="logo" className="footer__logo" />
      <nav className="footer__nav nav">
        <Nav />
      </nav>
      <div className="footer__icons">
        <a href="https://uk-ua.facebook.com/" className="footer__icon">
          <img src={isDark ? facebookDark : facebookLight} alt="facebook" />
        </a>
        <a href="https://twitter.com/x/migrate?tok=7b2265223a222f3f6c616e673d7275222c2274223a313732353631373538387d452270ed05566593e91131d31ffdbe37" className="footer__icon">
          <img src={isDark ? twitterDark : twitterlight} alt="twitter" />
        </a>
        <a href="https://www.instagram.com/" className="footer__icon">
          <img src={isDark ? instagramDark : instagramLight} alt="instagram" />
        </a>
        <a href="https://www.linkedin.com/home/?originalSubdomain=ua" className="footer__icon">
          <img src={isDark ? linkedInDark : linkedInlight} alt="linkedIn" />
        </a>
      </div>
    </div>


    <div className="footer__bottom" style={isDark ? { backgroundColor: '#000'} : { backgroundColor: '#fff'}}>
      © 2023 <span className="footer__muhamed">Muhammad</span> All Rights Reserved , Inc.
    </div>
  </footer>
)
