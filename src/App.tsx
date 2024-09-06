import React, { useState } from 'react';
import { Header } from './components/Header';
import './styles/app.scss'
import { Home } from './components/Home';
import { AboutMe } from './components/AboutMe';
import { Services } from './components/Services';
import { MyProject } from './components/MyProject';
import { Tesimonials } from './components/Testimonials';
import { ContactsUs } from './components/ContacntsUs';
import { Footer } from './components/Footer';

export const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div className="app"
        style={isDark ? { color: '#fff',   backgroundColor: '#000'} : { color: '#000',    backgroundColor: '#fff'}}
      >
        <div
        className="app__theme"
        onClick={() => setIsDark(!isDark)}
        >
          {isDark ? 'Dark' : 'Light'}
        </div>
        < Header isDark={isDark} />
        <main className="main">
          <Home isDark={isDark} />
          <AboutMe />
          <Services />
          <MyProject />
          <Tesimonials  />
          <ContactsUs />
        </main>
      </div>
      <Footer isDark={isDark} />
    </>
  );
}

