import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavBar, Logo, About, Service, Work, Partner, Contact, Footer } from './components/index';

const App = () => {
  useEffect( () => {
    AOS.init( { duration: 2000 } )
  }, [] )

  return (
    <div>
      <NavBar />
      <Logo />
      <About />
      <Service />
      <Work />
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;