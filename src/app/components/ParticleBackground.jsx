'use client'
import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const particleBackground = () => {
  const particlesInit = async (engine) => {
    // Initiate the tsParticles instance (engine) here
    await loadFull(engine);
  };

  return (
    <div className='absolute' style={{ backgroundColor: 'black' }}>
      <Particles
        options={{
          background: {
            // Set the background color to black
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
              // Set the color to your desired value
              value: "#9fafca",
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
                speed: 1,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.05,
              },
              value: 1,
            },
            shape: {
              // Set the shape to "polygon" and specify the sides for a hexagon
              type: "polygon",
              sides: 6, // 6 sides for a hexagon
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
