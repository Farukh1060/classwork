

import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { auth, db } from '../firebase_auth'
import { setDoc,doc } from 'firebase/firestore'

const Regestration = () => {


  const name = useRef()
  const email = useRef()
  const pass = useRef()
  const number = useRef()

  // console.log(name.current.value);
  console.log(auth);
  

  const reg_user = async (e)=>{
    e.preventDefault()

    try{
      await createUserWithEmailAndPassword(auth,email.current.value,pass.current.value)

      const user = auth.currentUser;
      console.log(user);
  
      if(user){
        await setDoc(doc(db,"user",user.uid),{name:name.current.value,email:user.email,number:number.current.value})
        name.current.value=""
        email.current.value=""
        pass.current.value=""
        number.current.value=""
      }
      window.location.href= "/"
      alert("successfully_regestier")
                

    } catch(e){
      console.log(e);
      
    }
   
    

  }

  return (
    <div className="row  d-flex justify-content-center align-items-center vh-100 ">
    <div className="col-lg-6 mb-5">
        <h2 className='text-center'> Regestration</h2>
      <div className="contact-form border border-2 p-5">
        <form name="sentMessage" id="contactForm" noValidate="noValidate" onSubmit={reg_user}>
          <div className="control-group">
            <input
              ref={name}
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
            ref={email}
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
            ref={number}
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
              ref={pass}
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter pasword"
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
            <p className="text-center">Have a account ? <Link to="/" >Login hear</Link> </p>
             <p className="text-center">go to home <Link to="/profil">home</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Regestration