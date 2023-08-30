import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
      <section id='header'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row height_row'>
                <div className='col-md-6 pt-lg-0 order-2 '>
                  <h1>{props.header_name} <strong className='brand-name'>Yadav Navin</strong></h1>
                  <p className='my-3' id='para'>
                    {props.para}
                  </p>
                  <div className='mt-3 btn-click'>
                    <NavLink to={props.btn_link} className='btn-get-started'>{props.btn_name}</NavLink>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 align-item-center'>
                  <img src={props.images} alt='img' />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </>
  )
}

export default Common
