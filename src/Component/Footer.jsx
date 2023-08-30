import React from 'react'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle";
import '../App.css';
import { FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
      <div className='container-fluid bg-black text-white' id='footer_page'>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto d-flex justify-content-between contant_detail'>
            <div className='first text-center'>
              <h1 className="pb-2">About</h1>
              <p>I am Full Stack web developer python with Django</p>
              <p>I am completed Bachelor's in 2022</p>
              <p>I am learned online plateform with Ineuron</p>
              <div className='icon_logo'>
                <span className='icon'><FaTwitter /></span>
                <span className='icon'><FaFacebookF /></span>
                <span className='icon'><FaGithub /></span>
              </div>
            </div>
            <div className='second text-center'>
              <h1 className='pb-2'>Contact info</h1>
              <div>
                <p>Address:Your address,</p>
                <p>Your demo address.</p>
                <p>Phone:1234567890</p>
                <p>email:info@gmail.com</p>
              </div>
            </div>
            <div className='third text-center'>
              <h1 className='pb-2'>Important Link</h1>
              <div>
               <p>services link</p> 
                <p>search Domain</p>
                <p>My Account</p>
                <p>Contact us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
