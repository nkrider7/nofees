import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useFirebase } from "../../context/firebase";

export default function Login({ children }) {


 
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className=" font-gil hidden md:block mr-2   border px-2 rounded-md text-sm md:text-lg transition hover:text-white/75 text-white "
      >
        {children}
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
export const SpringModal = ({ isOpen, setIsOpen }) => {
  const firebase = useFirebase();
  function handleLoginAnonymously() {
    firebase.onetaplogin();
    setIsOpen(false);
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-neutral-800 to-neutral-700  text-white p-6 rounded-lg w-[80%] max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-black grid place-items-center mx-auto">
                {/* <FiAlertCircle /> */}
                <h1>logo</h1>
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Login with
              </h3>
              <p className="text-center mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                aperiam vitae, sapiente ducimus eveniet in velit.
              </p>
              <div className="flex gap-2 flex-col">
                <button
                  onClick={handleLoginAnonymously}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Login as anonymous
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Login With Google
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
