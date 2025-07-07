import fash from "../assets/imges/catg/fash.png"
import foot from "../assets/imges/catg/foot.png"
import grosorry from "../assets/imges/catg/grosorry.png"
import jeweelry from "../assets/imges/catg/jeweelry.png"
import well from "../assets/imges/catg/well.png"
import bag from "../assets/imges/catg/bag.png"
import beauty from "../assets/imges/catg/beauty.png"
import ele from "../assets/imges/catg/ele.png"

import React from 'react'

const Featured_catagory = () => {
  return (
    <div className='Featured_catagory_container mt-4'>
        <div className="container">
            <div className="featured">
                <ul className="flex justify-between">
                    <li className="flex flex-col gap-2 items-center">
                        <div className="rounded-full overflow-hidden   border-[1px] border-cyan-900">
                            <img src={fash} className=" w-[100px] p-4" alt="" />
                            
                        </div>
                        <p>home</p>
                        
                    </li>
                    <li className="flex flex-col gap-2 items-center">
                        <div className="rounded-full overflow-hidden   border-[1px] border-cyan-900">
                            <img src={bag} className=" w-[100px] p-4" alt="" />
                            
                        </div>
                        <p>bag</p>
                        
                    </li>
                    <li className="flex flex-col gap-2 items-center">
                        <div className="rounded-full overflow-hidden   border-[1px] border-cyan-900">
                            <img src={beauty} className=" w-[100px] p-4" alt="" />
                            
                        </div>
                        <p>beauty</p>
                        
                    </li>
                    <li className="flex flex-col gap-2 items-center">
                        <div className="rounded-full overflow-hidden   border-[1px] border-cyan-900">
                            <img src={ele} className=" w-[100px] p-4" alt="" />
                            
                        </div>
                        <p>fragrances</p>
                        
                    </li>
                    <li className="flex flex-col gap-2 items-center">
                        <div className="rounded-full overflow-hidden   border-[1px] border-cyan-900">
                            <img src={foot} className=" w-[100px] p-4" alt="" />
                            
                        </div>
                        <p> footwear</p>
                        
                    </li>
                    <li className="flex flex-col gap-2 items-center">
                        <div className="rounded-full overflow-hidden   border-[1px] border-cyan-900">
                            <img src={grosorry} className=" w-[100px] p-4" alt="" />
                            
                        </div>
                        <p>groceries</p>
                        
                    </li>
                    <li className="flex flex-col gap-2 items-center">
                        <div className="rounded-full overflow-hidden   border-[1px] border-cyan-900">
                            <img src={well} className=" w-[100px] p-4" alt="" />
                            
                        </div>
                        <p>weel being</p>
                        
                    </li>
                    <li className="flex flex-col gap-2 items-center">
                        <div className="rounded-full overflow-hidden  border-[1px] border-cyan-900">
                            <img src={jeweelry} className=" w-[100px] p-4" alt="" />
                            
                        </div>
                        <p>jewellery</p>
                        
                    </li>
                    
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Featured_catagory