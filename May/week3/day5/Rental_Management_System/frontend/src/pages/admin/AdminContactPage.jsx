import { Contact, Locate } from "lucide-react";
import React, { useState } from "react";
import ContactFormModal from "../../components/modals/ContactFormModal";

function AdminContactPage() {
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="max-w-7xl mx-auto mt-20">
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold text-black">Contact Us</h2>
      <p className="text-center">Get in Touch!</p>
      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row gap-12 mt-30">
        {/* Left Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-black mb-4">
            Let's Connect
          </h3>

          <p className="text-gray-600 leading-8">
            We are here to assist you with any questions, support requests, or
            any inquiries. Our team is committed to providing prompt and
            reliable assistance. Feel free to reach out through the contact
            details provided and we'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setShowContact(true)}
            className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Contact us!
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <ul className="space-y-5">
            {/* Phone */}
            <li className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6 hover:bg-gray-100 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <Contact />
              </div>

              <div>
                <h4 className="font-semibold text-black">Phone</h4>
                <p className="text-gray-600 mt-1">+91 98765 43210</p>
              </div>
            </li>

            {/* Address */}
            <li className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6 hover:bg-gray-100 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <Locate />
              </div>

              <div>
                <h4 className="font-semibold text-black">Address</h4>
                <p className="text-gray-600 mt-1">
                  123 Business Street, Ranchi, Jharkhand, India
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {showContact && <ContactFormModal />}
    </div>
  );
}

export default AdminContactPage;
