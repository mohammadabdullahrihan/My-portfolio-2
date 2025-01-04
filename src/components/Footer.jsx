import React from 'react';
import { motion } from 'framer-motion';
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center text-primary-content p-10">
        <motion.aside
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        >
          <h3 className='text-7xl text-white font-thin mr-8 '>R</h3>
          <p className="font-bold text-lg text-gray-500 mr-8 ">
            MERN Developer
          </p>
        </motion.aside>
        <nav className=" grid grid-cols-1 lg:flex ml-[69px] lg:ml-0 lg:space-x-[250px] ">
          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-left">
            <div className="flex">
              <div className="">
              <h3 className='text-4xl text-gray-300 font-semibold mr-8 '>R</h3>
              </div>
            </div>
            <h1 className="mt-3 text-gray-500">
              I am a MERN Stack web Developer with <br />sull-stack web applicaions using React,<br /> Node.js, Express.js and MongoDB.
            </h1>
          </motion.div>

          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          >
            <ul className="flex flex-col mt-5 space-y-3 text-gray-500 -ml-[60px] lg:ml-5  ">
              <h1 className="text-lg font-semibold text-gray-300">Links</h1>
              <li className="">
                <a href="#">About</a>
              </li>
              <li className="">
                <a href="#">Project</a>
              </li>
              <li className="">
                <a href="#">Technologies</a>
              </li>
              <li className="">
                <a href="#">Contact</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          >
            <h1 className="lg:text-2xl font-medium mb-5 text-gray-500 -ml-[50px] lg:-ml-0 ">
              Receive notifications about news
            </h1>
            <input
              placeholder="Email"
              type="text"
              className="px-[60px] -ml-[50px] lg:-ml-0 py-7 bg-gray-200 rounded-2xl"
            />
            <button className="px-[50px] -ml-[50px] lg:-ml-8 py-5 text-white bg-black text-lg font-medium rounded-full hover:text-black hover:bg-white hover:border border-black transition-all duration-300 ease-in-out ">
              Send
            </button>
          </motion.div>
        </nav>
        <p className="mt-3 font-medium text-gray-500">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </footer>
        </div>
    );
};

export default Footer;