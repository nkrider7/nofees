import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HorizonCard from "./HorizonCard";

export default function Horizon() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
 
  return (
    <>
    
      <section ref={targetRef} className="reletive h-[200vh] bg-neutral-900">
        <div className=" sticky top-0 bg-sky-500 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-10">
            <HorizonCard />
            <HorizonCard />
            <HorizonCard />
            <HorizonCard />
            <HorizonCard />
            <HorizonCard />

            <h1 className="font-cub text-[5rem] text-white">
              Make More Creative Way....
            </h1>
          </motion.div>
        </div>
      </section>
    </>
  );
}
