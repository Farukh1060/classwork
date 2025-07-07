import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase_auth";
import { doc, getDoc } from "firebase/firestore";

const Profil = () => {
  const [users, setusers] = useState();

  const fetchuserdata = async () => {
    auth.onAuthStateChanged(async (users) => {
      console.log(users);
      // 
      if (users == null) {
        console.log("loding")
        console.log(users)
        window.location.href = "/";
      }else if(users.displayName != null){
        console.log(users.displayName)
        setusers({
          name:users.displayName,
          email:users.email,
        })
      }else if(users.displayName == null) {
        console.log(users.displayName)

        const snap = await getDoc(doc(db, "user", users.uid));

 
        if (snap.exists()) {
          setusers({
            name: snap.data().name,
            email: snap.data().email,
            number: snap.data().number,
          });
        } 

      }
     
    });
  };
  console.log(auth.currentUser);

 


  const logouthandler = async () => {
   await auth.signOut();
    window.location.href = "/";
  };

  useEffect(() => {
    fetchuserdata();
  }, []);

  return (
   <>
      { users ? <div className="text-center">
      <div>welcome,{users.displayName}</div>
      <div>name: {users.name}</div>
      <div>number: {users.number}</div>
      <div>email: {users.email}</div>
      <div>
        <button className="btn btn-success" onClick={logouthandler}>
          logout
        </button>
      </div>
    </div>:"loding..."}
    
    </>
  
  );
};

export default Profil;
