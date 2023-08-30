import React from 'react'
import Data from './ImgData';
import Card from './Card';

const Service = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Our Services</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto px-0'>
            <div className='row gy-4'>
              {
                Data.map((val,ind) => {
                  return <Card 
                    key={ind}
                    image={val.image}
                    title={val.title}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
