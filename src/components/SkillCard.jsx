import React  from 'react'

export default function SkillCard({children}) {


  return (
    

        <div className='h-40 w-40 bg-black scale-95 md:scale-100 flex justify-center items-center rounded-md  hover:scale-[1.1] transition'>
        {children}
        </div>

    
        
  )
}
