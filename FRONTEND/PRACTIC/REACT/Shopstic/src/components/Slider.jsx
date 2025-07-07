import { useState } from "react"
import slider1 from "../assets/imges/slider/slider1.jpg"
import slider2 from "../assets/imges/slider/slider2.jpg"
import slider3 from "../assets/imges/slider/slider3.jpg"
import slider4 from "../assets/imges/slider/slider4.jpg"
import slider5 from "../assets/imges/slider/slider5.jpg"
import slider6 from "../assets/imges/slider/slider6.jpg"
import slider7 from "../assets/imges/slider/slider7.jpg"
import slider8 from "../assets/imges/slider/slider8.jpg"
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
// import slider1 from "../assets/imges/slider/slider1.jpg"



const Slider = () =>{
    const img = [slider1,slider2,slider3,slider4,slider5,slider6,slider7,slider8]
    let[sliderimg, setsliderimg] = useState(0)

    const sliderHandlerPlue = ()=>{
        if(sliderimg >= img.length-1){
            setsliderimg(0)
        }else{

            (setsliderimg(sliderimg+=1));
        }

        
        
    }

    const sliderHandlerMinus = ()=>{
        if(sliderimg <= 0){
            setsliderimg(img.length-1)
        }else{

            (setsliderimg(sliderimg-=1));
        }
        
        
        
    }


    return(<>

        <div className="slider_container mt-4">
            <div className="container">
                <div className="slider">
                    <div className="slider_img rounded-3xl overflow-hidden relative border-2">
                        <img className="w-full" src={img[sliderimg]} alt="" />
                        <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full">
                            <FaAngleDoubleLeft className="text-3xl " onClick={sliderHandlerMinus}></FaAngleDoubleLeft>
                            <FaAngleDoubleRight className="text-3xl " onClick={sliderHandlerPlue}></FaAngleDoubleRight>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    
    </>)
}

export default Slider