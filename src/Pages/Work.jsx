import React from "react";
import { PROJECTS } from "/public/constants/index.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Work = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center font-thin text-4xl">Projects</h2>
      <div className="flex flex-wrap justify-center">
      {

      PROJECTS?.map((project, index) => 
      <div key={index} className="mb-8 flex flex-wrap lg:justify-center"> 
      <div className="w-full lg:w-1/4 flex justify-center">
       <motion.img src={project?.image} width={500} height={350} alt={project?.title}
       className="mb-6 rounded-3xl object-cover"
       whileInView={{ opacity: 1, x: 0 }}
     initial={{ opacity: 0, x: 100 }}
     transition={{ duration: 1 }}
       />
      
      </div>
       <motion.div
       whileInView={{ opacity: 1, x: 0 }}
       initial={{ opacity: 0, x: -100 }}
       transition={{ duration: 1 }}
       className="w-full max-w-xl lg:w-3/4 ml-10">
       <h6 className="mb-2 font-semibold text-xl">{project?.title}</h6>
       <p className="mb-4 text-neutral-400">{project?.description}</p>
       {
                  project?.technologies?.map((tech, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      {tech}
                    </span>
                  ))
         
       }
       <div className="mt-6">
       <Link to={`/details/${project?.id}`}>

<button
  type="submit"
  class="flex justify-center gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-black hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group text-black"
>
  Details
  <svg
    class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      class="fill-gray-800 group-hover:fill-gray-800"
    ></path>
  </svg>
</button>

       </Link>
       </div>
       </motion.div>
      </div> 
      )
      }
      </div>
    </div>
  );
};

export default Work;
