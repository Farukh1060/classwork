import react ,{ useState } from 'react'
import "./App.css"
import Expences from './component/Expences/Expences';
import NewExpences from './component/newExpences/newExpences';

let dummy =[
  {
    title:"work",
    date: new Date(2024, 9, 15),
    amount:100
  },
  {
    title:"master",
    date: new Date(2024, 9, 18),
    amount:100
  },
  {
    title:"cam",
    date: new Date(2024, 9, 12),
    amount:300
  },
  {
    title:"solid",
    date: new Date(2024, 9, 1),
    amount:400
  }

]
function App() {

 const[Expence,setExpence] = useState(dummy)



 const resiveNewExpences = (NewExpencesdata) =>{
  const updateExpence = [NewExpencesdata,...Expence]
  setExpence(updateExpence)
 }
 

  return (
    <>
      <NewExpences resexp = {resiveNewExpences}></NewExpences>
      <Expences Expences={Expence}></Expences>
    
    </>
  );
    
  
}

export default App
