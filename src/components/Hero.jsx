import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export default function Hero() {

  let navigate = useNavigate();



  const custonStyle = {
    "backgroundImage":
      "linear-gradient(#171717 1.5px, transparent 1.5px), linear-gradient(to right, #171717 1.5px, transparent 1.5px)",
    "backgroundSize": "46px 46px",
    "backgroundColor": "#000000",
  };

  const [searchText, setSearchText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value)
    setSearchText(event.target.value);


  };

  function handleOnSubmit() {

    navigate(`/search/${searchText}`);

  }
  return (
    <>
      <motion.div 
       
        variants={{
          start: {backgroundPositionY: "0px"},
            end: {backgroundPositionY: "46px"},
            }}
            initial="start"
            animate="end"
            transition={{
              repeat: Infinity,
              type: "spring",
               stiffness: 100
            }}
        style={custonStyle}
        className="h-[60vh] bg-black z-0"
      >
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="ant text-white text-center pt-10 font-cub leading-none text-[4rem]"
        >
          No fees!
        </motion.h1>
        <motion.h1
          initial={{ x: 50, opacity: 0 }}
          animate={{ x:1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-[#FFD700]  text-center  font-cub leading-none text-[2rem]"
        >
          Matlab! 100% free
        </motion.h1>

        <div className="flex justify-center gap-2 flex-col  md:flex-row items-center  text-white pt-10 ">
          <select
            name="searchDrop"
            id="mySelect"
            value={selectedOption}
            onChange={handleSelectChange}
            className="bg-white text-black pl-2 font-gil w-fit  pr-2 p-1 rounded-sm"
          >
            <option value="">Default</option>
            <option value="C++">C++</option>
            <option value="HTML">Html</option>
            <option value="JavaScript">Javascripts</option>
            <option value="Python">Python</option>
            <option value="Java ">Java</option>
            <option value="Web">Web</option>
          </select>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="bg-white outline-sky-400 text-black w-fit pl-2 font-gil  pr-2 p-1 rounded-md"
          />
          <button
            onClick={handleOnSubmit}
            className="bg-white text-black pl-2 font-gil w-fit pr-2 p-1 rounded-sm hover:bg-black hover:text-white transition border-white border"
          >
            Search
          </button>
        </div>
        <div className="pt-28 border-b-2 border-neutral-500 border-dashed"></div>
      </motion.div>
    </>
  );
}
