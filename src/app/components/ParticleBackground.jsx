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
              value: ["#FFFFFF", "#C7DFFF", "#9FB7FF"],
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              limit: 0,
              value: 280,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.1,
                speed: 0.6,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.2,
              },
              value: 0.9,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.4,
              },
              value: 1.2,
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              straight: false,
              outModes: {
                default: "out",
              },
            },
          },
        }}
        init={particlesInit}
      />
    </div>
  );
};

export default particleBackground;
