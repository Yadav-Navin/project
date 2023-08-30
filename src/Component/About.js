import React from 'react'
import '../App.css';
import Common from './Common';
import Footer from './Footer';  
import about_image from '../Component/img/about-us-page.webp';

const About = () => {
  return (
    <>
      <div className='about_section'>
        <Common 
        header_name="Welcome To The About Page with"
        btn_link="/contact"
        btn_name="Contact Us"
        images={about_image}
        para = "The future belongs to those who believe in the beauty of their dreams"
        />
        <Footer />
      </div>
    </>
  )
}

export default About





