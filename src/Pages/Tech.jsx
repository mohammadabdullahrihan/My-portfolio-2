import React from "react";
import { FaNode } from "react-icons/fa";
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiMongodb, } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { motion } from "framer-motion";
import { BiLogoGraphql, BiLogoTypescript } from "react-icons/bi";

const icon = (duration) => ({
  initial: {
    y: 0,
  },
  animate: {
    y: [12, -12],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center font-thin text-4xl">Technologies</h1>
      <motion.div 
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      className="flex flex-wrap items-center justify-center gap-4">

         {/* cards */}

        <motion.div
        variants={icon(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-l-2 border-t-2 border-sky-300 p-5">
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
        variants={icon(5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-l-2 border-t-2 border-blue-400 p-5">
          <BiLogoTypescript className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div
        variants={icon(3)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-yellow-400 border-l-2 border-t-2 p-5 ">
          <RiJavascriptFill className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
        variants={icon(4)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-l-2 border-t-2 border-sky-300 p-5">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
        variants={icon(3)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-l-2 border-t-2 border-white p-5">
          <RiNextjsFill className="text-7xl text-white" />
        </motion.div>
        
        <motion.div
        variants={icon(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-l-2 border-t-2 border-green-500 p-5">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
        variants={icon(2)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-l-2 border-t-2 border-gray-300 p-5">
          <SiExpress className="text-7xl text-gray-300" />
        </motion.div>

        <motion.div
        variants={icon(6)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-l-2 border-t-2 border-green-400 p-5">
          <FaNode className="text-7xl text-green-400" />
        </motion.div>



        <motion.div
        variants={icon(3)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-l-2 border-t-2 border-pink-600 p-5">
          <BiLogoGraphql className="text-7xl text-pink-600" />
        </motion.div>


        <motion.div
        variants={icon(3)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-l-2 border-t-2 border-yellow-500 p-5">
          <IoLogoFirebase className="text-7xl text-yellow-500" />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Tech;
