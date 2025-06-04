import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Starfield() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "#000000",
        },
        particles: {
          number: {
            value: 150,
            density: { enable: true, value_area: 1000 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true,
          },
          size: {
            value: 2,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            outMode: "bounce",
          },
        },
      }}
    />
  );
}
