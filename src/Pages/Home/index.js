import React from 'react'

import Header from './Header';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';


export default function Home() {
	return (
    <div>
      <Nav />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
