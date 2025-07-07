import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update_users, users_data } from "../feature/userDetailSlice";
import { useNavigate, useParams } from "react-router-dom";


const Regestration = () => {
 const {id} =  useParams()

//  console.log(id);
 
    const navigate = useNavigate()
    const dispatch  = useDispatch()

    
    const {users , loading} =  useSelector((state)=>{
       return state.app
     })

    const [user,setuser] = useState({})
    const [updateuser,setupdateuser] = useState({})
    
     useEffect(()=>{
      if(id!=undefined){
          if(users.length!=0){
            const data =  users.find((ele)=>ele.id ===id )
            setupdateuser(data)

          }else{
            navigate("/display_data")
          }
      }

     },[])
    

    // console.log(updateuser);
    

    const getUserData = (e)=>{
      if(id==undefined){
        setuser({...user,[e.target.name]:e.target.value})

      }else{
        setupdateuser({...updateuser,[e.target.name]:e.target.value})
      }
    }
  //  console.log(user);

   const sumbit_data = (e)=>{
    e.preventDefault()
    if(id==undefined){

      dispatch(users_data(user))
    }else{
      dispatch(update_users(updateuser))
    }
    // console.log(user);
    
    navigate("/display_data")
   }
   

  return (
    <div className="row">
      <div className="col-6 mx-auto card p-3 m-3">
        <form onSubmit={sumbit_data}>
          <div className="mb-3 ">
            <label htmlFor="exampleInputname" className="form-label">
              Full Name
            </label>
            <input
              onChange={getUserData}
              name="name"
              value={updateuser.name}
              type="text"
              className="form-control"
              id="exampleInputname"
              aria-describedby="nameHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={getUserData}
              name="email"
              value={updateuser.email}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3 ">
            <label htmlFor="exampleInputnumber" className="form-label">
              Number
            </label>
            <input
              onChange={getUserData}
              name="number"
              value={updateuser.number}
              type="text"
              className="form-control"
              id="exampleInputnumber"
              aria-describedby="numberHelp"
            />
          </div>

          <div className="mb-3">
            <div className="form-check">
              <input
                onChange={getUserData}
                className="form-check-input"
                type="radio"
                name="gender"
                value="Male"
                id="flexRadioDefault1"
                defaultChecked={updateuser.gender === "Male"}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={getUserData}
                className="form-check-input"
                type="radio"
                name="gender"
                value="Female"
                defaultChecked={updateuser.gender === "Female"}
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            {id?"update":"submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Regestration;
