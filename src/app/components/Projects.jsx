import React from 'react';
const Projects = () => {
  return (
    <div id="Projects_Section" className=' relative flex flex-col bg-black'>
      <h3 className='text-3xl text-blue-400 p-4 pb-0 text-center font-semibold m-4'>Projects</h3>
      <span className='text-white text-center text-lg font-semibold mt-5'>Here are some recent projects I have worked on and am currently working on!</span>
      <div className='border border-gray-500 w-52 self-center mt-10' />

      <div className='grid place-items-center min-h-screen xs:grid-cols-2'>
        <div className="p-4 max-w-5xl gap-4 grid grid-cols-2 m-4">
        <div className="w-full max-w-lg p-2 relative">
          <a href='https://github.com/SaleemIbrahim1212/movieproj' target='_blank'> 
        <div className="group">
              <img
                className="w-full h-auto rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                src='/assests/mugiwara_demo.png'
                alt="image description"
                href
              />
              <div className="absolute h-fit bottom-2 left-2 right-2 px-4 py-2 bg-gray-800 opacity-0  group-hover:opacity-100 transition duration-300 ease-in-out">
                <h3 className="text-xl text-white font-serif font-bold">
                  Mugiwara
                </h3>
                <p className="mt-2 text-sm text-gray-300">Discover where to find tv shows and movies</p>
              </div>
              </div>
              </a>
          </div>
          
          <div className="w-full max-w-lg p-2 relative">
          <a href='https://fplpredictor.vercel.app/' target='_blank'> 

            <div className= "secondgroup group">
            <img
              className="w-full h-auto rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
              src='/assests/fantasy_web_app_demo.png'
              alt="image description"
            />
                <div className="absolute h-fit bottom-2 left-2 right-2 px-4 py-2 bg-gray-800 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <h3 className="text-xl text-white font-serif font-bold">
                  FPL Prediction Model
                </h3>
                <p className="mt-2 text-sm text-gray-300">Get Expected FPL Points and more! (work in progress!) </p>
              </div>
            </div>
            </a> 

          </div>

          <div className="w-full max-w-lg p-2 relative">

            <a href='https://github.com/Salzeem/KeepUp_AndroidApplication' target='_blank'> 
          <div className= "thirdgroup group">

            <img
              className="w-full h-2/3 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
              src="/assests/keepuplogotest.png"
              alt="image description"
            />
                    <div className="absolute h-fit bottom-2 left-2 right-2 px-4 py-2 bg-gray-800 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <h3 className="text-xl text-white font-serif font-bold">
                  Keep Up!
                </h3>
                <p className="mt-2 text-sm text-gray-300">A student and instructor management tool to keep up with studies!</p>
              </div>
          </div>
          </a>
          </div>

          <div className="w-full max-w-lg p-2 relative">
            <a className='https://github.com/SaleemIbrahim1212?tab=repositories' target='_blank'>
          <div className= "fourthgroup group">

            <img
              className="w-full h-2/3 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
              src="/assests/promptopiatwo.png"
              alt="image description"
            />
             <div className="absolute h-fit bottom-4 left-2 right-2 px-4 py-2 bg-gray-800 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <h3 className="text-xl text-white font-serif font-bold">
                  Promptopia
                </h3>
                <p className="mt-2 text-sm text-gray-300">Discover and share AI powered prompts </p>
              </div>
          </div>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
