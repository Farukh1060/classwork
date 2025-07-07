import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react"
import Header from "./compenent/header";
import Footer from "./compenent/footer";
import Contect from "./compenent/contect";
import Contextprovider from "./Context/Appcontext";

const App =()=>{

  //usestate


  // const [count,setcount] = useState(0)
  // function increase(){
  //   setcount(count=>count+1)
  //   setcount(count=>count+1)//use prevese value od state
    
  // }
  //   console.log(count)
  // return(<>
  //   <h1>count: {count}</h1>
  //   <button onClick={increase}>increase</button>
  // </>
  // )

  //useeffect(callbackfunc,dependency) run on every render of compenent if dependency 
  //is not given

  // const [count,setcount] = useState(0) 
  // const [name,setname] = useState("nam")
  // useEffect(()=>{
  //   setTimeout(() => {
  //     setcount(count=>count+1)
  //     setname("name")
  //   },2000);
  // },[name])
  // return(
  //   <>
  //     <h1>i have render{count}</h1>
    
  //   </>
  // )

  //usereff
  // const [count,setcount]=useState(0)
  // const [value,setvalue] = useState(0)
  // const count =  useRef(0)
  // console.log(count.current)
  // // useEffect(()=>{
  // //   setcount(count=>count+1) loop infinte
  // // })

  // useEffect(()=>{
  //   count.current= count.current+1 //render only  
  // })

  // return(
  //   <>
  //     <button onClick={()=>{setvalue(value=>value-1)}}>-1</button>
  //     <h1>{value}</h1>
  //     <button onClick={()=>{setvalue(value=>value+1)}}>+1</button>
  //     <h1>render:{count.current}</h1>
    
  //   </>
  // )

  // const inputfield = useRef()
  // const btnclick =()=>{
  //   console.log(inputfield.current)
  //   inputfield.current.style.background="blue"
  // }

  // return(
  //   <>
  //   <input type="text" ref={inputfield}/>
  //   <button onClick={btnclick}>click hear</button>
  //   </>
  // )


  //usememo
  // const [number,setnumber] = useState(0)
  // const [counter,setcounter] = useState(0)
  
  // function cubenum(){
  //   console.log("calculation done")
  //   return Math.pow(number,3)
  // }
  // const result = useMemo(()=>{return cubenum(number)},[number]) 
  

  // return(
  //   <>
  //   <input type="text" value={number} onChange={(e)=>{
  //       setnumber(e.target.value)
  //   }}/>
  //     <h1>cube of number :{result}</h1>
  //     <button onClick={()=>{setcounter(value=>value+1)}}>+1</button>
  //     <h1>render:{counter}</h1>
    
  //   </>
  // )

  // usecallback

  // const [count,setcount]=useState(0);

  // const newfun = useCallback(()=>{},[])
  // return(<>
  // <Header newfun={newfun}></Header>
  //   <h1>{count}</h1>
  //   <button onClick={()=>{setcount((prev)=>{return prev+1})}}> click </button>
  // </>)


  // usecontext
  // return(
  //  <Contextprovider>
  //     <Header></Header>
  //     <Contect></Contect>
  //     <Footer></Footer>
  //   </Contextprovider>
   
  // )

  //usereduser()

  const dispatchcount = (state,action)=>{
    if(action.type == "increase"){

      return({count: state.count+1})
    }else if(action.type == "decrease"){
      
      return({count: state.count-1})
    }
  }
  
  const [state,disptach] = useReducer(dispatchcount,{count:0})
  //  const [count,setcount]=useState(0);
   return(<>
     <h1>{state.count}</h1>
     <button onClick={()=>disptach({type:"increase"})}> click+ </button>
     <button onClick={()=>disptach({type:"decrease"})}> click-</button>
  </>)







}
export default App