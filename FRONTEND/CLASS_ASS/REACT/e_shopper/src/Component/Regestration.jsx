

import React from 'react'
import { Link } from 'react-router-dom'

const Regestration = () => {
  return (
    <div className="row  d-flex justify-content-center align-items-center vh-100 ">
    <div className="col-lg-6 mb-5">
        <h2 className='text-center'> Regestration</h2>
      <div className="contact-form border border-2 p-5">
        <form name="sentMessage" id="contactForm" noValidate="noValidate">
          <div className="control-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required="required"
              data-validation-required-message="Please enter your name"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
              required="required"
              data-validation-required-message="Please enter your email"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter Number"
              required="required"
              data-validation-required-message="Please enter a number"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter pasword"
              required="required"
              data-validation-required-message="Please enter a pasword"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Conform pasword"
              required="required"
              data-validation-required-message="Please enter a pasword"
            />
            <p className="help-block text-danger"></p>
          </div>

          <div>
            <button
              className="btn btn-primary py-2 px-4 w-100"
              type="submit"
              id="sendMessageButton"
            >
              SIGN UP
            </button>
            <hr />
          </div>
        </form>

        <div className="row">
          <div className="col-12">
            <p className="text-center">Have a account ? <Link to="/login" >Login hear</Link> </p>
             <p className="text-center">go to home <Link to="/">home</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Regestration