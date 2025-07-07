import React, { useEffect, useRef, useState } from "react";
import User_data from "./Component/User_data";
import { Outlet, useNavigate } from "react-router-dom";
useNavigate




const App = () => {

  const username = useRef()
  const email = useRef()
  const phone = useRef()
  const password = useRef()
  const cpassword = useRef()
  const id = useRef()


  const updatehandler = (uid)=>{

  fetch(`http://localhost:3000/user/${uid}`).then(res => {
    // console.log(res)
    return res.json()

  }).then(resut=>{
// console.log(resut);

    id.current.value = resut.id
    username.current.value = resut.username
    email.current.value = resut.email
    phone.current.value = resut.phone

  })
  
  }
  
  
  const adduser = (e)=>{

    e.preventDefault();
    console.log(id)

    if(id.current.value ==""){
      fetch("http://localhost:3000/user",{
        method:"post",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
          "username":username.current.value,
          "email":email.current.value,
          "phone":phone.current.value,
        })
      })

    }else{
      fetch(`http://localhost:3000/user/${id.current.value }`,{
        method:"put",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
          "username":username.current.value,
          "email":email.current.value,
          "phone":phone.current.value,
        })
      })
    }

    
    id.current.value=""
    username.current.value  =" "
    email.current.value =" "
    phone.current.value =" "
    password.current.value =" "
    cpassword.current.value =" "

  }
  
 
  

  const [User_datas,setuser_datas] = useState([])
  const [running,setrunning]=useState("true")
 
  // console.log(User_datas.length)




  console.log(running)
  useEffect(()=>{
    console.log(running)
      
    if(running == "true"){
      setrunning("false")
      fetch("http://localhost:3000/user").then(resp=>{
        return resp.json()
      }).then(data=>{
      
        setuser_datas(data);
        console.log(123)
       
        
      }).catch(err=>console.log(err)
      )
    }
      
  },[User_datas])
  
  
 

  return (<>
    <div className="container "> 
      <div className="row">
        <div className="col-4">
          <h1 className="">user regestration</h1>
          <hr />
          <form action=""  onSubmit={adduser}>
            <input type="text" ref={id}  />
            <div className="form-group">
              <label htmlFor="user_name" className="p-2">
                user name :-
              </label>
              <input
                type="text"
                placeholder="enter user name"
                className="form-control"
                id="user_name"
                ref={username}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="p-2">
                email :-
              </label>
              <input
                type="text"
                placeholder="enter email"
                className="form-control"
                id="email"
                ref={email}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="p-2">
                phone :-
              </label>
              <input
                type="text"
                placeholder="enter phone number"
                className="form-control"
                id="phone"
                ref={phone}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="p-2">
                password :-
              </label>
              <input
                type="text"
                placeholder="enter password"
                className="form-control"
                id="password"
                ref={password}
              />
            </div>

            <div className="form-group">
              <label htmlFor="conform_password" className="p-2">
                conform_password :-
              </label>
              <input
                type="text"
                placeholder="conform password"
                className="form-control"
                id="conform_password"
                ref={cpassword}
              />
            </div>

            <div className="mt-3">
              <button className="btn btn-success">submit</button>
            </div>
          </form>
        </div>

        <div className="col-2"></div>

        <div className="col-6">
          <h1>user detail</h1>
          <hr />
          <table className="table">
            <thead>
              <tr>
                <th>user name</th>
                <th>email</th>
                <th>phone</th>
              </tr>
            </thead>
            <tbody>
             { User_datas.map(ele=> <User_data key={ele.id} ele={ele} updatehandler={updatehandler} ></User_data> )} 
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Outlet></Outlet>

    </>
  );
};

export default App;
