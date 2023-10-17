import React from 'react'

const About = () => {
  return (

    <div className='flex justify-center p-4 m-20'> 
    <div className='flex flex-col'> 
        <h3 className='text-3xl text-blue-400 p-4 pb-0 text-center font-semibold m-4'>About</h3>
        <h1 className='text-5xl text-black text-center font-bold'> More About Me </h1>
        <span className='text-black text-center text-lg font-semibold mt-5'> I am a recent computer science and psychology graduate at Wilfrid Laurier University with a passion for solving problems </span>
        <span className='text-black text-center text-lg font-semibold mt-2'>and an interest in technology including <span className='text-blue-800'> machine learning and natural language processing.</span></span>
        <div className='border border-gray-500 w-52 self-center mt-10'/> 
        <div className='flex flex-row justify-center m-10 '> 

<div className='flex-col m-6 ml-0 p-6 self-center mt-4 w-4/6 flex flex-wrap right-0'>
<h1 className='text-black  font-bold text-2xl px-4 self-center lef '> Hello! </h1>
<p className='text-black text-center mt-4 py-1'> I am Saleem a computer science and psychology student with experience in web dev and help desk/customer support. I have previously worked as a <span className='text-purple-900'> Teaching and Learning Systems Assistant at Wilfrid Laurier University</span></p>
<p  className='text-black text-center mt-4'> I primarly use Python to write my code and often other Javascript Framewoks such as React and Next.js. I have also worked with <span className='text-green-300'> Android Studio</span>, writing android apps in Java and currently learning how to write apps in Flutter! </p>
<p  className='text-black text-center mt-4 '> One of my main intresets is in machine learning and artificial intelligence , currently I recently completed a <span className='text-red-300'> machine learning specialization </span>at Coursera and currently seeking to complete the amazing Deep Learning Specialization there!  </p>
<p  className='text-black text-center mt-4 '> Besides these I often enjoy going for runs, I have been doing so for the past 2 years now, I also like watching soccer, my favorite team to watch every weekend is chelsea and I often love books, <span className='text-blue-500'>here are some books I have read so far </span>  </p>
<button className='bg-black text-white w-full mt-6 h-16'> Download My Resume </button>
</div>

<div className='flex flex-col w-full mt-16'> 

<h1 className='text-black self-center font-bold text-2xl px-4'> My Skills</h1>
<h3 className='text-black font-bold'> React </h3>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full" style={{width: "80%"}}></div>

</div>

<h3 className='text-black font-bold mt-8'> Python </h3>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full" style={{width: "80%"}}></div>
  </div> 
  <h3 className='text-black font-bold mt-8'> Java </h3>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full" style={{width: "70%"}}></div>

  <h3 className='text-black font-bold mt-8'> C/C++ </h3>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full" style={{width: "60%"}}></div>

  <h3 className='text-black font-bold mt-8'> Firebase </h3>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full" style={{width: "83%"}}></div>
</div> 
<h3 className='text-black font-bold mt-8'> Prolog </h3>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full" style={{width: "30%"}}></div>
  </div> 

  <h3 className='text-black font-bold mt-8'> Koitlin </h3>
<div class="w-full bg-gray-600 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full" style={{width: "40%"}}></div>
  </div> 

  <button className=' font-bold ml-14 self-center bg-gray-200 text-black w-4/5 mt-6 h-16'> Send Me a Message! </button>

</div>
</div>
</div> 
        </div>



    
    </div>
    </div>
  )
}

export default About