'use client'
import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const particleBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className='absolute bg-black'>
      <Particles
        options={{
          background: {
            color: "#000000",
          },
          fpsLimit: 60,
          interactivity: {
            detect_on: "canvas",
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
            },
            number: {
              density: {
                enable: true,
                area: 1080,
              },
              limit: 0,
              value: 400,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 3,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.05,
              },
              value: 1,
            },

            size: {
              random: {
                enable: true,
                minimumValue: 0.5,
              },
              value: 1,
            },
          },
        }}
        init={particlesInit}
      />
    </div>
  );
};

export default particleBackground;
