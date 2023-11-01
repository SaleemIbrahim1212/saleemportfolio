import Link from 'next/link';
import React from 'react';
const About = () => {
  return (
    <div className='relative bg-black flex justify-center p-4 m-0 ml-0 mr-0 mb-0'>
      <particleBackground />
      <div id="About_Section" className='flex flex-col'>
        <h3 className='text-3xl text-blue-400 p-4 pb-0 text-center font-semibold m-4'>About</h3>
        <h1 className='text-5xl text-blue-500 text-center font-bold'> More About Me </h1>
        <span className='text-white text-center text-lg font-semibold mt-5'>
          I am a computer science and psychology graduate from Wilfrid Laurier University with a passion for solving problems
        </span>
        <span className='text-white text-center text-lg font-semibold mt-2'>
          and an interest in new technology like <span className='text-blue-800'> machine learning and natural language processing systems.</span>
        </span>
        <div className='border border-gray-500 w-52 self-center mt-10' />

        <div className='w-full grid  sm:grid lg:grid-cols-2 sm:grid-cols-1 m-10 h-full'>
          <div className='flex-col lg:m-6 lg:ml-0 p-6 self-center mt-4 w-full flex flex-wrap right-0'>
            <h1 className='text-white  font-bold text-2xl lg:px-4 sm:px-0 self-center '> Hello! </h1>
            <p className='text-white text-center mt-4 py-1'>
            I am Saleem, a computer science and psychology graduate with experience in web development and help desk/customer support. I previously worked as a <span className='text-purple-500'>Teaching and Learning Systems Assistant  </span> at <a href='https://www.wlu.ca/' target='_blank' className=' text-yellow-600'> Wilfrid Laurier University. </a> 
                        </p>
            <p className='text-white text-center mt-4'>
              I primarily enjoy using Python to write my code and often other Javascript Frameworks such as React and Next.js to write web apps. I have also worked with Android Studio, writing full stack native <a href='https://github.com/Salzeem/KeepUp_AndroidApplication' className='text-green-300 hover:animate-pulse'>android apps in Java </a> and currently learning how to work with Koitlin!
            </p>
            <p className='text-white text-center mt-4 '> One of my main interests is in machine learning and artificial intelligence. I recently completed a <a href='https://coursera.org/share/0aa582dd3e07dc915b74373d503bc0f0' target='_blank' className='text-red-300 hover:animate-pulse'> machine learning specialization </a> at Coursera and I am currently working to complete the Deep Learning Specialization there!
            </p>
            <p className='text-white text-center mt-4 '> 
           
In addition to my professional pursuits, I'm quite passionate about a few personal interests. For the past couple of years, I've been lacing up my running shoes regularly. On the weekends, you'll often find me eagerly following Chelsea's soccer matches. I'm also an ardent bookworm, and there's nothing quite like getting lost in a good read. <a  href='https://radial-fisher-ac1.notion.site/dd5ea14a90ee4386a5b62de692611393?v=94b39d214dd243aabd143a4fb6d74d2e&pvs=4' target='_blank' className='text-blue-500 hover:animate-pulse'>Here is my booklist so far </a>
            </p>
          </div>

          <div className='flex flex-col mt-14 w-11/12 mr-10'>
            <h1 className='text-white self-center font-bold text-2xl px-4'> My Skills</h1>
            <h3 className='text-white font-bold'> React </h3>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
            </div>
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
          <Link href="https://drive.google.com/file/d/1snaW1R9v7Td2UArQIpz2KNEXu7hf-PUi/view?usp=sharing" target='_blank'> <button className='font-bold ml-14 lg:mb-0 sm:mb-5 self-center border border-blue-300 bg-black text-white w-11/12 h-16'> Check out My Resume! </button> </Link>
          <Link href = "#Message_Form"> <button className=' font-bold ml-14 self-center lg:mt-0 sm:mt-6 bg-gray-200 text-black w-11/12 h-16'> Send Me a Message! </button></Link>
        </div>
      </div>
    </div>
  );
}

export default About;
