import React from "react";
import img from '../assets/404.gif'

export default function Notfound() {
  return (
    <>
      <div class=" bg-[#020201]">

      <div className="w-full md:h-[80vh] h-fit  flex justify-center rounded-lg">
        <img src={img} className="w-fit  " alt="" />
      </div>

      </div>
    </>
  );
}
