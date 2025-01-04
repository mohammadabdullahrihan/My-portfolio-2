import React from "react";
import bgnews from "/public/assets/review.jpg";
import { BiLogoGmail } from "react-icons/bi";
import { FaHouse, FaSquarePhone } from "react-icons/fa6";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
    whileInView={{ opacity: 1, x: 0 }}
     initial={{ opacity: 0, x: 100 }}
     transition={{ duration: 1 }}
    className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center font-thin text-4xl">Contact</h2>
      <div className="lg:flex p-10  m-5">
        <div className="">
          <img
            className="xl:rounded-l-[50px] xl:w-[900px]"
            src={bgnews}
            alt="Newsletter Background"
          />
        </div>

        <div className="bg-black flex justify-center lg:px-[120px] lg:py-[50px] rounded-r-[50px]">
          <div className="px-4 text-center space-y-8 bg-black">
            <h2 className="text-3xl font-bold mb-6 text-white">Get In Touch</h2>

             <div className="flex space-x-2">
              <BiLogoGmail className="text-3xl text-white" />
              <p className="text-white xl:text-2xl font-thin">glbboys10@gmail.com </p>
             </div>

             <div className="flex space-x-2">
              <FaSquarePhone className="text-3xl text-white" />
              <p className="text-white font-thin xl:text-2xl">
                +8801771977134
              </p>
             </div>

             <div className="flex space-x-2">
              <FaHouse className="text-3xl text-white" />
              <p className="text-white font-thin xl:text-2xl">
                Dhaka,Bangladesh
              </p>
             </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

{
  /* <button
  type="submit"
  className="text-white bg-black rounded-full px-6 py-4 hover:text-black hover:bg-white hover:border border-black transition-all duration-300 ease-in-out"
>
  Subscribe
</button> */
}
