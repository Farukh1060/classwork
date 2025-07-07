import react, {useState} from "react"
import "./Expencesform.css";

const Expencesform = (probes) => {

  const [entertitle,setentertitle]=useState("")
  const [enterdate,setenterdate]=useState("")
  const [enteramount,setenteramount]=useState("")


  const ontitlechange = (e) =>{
    setentertitle(e.target.value)
  }
  const ondatechange = (e) =>{
    setenterdate(e.target.value)
    
  }
  const onamountchange = (e) =>{
    setenteramount(e.target.value)
    
  }
  const submitform = (e) =>{
    e.preventDefault()
    let addexpences = {
      title:entertitle,
      amount:enteramount,
      date:new Date(enterdate)
    }

    probes.resiveNewExpencesdata(addexpences)
    console.log(addexpences)

  }


  return (
    <div>
      <form onSubmit={submitform}>
        <div className="form">
          <div className="flex">
            <label>Title : </label>
            <input type="text" onChange={ontitlechange}/>
          </div>
          <div className="flex">
            <label>Date : </label>
            <input type="date" onChange={ondatechange}/>
          </div>
          <div className="flex">
            <label>amount:</label>
            <input type="number" onChange={onamountchange}/>
          </div>
          <div className="flex">
            <button>Add Expences</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Expencesform;
