"use client";

import React, { useState } from "react";

const Contact = () => {
  const [inputs, setInputs] = useState({});

  const handleInput = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {

  }
  return (
    <div>
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="flex items-center mb-4">
            <label htmlFor="name" className="w-1/4">
              Name:
            </label>
            <input
              onChange={handleInput}
              value={inputs.name ?? ""}
              type="text"
              id="name"
              name="name"
              className="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="email" className="w-1/4">
              Email:
            </label>
            <input

              onChange={handleInput}
              value={inputs.email ?? ""}
              type="email"
              id="email"
              name="email"

              className="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="message" className="w-1/4">
              Message:
            </label>
            <textarea
              onChange={handleInput}
               value={inputs.message ?? ""}
              id="message"
              name="message"

              className="border rounded px-2 py-1 w-3/4"
              rows="4"
            ></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
