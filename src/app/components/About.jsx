import React from 'react';
import SkillBar from '../containers/SkillBar';
import particleBackground from './ParticleBackground';

const About = () => {
  return (
    <div className='relative bg-black flex justify-center p-4 m-0 ml-0 mr-0 mb-0'>
      <particleBackground />
      <div id="About_Section" className='flex flex-col'>
        <h3 className='text-3xl text-blue-400 p-4 pb-0 text-center font-semibold m-4'>About</h3>
        <h1 className='text-5xl text-black text-center font-bold'> More About Me </h1>
        <span className='text-white text-center text-lg font-semibold mt-5'>
          I am a recent computer science and psychology graduate at Wilfrid Laurier University with a passion for solving problems
        </span>
        <span className='text-white text-center text-lg font-semibold mt-2'>
          and an interest in technology including <span className='text-blue-800'> machine learning and natural language processing.</span>
        </span>
        <div className='border border-gray-500 w-52 self-center mt-10' />

        <div className='w-full grid  sm:grid lg:grid-cols-2 sm:grid-cols-1 m-10 h-full'>
          <div className='flex-col lg:m-6 lg:ml-0 p-6 self-center mt-4 w-full flex flex-wrap right-0'>
            <h1 className='text-white  font-bold text-2xl lg:px-4 sm:px-0 self-center '> Hello! </h1>
            <p className='text-white text-center mt-4 py-1'>
              I am Saleem, a computer science and psychology student with experience in web dev and help desk/customer support. I have previously worked as a <span className='text-purple-900'> Teaching and Learning Systems Assistant at Wilfrid Laurier University</span>
            </p>
            <p className='text-white text-center mt-4'>
              I primarily use Python to write my code and often other Javascript Frameworks such as React and Next.js. I have also worked with <span className='text-green-300'> Android Studio</span>, writing android apps in Java and currently learning how to write apps in Flutter!
            </p>
            <p className='text-white text-center mt-4 '> One of my main interests is in machine learning and artificial intelligence, and I recently completed a <span className='text-red-300'> machine learning specialization </span> at Coursera and am currently seeking to complete the amazing Deep Learning Specialization there!
            </p>
            <p className='text-white text-center mt-4 '> Besides these, I often enjoy going for runs. I have been doing so for the past 2 years now. I also like watching soccer; my favorite team to watch every weekend is Chelsea. I also love books, <span className='text-blue-500'>here are some books I have read so far</span>
            </p>
          </div>

          <div className='flex flex-col mt-14 w-11/12 mr-10'>
            <h1 className='text-white self-center font-bold text-2xl px-4'> My Skills</h1>
            <h3 className='text-white font-bold'> React </h3>
            <SkillBar percentage={"80"} />

            <h3 className='text-white font-bold mt-8'> Python </h3>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
            </div>

            <h3 className='text-white font-bold mt-8'> Java </h3>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: "70%" }}></div>
            </div>

            <h3 className='text-white font-bold mt-8'> C/C++ </h3>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: "60%" }}></div>
            </div>

            <h3 className='text-white font-bold mt-8'> Firebase </h3>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: "83%" }}></div>
            </div>
            <h3 className='text-white font-bold mt-8'> Prolog </h3>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: "30%" }}></div>
            </div>
          </div>
        </div>

        <div className='grid lg:grid-cols-2 sm:grid-cols-1 w-full self-center'>
          <button className='font-bold ml-14 lg:mb-0 sm:mb-5 self-center border border-blue-300 bg-black text-white w-11/12 h-16'> Download My Resume! </button>
          <button className=' font-bold ml-14 self-center lg:mt-0 sm:mt-6 bg-gray-200 text-black w-11/12 h-16'> Send Me a Message! </button>
        </div>
      </div>
    </div>
  );
}

export default About;
