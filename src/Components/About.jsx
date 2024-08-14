import React from 'react'
import kemi from '../assets/about image.png'
const About = () => {
  return (
    <div className='bg-black text-white py-20'id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About me</h2>
            <div className='flex flex-col md:flex-row item-center md:space-x-12'>
                <img src={kemi} alt='' 
                className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
                
                <div className='flex-1'>
                <p className='text-lg mb-8'>
                As a highly motivated and skilled professional, I am seeking opportunities that allow me to apply my expertise in Industrial and Environmental Chemistry and advance my career as a Web Programmer. My goal is to contribute to innovative projects and build a successful career in the Information Technology field.
                </p>
                
                <div className='space-y-4'>
                    <div className='flex items-center'>
                        <label htmlFor='htmlandcss' className='w-2/12'>
                        HTML & CSS
                        </label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'
                            ></div>
                        </div>
                    </div>
                    
                    <div className='flex items-center'>
                        <label htmlFor='javascript' className='w-2/12'>
                        JavaScript
                        </label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-6/12'
                            ></div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor='node.js' className='w-2/12'>
                        Node.js
                        </label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'
                            ></div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor='react.js' className='w-2/12'>
                        React.js
                        </label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'
                            ></div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor='Tailwind.css' className='w-2/12'>
                        Tailwind.css
                        </label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'
                            ></div>
                        </div>
                    </div>

                    <div>
                        <div className='mt-12 flex justify-between text-center'>
                            <div>
                               <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    3+
                                </h3>
                                <p>Years Experience</p>
                            </div>

                            <div>
                               <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    10+
                                </h3>
                                <p>Project completed</p>
                            </div>
                            <div>
                               <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    10+
                                </h3>
                                <p>Happy Client</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About