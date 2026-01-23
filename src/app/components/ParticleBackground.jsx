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
              onHover: {
                enable: true,
                mode: "connect",
              },
              resize: true,
            },
            modes: {
              connect: {
                distance: 140,
                radius: 80,
              },
            },
          },
          particles: {
            color: {
              value: ["#E8F1FF", "#BFD7FF", "#8FB8FF"],
            },
            links: {
              enable: true,
              color: "#9FB7FF",
              distance: 140,
              opacity: 0.45,
              width: 1,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              limit: 0,
              value: 180,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.1,
                speed: 0.8,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.2,
              },
              value: 0.7,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.4,
              },
              value: 1.4,
            },
            move: {
              enable: true,
              speed: 0.45,
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
