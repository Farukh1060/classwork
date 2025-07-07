import React, { useState } from "react";
import Box from "./Box";
import "./Score_bord.css";


const Score_bord = () => {

  const number = [1,2,3,4,5,6]
  const [selected_num,setselected_num]=useState(null)
  const [imgs ,setimgs] = useState(1)
  const [total,settotal]=useState(0)

 const selectnum_handler = (value)=>{
    setselected_num(value)
 }
  const random_num = ()=>{
    let dice_no = Math.floor(Math.random()*(7 -1)+1)
    setimgs(dice_no)
    if(selected_num==null) return;
    if(selected_num == dice_no){
      settotal(total+dice_no)
    }else{
    
      settotal(total-dice_no)
    }
  }

  
  return (
    <>
      <div className="score">
        <span className="result">{total}</span>
        <p>Total score</p>
      </div>
      <div className="num_container">
        <div className="selected_num">
          {number.map((ele) => (
            <Box key={ele} ele={ele} isactive={selected_num===ele} selectnum_handler={selectnum_handler}></Box>
          ))}
        </div>
        <div>select number</div>
      </div>

      <div className="roll_dice">
          <div className="dice_container">
              <img src={`/src/assets/images/dice/dice_${imgs}.png`} onClick={random_num} alt="" />
              <p>click on dice to roll</p>
          </div>
          <div className="btn">
            <div className="reset">
              <button>reset</button>
            </div>
            <div className="rules">
              <button>show rules</button>
            </div>
          </div>


      </div>
    </>
  );
};

export default Score_bord;
