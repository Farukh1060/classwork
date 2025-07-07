import React, { useEffect, useState } from "react";
import Input_field from "./component/Input_field/Input_field";
import Stud_detail from "./component/Stud_detail/Stud_detail";
import Title from "./component/Title/Title";
import styles from "./App.module.css";

import { db } from "./firestore";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

const detail = [
  {
    name: "xyz",
    email: "xyz@email.com",
    number: 456123789,
  },
  {
    name: "xyzuvw",
    email: "xyzuvw@email.com",
    number: 4561237123,
  },
];
const App = () => {
  const studentref = collection(db, "students");

  let [details, setdetails] = useState([]);
  let [student, setstudent] = useState({});
  // console.log(details)

  // get data from firestore and set to setdetails

  const getstudent = async () => {
    try {
      const studentrefdata = await getDocs(studentref);
      const student_data = studentrefdata.docs.map((doc) => {
        // console.log(doc.data())
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setdetails(student_data);
    } catch (error) {
      console.log(error);
    }
  };

  //get data from form and set to firstore
  const resiveformdata = async (studdata ) => {
    // console.log(studdata);
    

    if(studdata.id !=undefined){
      const data = doc(studentref,studdata.id)
      console.log(studdata)
    await  updateDoc(data,{name:studdata.name,email:studdata.email,number:studdata.number})
    }else{

      await addDoc(studentref,{name:studdata.name,email:studdata.email,number:studdata.number});
    }


    getstudent();
  };

  //delete data from firestore
  const removebtnhandler = async (id) => {
    // console.log("ok delete");

    await deleteDoc(doc(studentref, id));
    getstudent();

    // const newstuddata = details.filter(element =>(element.id != id))
    // setdetails(newstuddata)
  };

  const editbtnhandler = async (id) => {
    // console.log(id);
    
    const getsnap = await getDoc(doc(studentref, id));
    // console.log(getsnap.data());
    
    setstudent({
      name: getsnap.data().name,
      email: getsnap.data().email,
      number: getsnap.data().number,
      id: getsnap.id,
    });
  };

  useEffect(() => {
    console.log("123");
    getstudent();
  }, []);

  return (
    <div className={styles.container}>
      <Title></Title>
      <Input_field
        editbtnhandler={editbtnhandler}
        resiveformdata={resiveformdata}
        student={student}
      ></Input_field>
      <Stud_detail
        details={details}
        removebtnhandler={removebtnhandler}
        editbtnhandler={editbtnhandler}
      ></Stud_detail>
    </div>
  );
};

export default App;
