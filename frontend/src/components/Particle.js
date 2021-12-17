import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 300,
              duration: 0.3,
              opacity: 0.8,
              size: 100,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 300,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 900,
            },
            value: 25,
          },
          opacity: {
            value: 0.5,
            animation: {
                enable: true,
                speed: 1,
                sync: true,
                minimumValue:0.1
            }
          },
          size: {
            random: {
                enable: true,
            },
            animation: {
                enable: true,
                minimumValue: 3,
                speed: 1,
                sync: true
            },
            value: 7,

          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;