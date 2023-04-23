import React from 'react';
import { NavBar, Logo, About, Service, Work, Partner, Contact, Footer } from './components/index';

const App = () => {
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