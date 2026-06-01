import { AnimatePresence, motion } from "framer-motion";
import React from 'react'

function ContactFormModal() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        <div className="w-90 h-90 bg-white rounded-md">
            <h1 className="text-xl text-center">Contact us</h1>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ContactFormModal