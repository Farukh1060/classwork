
import React, { useRef, useState } from 'react'

const SlidingBox = () => {

  const menu = useRef(null)
  const [isdrage ,setisdrag] = useState(false)
  const [startX , setstartX] = useState(0)
  const [scrollLeft,setscrollLeft] = useState(0)

  const mousedown = (e)=>{
    setisdrag(true)
    setstartX(e.pageX - menu.current.offsetLeft)  //give mouse position(pageY) on page and offsetleft give position of element accroding to position element 
    setscrollLeft(menu.current.scrollLeft)
  }

  const mouseup =()=>{
    setisdrag(false)
  }

  const mouseleave =()=>{
    setisdrag(false)
  }
  
  const mousemove = (e)=>{
   if(!isdrage) return
    e.preventDefault()
    const x = e.pageX - menu.current.offsetLeft
    const walk = (x - startX)* 1.5
    menu.current.scrollLeft = scrollLeft - walk
  }

  


  


  return (
    <div className='container border-2  border-black p-12 w-full overflow-hidden' ref={menu} onMouseDown={mousedown} onMouseMove={mousemove} onMouseLeave ={mouseleave}  onMouseUp={mouseup} >
      <ul className={`flex gap-5 select-none scroll-smooth ` } >
        <li className='w-[100px] px-[45px] h-30px rounded-full bg-slate-500'>1</li>
        <li className='w-[100px] px-[45px] h-30px rounded-full bg-slate-500'>2</li>
        <li className='w-[100px] px-[45px] h-30px rounded-full bg-slate-500'>3</li>
        <li className='w-[100px] px-[45px] h-30px rounded-full bg-slate-500'>4</li>
        <li className='w-[100px] px-[45px] h-30px rounded-full bg-slate-500'>5</li>
        <li className='w-[100px] px-[45px] h-30px rounded-full bg-slate-500'>6</li>
        <li className='w-[100px] px-[45px] h-30px rounded-full bg-slate-500'>7</li>
        <li className='w-[100px] px-[45px] h-30px rounded-full bg-slate-500'>8</li>
        <li className='w-[100px] px-[45px] h-30px rounded-full bg-slate-500'>9</li>
        <li className='w-[100px] px-[45px] h-30px rounded-full bg-slate-500'>10</li>
        <li className='w-[100px] px-[45px] h-30px rounded-full bg-slate-500'>11</li>
        <li className='w-[100px] px-[45px] h-30px rounded-full bg-slate-500'>12</li>
        <li className='w-[100px] px-[45px] h-30px rounded-full bg-slate-500'>13</li>
      </ul>
    </div>
  )
}

export default SlidingBox