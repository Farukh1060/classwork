import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import Input from "./Components/Input";
import Model from "./Components/Model";
import { db } from "./firebase";
import { addDoc, collection, getDocs,deleteDoc, doc,getDoc, updateDoc } from "firebase/firestore";
import Contact_list from "./Components/Contact_list"
// import { doc } from 'firebase/firestore'

const App = () => {


  useEffect(() => {
    // console.log("123");
    getdata();
  }, []);


  const [contacts, setcontacts] = useState([]);
  const [contact, setcontact] = useState("");
  const [on_model, seton_model] = useState(false);

  const contactref = collection(db, "contacts");
  // console.log(db)

  const getdata = async () => {
    const contactref_data = await getDocs(contactref);

    const snap = contactref_data.docs.map((doc) => {
      // console.log(doc.data())
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    setcontacts(snap);
  };

  const name = useRef();
  const email = useRef();
  // const id = useRef()

  const close_model = () => {
    seton_model(false);

   setcontact("")
    // id.current.value = ""
    // console.log("ok")
  };

  const open_model = () => {
    // console.log("ok")
    seton_model(true);
  };

  const addcontact =async (e)=>{
    e.preventDefault()

    if(contact.id != undefined){
      updateDoc(doc(contactref,contact.id),{name:name.current.value,email:email.current.value})
        console.log("update");
        
    }else{

      await addDoc(contactref,{name:name.current.value,email:email.current.value})
    }
    
    // console.log(contact.id);

    getdata()
    close_model()
  }

  const deletecontact = async (id)=>{
   await deleteDoc(doc(contactref,id))
  //  console.log(name);
   getdata()
  }

  const edithandler = async (id)=>{
    
    
    const  snap =  await getDoc(doc(contactref,id))
  
    setcontact({name:snap.data().name,email:snap.data().email,id:snap.id})

    
    open_model()


    
  }

// console.log(id)

  return (
    <div className="mx-auto max-w-[370px] relative">
      <Navbar></Navbar>
      <Input open_model={open_model}></Input>
      <Contact_list contacts={contacts} deletecontact={deletecontact} edithandler={edithandler}></Contact_list>
      
      {on_model ? (
        <Model
          close_model={close_model}
          on_model={on_model}
          name={name}
          email={email}
          // id={id}
          addcontact={addcontact}
          contact={contact}
          
        ></Model>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
