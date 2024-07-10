import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
      <Particles
          id="tsparticles"
          options={{
            background: {
              color: "#000000", // Black background
            },
            particles: {
              number: {
                value: 800,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#009933", // Matrix green color
              },
              shape: {
                type: "char",
                character: {
                  value: ["0", "1"], // Use binary characters
                  font: "Courier New",
                  style: "",
                  weight: "200",
                },
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 1.2,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 10,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              move: {
                enable: true,
                speed: 2,
                direction: "bottom",
                random: false,
                straight: true,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
      />
  );
}

export default Particle;
