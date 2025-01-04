import React from "react";
import devpic from "/public/profile.jpeg";
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
   <div className="border-b border-neutral-900 pb-4 ">
     <h2 className="my-20 text-center font-thin text-4xl" >About Me</h2>
     <div className="flex flex-wrap justify-center">

     <div className="w-full lg:w-1/2 lg:p-8" >
     <div className="w-full">

     <div className="flex justify-center lg:justify-start text-base lg:text-lg xl:text-xl">
     <motion.p
     whileInView={{ opacity: 1, x: 0 }}
     initial={{ opacity: 0, x: 100 }}
     transition={{ duration: 1 }}
     >I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.</motion.p>
     </div>

     </div>
     </div>

     <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center">
     <img className="max-w-[400px] mt-10 rounded-3xl" src={devpic} alt="" />         
     </motion.div>
     
   </div>
     </div>
  )
};
 
export default AboutMe;
