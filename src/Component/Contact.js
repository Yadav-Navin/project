import React from 'react'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle";
import '../App.css';

const Contact = () => {
  return (
    <div className='contact_page'>
      <div className='container col-8 mx-auto'>
        <h1 className='text-center pb-3 pt-4'>Contact Us</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="validationCustom01" className="form-label">Full name</label>
            <input type="text" className="form-control" id="validationCustom01" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" required />
          </div>
          <div className="mb-3">
            <label htmlFor="validationCustom01" className="form-label">Contact</label>
            <input type="text" className="form-control" id="validationCustom02" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Address</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
