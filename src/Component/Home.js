import React from 'react'
import imgage1 from './img/study.jpeg';
import Common from './Common';

const Home = () => {
  return (
    <>
    <Common 
    header_name="Grow Your business with"
    btn_link="/service"
    btn_name="Get Started"
    images={imgage1}
    para = "we are the team of the talented developer makeing websites"
    />
    </>
  )
}

export default Home
