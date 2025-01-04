import React from "react";
import devpic from "/public/profile.jpeg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div>
      <div className="border-b border-neutral-900 lg:mb-35 xl:p-6">
        <div className="flex flex-wrap justify-center">
          <div className=" mt-12 lg:ml-[100px]">
          <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
  className="max-w-[350px] lg:-ml-0 xl:-ml-0 rounded-full"
  src={devpic}
  alt="Developer Picture"
/>

          </div>
          {/* text */}

          <div className="p-10 space-y-3">
            <motion.h1
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: -100 }}
             transition={{ duration: 1 }}
             className="pb-16 text-6xl lg:text-8xl font-thin tracking-tight lg:mt-16 ">
              Abdullah Rihan
            </motion.h1>
            <motion.h2 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ">
              MERN Developer
            </motion.h2>
            <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-gray-400 my-2 max-w-xl py-6 font-light text-[18px] tracking-tighter w-[250px] md:w-[600px] xl:w-[500px]">
              I am a MERN Stack Web Developer with experience in building
              full-stack web applications using MongoDB, Express.js, React.js,
              and Node.js. I excel at creating responsive and user-friendly
              interfaces, designing scalable back-end systems, and integrating
              APIs. I am passionate about solving complex problems and
              delivering high-quality web solutions in collaborative, agile
              environments.
            </motion.p>
            <div className="">
              <div className="flex space-x-5 mb-7 text-3xl ">
                <div>
                  <FaLinkedin />
                </div>

                <div>
                  <FaGithub />
                </div>

                <div>
                  <FaFacebook />
                </div>
              </div>
            </div>

            <motion.div 
            whileInView={{ opacity: 10, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="space-x-4">
              
              <Link to="/resume.pdf" target="_blank" download>
                <RainbowButton>Resume</RainbowButton>
              </Link>

              {/* Resume View Button */}

              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <RainbowButton>View</RainbowButton>
              </a>

            </motion.div>
          </div>

          {/* image */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
