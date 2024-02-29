import React from 'react';
import {About,Footer,Header,Skills,Testimonial,Work} from './Container'
import { Navbar } from './Components/Navbar';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Footer/>
    </div>
  )
};

export default App;