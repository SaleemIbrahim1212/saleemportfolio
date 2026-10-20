import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Header from './components/Header';
import MessageForm from './components/MessageForm';
import Projects from './components/Projects';


export default function Home() {
  return (

    <main className="h-full flex flex-col overflow-x-hidden w-full">


      <Header />
      <Experience />
      <About />
      <Projects />
      <MessageForm />
    </main>
  );
}
