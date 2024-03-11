import img from "../assets/ins.png"
import { FcStart } from "react-icons/fc";
import { DiGithubAlt, DiUbuntu, DiJsBadge, DiPython, DiLinux, DiReact } from "react-icons/di";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";


export default function HorizonCard({children}) {


  return (
    

        <div className='h-80 w-[23rem] bg-neutral-900 overflow-hidden  transition-all scale-95 md:scale-100 flex justify-center items-center rounded-md  hover:scale-[1.1]'>
         <div>
         <h4 className="text-center absolute -top-20 -left-20 opacity-50 text-blue-500  items-center text-lg" > <DiReact size={350}/></h4>
         <img src={img} className=" h-48 hover:saturate-150 saturate-0 transition " alt="" />
          <h3 className="text-center text-white flex font-cub items-center text-lg"> <FcStart/>Hitesh Chodhary </h3>
          <h3 className="text-center flex justify-center text-black bg-white rounded-full  font-cub items-center text-lg"> <TiSocialTwitter/> <TiSocialLinkedin/> </h3>
         </div>
        {children}
        </div>

    
        
  )
}
