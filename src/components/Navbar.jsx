import React, { useState } from 'react';
import {FaBars , FaTimes ,FaGithub , FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail, } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo1.png';
import '../index.css';
import {Link} from 'react-scroll';


const Navbar = () => {
      
  const [nav,setNav] = useState();
  const handleClick = () => {
        setNav(!nav);
       
  }
  
  return (
    <div className='fixed w-full h-[100px] items-center px-4 bg-[#0a192f] text-gray-300'>
    <div>
    <img src={Logo} alt='Logo image' style={{width :'70px'}}/>
    </div>
    
      {/* menu */}
      
      <ul className=" hidden md:flex justify-center justify-around ">
          <li >
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} >
         Home
        </Link>
        </li>
          <li >
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} >
         About
        </Link>
          </li>
          <li >
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} >
          Skills
        </Link>
          </li>
          <li >
          <Link activeClass="active" to="work" spy={true} smooth={true} offset={50} duration={500} >
          Work
        </Link>
          </li>
          <li >
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} >
          Contact
        </Link>
          </li>
      </ul>
      
            {/* Hamburger */}
          <div onClick={handleClick} className=' md:hidden z-10  '>
            {!nav ? <FaBars /> : <FaTimes/>}
          </div>

              {/* Mobile Menu */}
             <ul className={!nav ? 'hidden' : 'absolute  left-0 w-full h-screen  bg-[#0a192f] flex flex-col justify-center items-center'}>
              <li className='py-6 text-4xl'>  <Link onClick={handleClick} activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} >
         Home
        </Link></li>
              <li className='py-6 text-4xl'> <Link onClick={handleClick}  activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} >
         About
        </Link></li>
              <li className='py-6 text-4xl'> <Link onClick={handleClick}  activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} >
          Skills
        </Link></li>
              <li className='py-6 text-4xl' ><Link onClick={handleClick}  activeClass="active" to="work" spy={true} smooth={true} offset={50} duration={500} >
          Work
        </Link></li>
              <li className='py-6 text-4xl'><Link onClick={handleClick}  activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} >
          Contact
        </Link></li>
              </ul>
           


          {/* Social Icons */}
          <div className='hidden lg:flex fixed flex-col top-[35%] '>
            <ul>
              <li className='w-[160px] h-[60px] flex justify-between items-center 
                  ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600 '>
                    
                <a className='flex justify-between items-center width-full text-gray-300'
                 href='#'> LinkedIn < FaLinkedin size={30} />
                </a>
              </li>

              <li className='w-[140px] h-[60px] flex justify-between items-center 
                  ml-[-80px] hover:ml-[-10px] duration-500 bg-[#333333]'>
                    
                <a className='flex justify-between items-center width-full text-gray-300'
                 href='#'> Github < FaGithub size={30} />
                </a>
              </li>

              <li className='w-[135px] h-[60px] flex justify-between items-center 
                  ml-[-75px] hover:ml-[-10px] duration-500 bg-[#6fc2b0] '>
                    
                <a className='flex justify-between items-center width-full text-gray-300'
                 href='#'> Email < HiOutlineMail size={30} />
                </a>
              </li>

              <li className='w-[155px] h-[60px] flex justify-between items-center 
                  ml-[-95px] hover:ml-[-10px] duration-500 bg-[#565f69] '>
                    
                <a className='flex justify-between items-center width-full text-gray-300'
                 href='#'> Resume< BsFillPersonLinesFill size={30} />
                </a>
              </li>

            </ul>
          </div>
    </div>
  
    )
}

export default Navbar;