import React from 'react'
import "./App.css"
import { decrement, increment } from './features/counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux'




const App = () => {
  const count = useSelector((state)=>state.counter.value)
   const dispatch = useDispatch()

  
  const incrementbutton = ()=>{
    dispatch(increment())
  }

  const decrementbutton = () =>{
    dispatch(decrement())
  }


  return (
    <div> 
      <button onClick={incrementbutton}>+</button>
      <p>count:{count}</p>
      <button onClick={decrementbutton}>-</button>
    </div>
  )
}

export default App