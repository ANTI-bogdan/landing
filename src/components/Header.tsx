import React from "react"
import logo from '../images/Logo.svg'
import logoWhite from '../images/Logo-white.svg'

import { Nav } from "./Nav"
import '../styles/header.scss'
import '../styles/nav.scss'

type Props = {
  isDark: boolean;
};

export const Header: React.FC<Props> = ({ isDark }) => (
  <header className="app-header header">
    <a href="#." className="header__logo">
      <img src={isDark ? logoWhite : logo} alt="logo" />
    </a>
    <nav className="header__nav nav">
      <Nav />
    </nav>
    <a href="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" className="header__download" download={true}>
      <p className="header__download--text">Download CV</p>
    </a>
  </header>
)
