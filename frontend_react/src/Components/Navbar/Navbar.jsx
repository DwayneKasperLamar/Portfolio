import React, { useState } from 'react'
import { HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from "framer-motion";

import './Navbar.scss'
import { images } from '../../Constants'


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
      <nav className="app__navbar">
        <div className="app__navbar-log">
          <img src={images.logo} alt="logo" />
        </div>

         <ul className="app__navbar-links">
          {['home', 'about', 'contact', 'work', 'skills'].map((item)=> (
            <li className="app__flex p-text" key={`link-$(item)`}>
              <div />
              <a href={`#$(item)`}>{item}</a>
            </li>
          ))}
        </ul> 
          <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true)} />

            {toggle && (
             <motion.div
              whileInView={{x : [300,0]}}
              transition = {{ duration: 0.85, ease:'easeOut'
            }}
             >
             <HiX onClick={() => setToggle(false)} />
                  {['home', 'about', 'contact', 'work', 'skills'].map((item)=> (
                  <li key={item}>
                    <a href={`#$(item)`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                ))}
             </motion.div>
            )}
          </div>
      </nav>
  )
}

export default Navbar