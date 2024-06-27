// import React, { useRef, useState } from 'react';
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'



// const App = () => {
// const catref=useRef(null)
//  const ratref=useRef(null)
//  const mainRef = useRef(null);
//  const[xPosition,setXPosition] = useState(0)
//  const[yPosition,setYPosition] = useState(0)
//    const mouseMoving =(e)=>{
//     const catWidth = catref.current.offsetWidth / 2;
//     const catHeight = catref.current.offsetHeight / 2;
//      catref.current.style.left = e.clientX - catWidth + 'px';
//     catref.current.style.top = e.clientY - catHeight + 'px';
//     // catref.current.style.left=e.clientX+'px'
//     // catref.current.style.top=e.clientY+'px'
//     }
//   const ratCaught=()=>{
//     const mainBounds = mainRef.current.getBoundingClientRect();
//     const ratBounds = ratref.current.getBoundingClientRect();

//     const maxX = mainBounds.width - ratBounds.width;
//     const maxY = mainBounds.height - ratBounds.height;

//     const moveX = gsap.utils.random(0, maxX, 10);
//     const moveY = gsap.utils.random(0, maxY, 10);
//     setXPosition(moveX)
//     setYPosition(moveY)
//   }
//   useGSAP(()=>{
//      gsap.to(ratref.current,{
//       x:xPosition,
//       y:yPosition,
//       ease:"back"
//     })
//   },[xPosition,yPosition])
//   return (
//     <div className='main' ref={mainRef} onMouseMove={(e)=>{mouseMoving(e)}}>
//      <img ref={catref} src="/cat.png" alt="" />
//       <img onMouseEnter={ratCaught} ref={ratref} src="/rat.png" alt=""/>
//     </div>
//   )
// }

// export default App
import React, { useRef } from 'react'
import {gsap} from 'gsap'

const App = () => {
  const boxref =useRef(null)
  const BOxREF = ()=>{
    gsap.to(boxref.current,{
      x:200,
      y:300,
      background:"red",
      delay:1,
      ease:"backOut",
      duration:2,
      rotate:360,
      borderRadius:100
    })
    gsap.to(boxref.current,{
      x:1000,
      y:0,
      background:"yellow"
    })

  }
  return (
    <div ref={boxref} onClick={BOxREF} id="box">

    </div>
  )
}

export default App
