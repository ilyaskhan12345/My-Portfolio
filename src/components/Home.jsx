import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f]">
      {/* Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-[#e9e9e9] ">
        <p className="text-pink-600 mt-14">Hi, my name is </p>
        <h1 className="text-2xl sm:text-7xl font-bold  text-[#ccdcf6]">
          Muhammad Ilyas
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8898b0]">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#8898b0]  py-4 max-w-[700px]">
          I'm a Frontend Developer with a strong focus on React.js, dedicated to
          crafting captivating user interfaces and seamless web experiences.
          With expertise in HTML, CSS, and JavaScript, I strive to create
          visually stunning and responsive websites that leave a lasting
          impression, let's connect to collaborate on exciting new ventures.
        </p>

        <div>
          <button
            className="text-white group border-2 px-6 py-2 my-2 flex items-center
               hover:bg-pink-600 hover:border-pink-600 "
          >
         
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
