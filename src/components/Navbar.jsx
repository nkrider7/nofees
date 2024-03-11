import logo from "../assets/o.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {useEffect, useState } from "react";
 import  Login from "../pages/login/Login.jsx";
// import { useFirebase } from "../context/firebase.jsx";
// import { onAuthStateChanged, is } from "firebase/auth";

export default function Navbar() {
  // const [isLoggedIn, setIsLoggedIn] = useState(null);
  // const { firebaseAuth } = useFirebase();
  // useEffect(() => {
  //   if (!firebaseAuth) {
  //     console.error("Firebase authentication object is undefined");
  //     return;
  //   }

  //   const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
  //     if (user) {
  //       console.log("logged in", user);
  //       setIsLoggedIn(true);
  //     } else {
  //       console.log("logged out");
  //       setIsLoggedIn(false);
  //     }
  //   });

  //   // Cleanup function
  //   return () => {
  //     unsubscribe(); // Unsubscribe from the authentication state changes when the component unmounts
  //   };

  // }, [firebaseAuth]); // Include firebaseAuth in the dependency array to handle changes





  return (
    <>
      <>
        <header className="bg-black border-b-[1px] border-neutral-700">
          <div className="mx-auto flex h-14 max-w-screen-xl  items-center gap-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-1 items-center justify-center md:justify-center">
              <nav aria-label="Global" className=" md:block">
                <ul className="flex items-center  gap-6 text-sm">
                  <li>
                    <Link
                      className=" overflow-hidden text-teal-600 dark:text-teal-300"
                      to={"/"}
                    >
                      <img src={logo} className="w-28" alt="" />
                    </Link>
                  </li>
                  <li>
                    <a
                      className="font-gil hidden md:block  text-sm  font-bold md:text-lg transition hover:text-white/75 text-white "
                      href="#"
                    >
                      Courses
                  ?
                    </a>
                  </li>
                  <li>
                    <Link
                      className="hidden md:block font-gil  font-bold text-lg transition  text-white hover:text-white/75"
                      to={"blogs"}
                    >
                      Blogs
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="font-gil hidden md:block  font-bold text-lg transition  text-white hover:text-white/75"
                      to={"/roadmaps"}
                    >
                      Roadmaps
                    </Link>
                  </li>
                  <li className=" flex items-center">
                    <div>
                    <Login> login</Login>
                    </div>
                    <a className=" font-gil hidden md:block  text-sm md:text-lg transition hover:text-white/75 text-white ">
                      {/* <IoPersonCircleOutline /> */}
                    </a>
                  </li>
                  <StaggeredDropDown />
                  
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </>
    </>
  );
}

import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="relative  block md:hidden"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center gap-2 px-3 py-1 rounded-md text-indigo-50 bg-black border transition-colors"
      >
        <span className="font-medium font-gil text-sm">Menu</span>
        <motion.span variants={iconVariants}>
          <FiChevronDown />
        </motion.span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-2 p-2 rounded-lg z-50 bg-black border shadow-xl absolute top-[120%]   w-40 overflow-hidden"
      >
    
      
       <Option setOpen={setOpen}  Icon={FiEdit} text="Edit" > </Option>
        <Option setOpen={setOpen} Icon={FiPlusSquare} text="Duplicate" />
        <Option setOpen={setOpen} Icon={FiShare} text="Share" />
        <Option setOpen={setOpen} Icon={FiTrash} text="Remove" />
      </motion.ul>
    </motion.div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-fit p-2  text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-white transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
      
    </motion.li>

  );
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
