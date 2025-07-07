


import React from 'react'
import { GoStar, GoStarFill } from 'react-icons/go'




const Rating = ({product}) => {
    // console.log(product);
    

    const star = []

    for(let i=0;i<5;i++){
        if(i<product){
           star.push(<GoStarFill></GoStarFill>)
        }else{
            star.push(<GoStar></GoStar>)
        }
    }

  return (
    <div className=" flex text-2xl text-orange-500 gap-1 items-center">
        {star}
    </div>
    
  )
}

export default Rating