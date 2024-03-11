import React from 'react'

export default function SearchVideoCard() {
  return (
   
    <>
        <div className='w-[80vw] h-80 bg-slate-800 rounded-sm m-auto' >
            <div className="video">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/`}
                    title="video"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="text">
                <h1>Titile</h1>
                <p>description</p>
            </div>

        </div>
    
    </>
  )
}
