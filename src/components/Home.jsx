import React from 'react'
// import { icons } from 'react-icons';
// import HeroImage from '../assets/heroImage.png';
import priyanka from '../assets/priyanka.png';

import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from "react-scroll";

const Home = () => {
  return (
    <div name="home"
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className="text-4xl text-white sm:text-7xl font-bold">I'm a FrontEnd Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam in tempore, suscipit ipsum repudiandae, quas eos, placeat ad sapiente vero neque enim amet quisquam soluta doloremque obcaecati? Sint, non dolor!
          </p>
          <div>
            <Link
              to='portfolio'
              smooth duration={500} 
              className=' group w-fit flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-1 text-white rounded-md cursor-pointer'>
                Portfolio 
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25}
                className="ml-1"/>
              </span>
            </Link>
            
          </div>
        </div>
        <div>
          <img src={priyanka} alt="my-profile" className='rounded-3xl mx-auto w-2/3 md:w-2/3 md:mt-10' />
        </div>
      </div>
      
      
    </div>
  )
}

export default Home