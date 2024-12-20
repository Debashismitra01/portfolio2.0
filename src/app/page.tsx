import React from 'react';
import './page.module.css';
import AboutMe from './components/about/about';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Contact from './components/contact/contact';
import Projects from './components/project/project';
import Footer from './components/footer/footer';

function App(){
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <AboutMe />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
