import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function ContactFormModal() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        <div className="w-90 h-80 bg-white rounded-md ">
          <h1 className="text-xl text-center font-medium">Contact us</h1>
          <div className="m-12 ">
            {/* name */}
            <div className="">
              <label htmlFor="">Name : </label>
              <input type="text" className="bg-gray-100 rounded-sm" />
            </div>
            <br />
            {/* email */}
            <div>
              <label htmlFor="">Email : </label>
              <input type="email" className="bg-gray-100 rounded-sm " />
            </div>
            <br />
            {/* message */}
            <div>
              <label htmlFor="">Message : </label>
              <input type="text" className="bg-gray-100 rounded-sm " />
            </div>
            <br />
            {/* submit button */}
            <div className="flex justify-center">
                <button className="text-center bg-black text-white p-2 rounded-sm pl-20 pr-20 hover:bg-gray-700 hover:scale-105 duration-800">Submit</button>
            </div>
            
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ContactFormModal;
