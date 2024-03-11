import React from "react";
import SkillCard from "./SkillCard";
import { DiGithubAlt, DiUbuntu, DiJsBadge, DiPython, DiLinux, DiReact } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Skills() {
  return (
    <>
      <div className="flex justify-center bg-white">
        <div className="h-fit w-fit text-white  gap-4 p-2 pt-4 pb-4  grid grid-cols-2 place-items-center md:grid-cols-6">
          <SkillCard>
          <a className="text-white  hover:text-purple-600   transition">
             <DiGithubAlt size={90} />
             <h1 className="text-center  font-gil ">Github</h1>
         </a>
          </SkillCard>
          <SkillCard>
          <a className="text-white  hover:text-orange-500  transition">
             <SiCplusplus size={80} />
             <h1 className="text-center  font-gil ">C++</h1>
         </a>
          </SkillCard>
          <SkillCard>
          <a className="text-white hover:text-sky-400   transition">
             <DiReact size={90} />
             <h1 className="text-center  font-gil ">React</h1>
         </a>
          </SkillCard>
          <SkillCard>
          <a className="text-white hover:text-green-600   transition">
             <DiPython size={90} />
             <h1 className="text-center  font-gil ">python</h1>
         </a>
          </SkillCard>
          <SkillCard>
          <a className="text-white hover:text-orange-400   transition">
             <FaJava size={90} />
             <h1 className="text-center  font-gil ">Java</h1>
         </a>
          </SkillCard>
          <SkillCard>
          <a className="text-white hover:text-yellow-400   transition">
             <DiJsBadge size={90} />
             <h1 className="text-center  font-gil ">Javascripts</h1>
         </a>
          </SkillCard>
       
        </div>
      </div>
    </>
  );
}
