import React from 'react'

import {About, Footer, Header, Skills, Testimonial, Work} from './container';
import {Navbar} from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">

    <Navbar />
    <Header />
    <About />
    <Footer />
    <Work />
    <Skills />
    <Testimonial />
    </div>
  );
}

export default App;