import React from 'react'


import Head from 'next/head';

const Page = () => {
  return (
    <div className="container mx-auto p-6 text-center">
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our organization." />
      </Head>
      <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
      <p className="mt-4 text-gray-600">
        Welcome to our website! We are dedicated to providing the best service possible.
        Our team is passionate about what we do and we strive to exceed your expectations.
      </p>
      <h2 className="mt-6 text-2xl font-semibold text-gray-700">Our Mission</h2>
      <p className="mt-2 text-gray-600">
        Our mission is to deliver high-quality products and services that enhance the lives of our customers.
      </p>
      <h2 className="mt-6 text-2xl font-semibold text-gray-700">Our Values</h2>
      <ul className="mt-2 list-disc list-inside text-gray-600">
        <li>Integrity</li>
        <li>Innovation</li>
        <li>Customer Satisfaction</li>
      </ul>
    </div>
  );
};



export default Page
