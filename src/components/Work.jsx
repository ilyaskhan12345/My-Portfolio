import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import realestate from "../assets/realestate.jpg";
import food from "../assets/food.png";
import commerce from "../assets/commerce.png"
// import '../index.css';

const Work = () => {
  return (
    <div name='work' className="w-full  text-gray-300 bg-[#0a192f] ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Work
          </p>
          <p className="py-6">//Check out some of my recent work </p>
        </div>
               {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4" >
  
             {/* Grid Item */}
   <div  style={{ backgroundImage: `url(${food})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
          
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center  ">
                <a href="https://ilyaskhan12345.github.io/Food-App/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ilyaskhan12345/Food-App">
                  <button>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div  style={{ backgroundImage: `url(${commerce})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
          
          {/* Hover Effects */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font-bold text-white tracking-wider">
              React JS Application
            </span>
            <div className="pt-8 text-center  ">
              <a href="https://ilyaskhan12345.github.io/React-Cart/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                  Demo
                </button>
              </a>
              <a href="https://github.com/ilyaskhan12345/Food-App">
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>
        <div  style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
          
          {/* Hover Effects */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font-bold text-white tracking-wider">
              React JS Application
            </span>
            <div className="pt-8 text-center  ">
              <a href="#">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                  Demo
                </button>
              </a>
              <a href="/">
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>
        <div  style={{ backgroundImage: `url(${realestate})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
          
          {/* Hover Effects */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font-bold text-white tracking-wider">
              React JS Application
            </span>
            <div className="pt-8 text-center  ">
              <a href="#">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                  Demo
                </button>
              </a>
              <a href="/">
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>
        <div  style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
          
          {/* Hover Effects */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font-bold text-white tracking-wider">
              React JS Application
            </span>
            <div className="pt-8 text-center  ">
              <a href="#">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                  Demo
                </button>
              </a>
              <a href="/">
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>
        <div  style={{ backgroundImage: `url(${realestate})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ">
          
          {/* Hover Effects */}
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font-bold text-white tracking-wider">
              React JS Application
            </span>
            <div className="pt-8 text-center  ">
              <a href="#">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                  Demo
                </button>
              </a>
              <a href="/">
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
