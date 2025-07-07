import React, { useRef } from 'react'

import { db } from './Firestore'

import{
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore"

const App = () => {
  const userCollectionRef = collection(db,"student")

  const uname= useRef()
  const email= useRef()
  const age= useRef()

  const adduser = (e)=>{ 
      e.preventDefault()
    const u1 = {
      "username":uname.current.value,"email":email.current.value,"age":age.current.value
    }

    return addDoc(userCollectionRef,u1)
  }


  return (
    <div>
      <form action="" onSubmit={adduser}>
        <input type="text" placeholder='name' ref={uname}/>
        <input type="text" placeholder='email' ref={email}/>
        <input type="text" placeholder='age'ref={age}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App