import React from 'react';

import '../styles/pages/landing.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


import Banner from '../images/banner_arch.jpg'


function Landing(){
  return(
    <div id="page-landing">
        <Navbar/>
          <div className="banner">
            <img src={Banner} alt="banner"/>
          </div>
        <Footer/>
    </div>
    );
}

export default Landing;