import React from 'react';
import mugiwara_demo  from '../assests/mugiwara_demo.png';
const Projects = () => {
  return (
    <div className='flex flex-col'>
      <h3 className='text-3xl text-blue-400 p-4 pb-0 text-center font-semibold m-4'>Projects</h3>
      <span className='text-black text-center text-lg font-semibold mt-5'>Here are some recent projects I have worked on and am currently working on!</span>
      <div className='border border-gray-500 w-52 self-center mt-10' />

      <div className='grid place-items-center min-h-screen xs:grid-cols-2'>
        <div className="p-4 max-w-5xl gap-4 grid grid-cols-2 m-4">
          <div className="w-full max-w-lg p-2">
            <img
              className="w-full h-auto rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
              src='/assests/mugiwara_demo.png'
              alt="image description"
            />
          </div>

          <div className="w-full max-w-lg p-2">
            <img
              className="w-full h-auto rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
              src='/assests/fantasy_web_app_demo.png'
              alt="image description"
            />
          </div>

          <div className="w-full max-w-lg p-2">
            <img
              className="w-full h-2/3 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
              src="/assests/keepUpLogo.png"
              alt="image description"
            />
          </div>

          <div className="w-full max-w-lg p-2">
            <img
              className="w-full h-2/3 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
              src="/assests/promptopia.png"
              alt="image description"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
