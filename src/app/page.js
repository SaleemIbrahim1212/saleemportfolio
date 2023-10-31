import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Header from './components/Header';
import MessageForm from './components/MessageForm';
import Projects from './components/Projects';
import ParticleBackground from './components/ParticleBackground';

export default function Home() {
  return (
    
    <main className="h-full flex flex-col overflow-x-hidden w-full">
      
      <ParticleBackground /> {/* Particle background is in the background */}
      <Header />
      <About />
      <Experience />
      <Projects />
      <MessageForm />
    </main>
  );
}
