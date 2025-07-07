import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase_auth";

const Login = () => {

  const email =useRef()
  const pass =useRef()

  const loginhandler = async (e)=>{
    e.preventDefault()
    try{
      await signInWithEmailAndPassword(auth,email.current.value,pass.current.value)
      window.location.href="/profil"

    }catch(error){
      alert("email or password is wrong..")
    }
    
  }
  const google_login = async ()=>{
   const Guser =  await signInWithPopup(auth,provider)
  //  console.log(Guser.user);
   if(Guser){
    window.location.href = "/profil"
   }
   
    
  }


  return (
    <div className="row  d-flex justify-content-center align-items-center vh-100 ">
        
      <div className="col-lg-6 mb-5">
      <h2 className="text-center">LOGIN</h2>
        <div className="contact-form border border-2 p-5">
          <div id="success"></div>
          <form name="sentMessage" id="contactForm" noValidate="noValidate" onSubmit={loginhandler}>
            
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
                LOGIN
              </button>
              <hr />
              
            </div>
          </form>
          <button
                className="btn btn-primary py-2 px-4 w-100"
                onClick={google_login}
                id="sendMessageButton"
              >
                login with google
              </button>
              <hr />

          <div className="row">
            <div className="col-12">
              <p className="text-center">don't have account ? <Link to="/reg">register</Link></p>
              {/* <p className="text-center">go to home <Link to="/profil">home</Link></p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
