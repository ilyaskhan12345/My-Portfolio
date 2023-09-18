import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import TAILWIND from '../assets/tailwind.png';
import JAVASCRIPT from '../assets/javascript.png';
import react from '../assets/react.png';
import NODE from '../assets/node.png';
import MONGO from '../assets/mongo.png';
import GITHUB from '../assets/github.png';
import FIREBASE from '../assets/firebase.png';
import AWS  from '../assets/aws.png';

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen  bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
        <div className='sm:text-right pb-2 pl-4 '>
           <p className=' text-4xl font-bold  inline border-b-4 border-pink-600  '>Skills</p>
        </div>
        <div>
            <p className='pt-3 text-2xl '>//These are the technologies i have worked with </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '> 
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={HTML}  alt=" Html icon" />
                <p className='mt-2'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={CSS}  alt=" Css icon" />
                <p className='mt-2'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={TAILWIND}  alt="Tailwind icon" />
                <p className='mt-2'>TAILWIND</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={JAVASCRIPT}  alt="Javascript icon" />
                <p className='mt-2'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={react}  alt="react icon" />
                <p className='mt-2'>react</p>
            </div>
            { <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={NODE}  alt="Node icon" />
                <p className='mt-2'>NODE</p>
            </div> }
            {<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={MONGO}  alt="Mongo icon" />
                <p className='mt-2'>MONGO</p>
            </div> }
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={GITHUB}  alt="Github icon" />
                <p className='mt-2'>GITHUB</p>
            </div>
            {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={FIREBASE}  alt="Firebase icon" />
                <p className='mt-2'>FIREBASE</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={AWS}  alt=" Aws icon" />
                <p className='mt-2'>AWS</p>
            </div> */}
            </div>
        </div>
    </div>
  )
}

export default Skills;