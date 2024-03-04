import React from 'react'
import { About,Footer, Header,Skills, Testimonial,Work } from './Container'
import Navbar from './Components/Navbar/Navbar'
import './App.scss'

const App =() =>{
    return(
        <div className='app'>
             <Navbar/>
            <Header/>
            <Work/>
            <Skills/>
            <Footer/>
            <Testimonial/>
            <About/>
            
        </div>
    )
}

export default App