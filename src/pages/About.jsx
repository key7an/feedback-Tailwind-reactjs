import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-lime-200 h-fit max-w-sm gap-2 p-5 rounded-lg shadow-inner shadow-black">
      <p className="mb-5 text-purple-500 shadow-sm shadow-black bg-sky-300 p-3">
        This is a feedback page which you can leave your comment and rating
        about our project!
      </p>
      <p className="text-sm opacity-50 ">Version: 1.5.0.3</p>
      <Link to="/" className="text-lg text-purple-500 font-bold">
        <FaHome />
      </Link>
    </div>
  );
};

export default About;
