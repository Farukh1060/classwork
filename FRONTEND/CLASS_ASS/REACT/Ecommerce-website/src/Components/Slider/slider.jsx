import React, { useState } from "react"

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"



const Slider = ({img,onrightclick,onleftclick})=>{

    

  

    return(
        <>
            <div className="slider_container border-2 h-[550px]  relative overflow-hidden bg-secondary z-[0]">
                <div className="bg-patten h-[700px] w-[700px]  bg-primary/40 rounded-3xl rotate-45 absolute  right-0 bottom-[150px] z-[10]">
            
                </div>
                <div className="slider z-[20]">
                    <div className="slider_img flex justify-center">
                        
                        <img src={img} alt="" className="z-[25]"/>
                        
                    </div>
                    <div className=" top-1/2 -translate-y-1/2 absolute btn flex flex-row-reverse text-4xl justify-between w-full px-2 z-[30]">
                        <div className="right">
                            <IoIosArrowDropright onClick={onrightclick}/>
                        </div>
                        <div className="left">
                            <IoIosArrowDropleft onClick={onleftclick}/>
                        </div>
                    </div>
                </div>
            </div>

            
        
        </>
    )
}

export default Slider