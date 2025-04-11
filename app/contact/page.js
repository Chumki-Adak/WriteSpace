import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-gray-700 text-center mb-6">For inquiries, please reach out to me:</p>
      <p className="text-gray-800">Name: <span className="font-semibold">John Doe</span></p>
      <p className="text-gray-800">Email: <span className="font-semibold">johndoe@example.com</span></p>
      <p className="text-gray-800">Phone: <span className="font-semibold">(123) 456-7890</span></p>
      <form className="mt-6">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">
            Your Name:
          </label>
          <input className="mt-1 block w-full p-2 border border-gray-300 rounded" type="text" name="name" id="name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Your Email:
          </label>
          <input className="mt-1 block w-full p-2 border border-gray-300 rounded" type="email" name="email" id="email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">
            Your Message:
          </label>
          <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded" name="message" id="message" />
        </div>
        <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;