import React, { useState, useEffects } from 'react'
import {motion} from 'framer-motion'


import './Footer.scss';
import {urlFor, client} from '../../client';
import {AppWrap, MotionWrap} from '../../wrapper';

const Footer = () => {
  return (
    <>
    <h2 className="head-text">asdasd </h2>

    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt="email address" />
          <a href="mailto:matthewpesci926@gmail.com" className="p-text">matthewpesci926@gmail.com</a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="mobile" />
          <a href="tel: (313) 258-4712" className="p-text">(313) 258-4712</a>
      </div>
    </div>

    <div className="app__footer-form app__flex">
      <div className="app__flex">
        <input className="p-text" type="text" placeholder="Matthew Pesci" name="name" value={name} onChange={handleChangeInput}/>
      </div>
      <div className="app__flex">
        <input className="p-text" type="text" placeholder="matthewpesci926@gmail.com" name="email" value={email} onChange={handleChangeInput}/>
      </div>
      <div>
        <textarea
        className="p-text"
        placeholder="hello"
        value={message}
        name={message}
        onChange={message}
        />
      </div>


    </div>
    </>
  )
}



export default AppWrap(
  MotionWrapper(Footer, 'app__footer')
)