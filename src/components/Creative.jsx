import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

export default function Creative() {


    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      });
      const [cursorVariant, setCursorVariant] = useState("default");
    
    
      useEffect(() => {
        const mouseMove = e => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          })
        }
    
        window.addEventListener("mousemove", mouseMove);
    
        return () => {
          window.removeEventListener("mousemove", mouseMove);
        }
      }, []);
    
      const variants = {
        default: {
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        },
        text: {
          height: 150,
          width: 150,
          x: mousePosition.x - 75,
          y: mousePosition.y - 75,
          backgroundColor: "yellow",
          mixBlendMode: "difference"
        }
      }
    



    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");
  return (
    <div className='h-[50vh] flex justify-center  bg-yellow-500'>
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='font-bold w-full text-[80px]'>Helloworld</h1>
        <motion.div
        className='cursor bg-white h-10 w-10 rounded-full top-0 left-0 pointer-events-none absolute z-50'
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  )
}
