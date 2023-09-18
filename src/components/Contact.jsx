import React from "react";

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 text-gray-300">
       <form method="POST" action="https://getform.io/f/d025c5f1-812b-4d00-aecc-a822ecdfcef8">
        <div className="">
          <p className=" text-4xl font-bold inline border-b-4 border-pink-600 ">Contact</p>
          <p className="text-gray-300 py-5">Submit the form below or shoot me an email ilyas940170@gmail.com </p>
        </div>
        <input className="bg-[#ccd6f6] p-2 text-black w-full" type="text" placeholder="Name" name="name" />
       <div>
        <input className="my-4  p-2 bg-[#ccdcf6]  text-black w-full" type="email" placeholder="Email" name="email"  />
        </div>
        <textarea className="bg-[#ccd6f6] text-black w-full" name="Message" id="" cols="30" rows="10"></textarea>
      
        <button className=" border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto flex items-center  ">let's Colloborate</button>
       </form>
    </div>
  );
};

export default Contact;
