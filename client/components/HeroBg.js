import { html, useEffect, reactive, getRef } from "z-js-framework";
import "../styles/custom.css";

export const HeroBg = (props) => {
  const UI = html`
    <div class="relative h-screen">
      <canvas
        ref="animatedCanvasRef"
        class="absolute inset-0 left-[-30vw] sm:left-[-20vw] lg:left-[-10vw]
         right-0 -top-60 w-[130vw] sm:w-[120vw]
         h-screen z-[1] rotate-[-15deg]"
      ></canvas>
      <div class="absolute inset-0 w-full h-auto z-10">${props.content}</div>
    </div>
  `;

  useEffect(() => {
    const canvas = getRef("animatedCanvasRef");
    const ctx = canvas.getContext("2d");

    let width, height;
    const colors = ["#7e88c3", "#4dabf7", "#3bc9db", "#748ffc"];
    const waves = [];

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function createWaves() {
      colors.forEach((color, index) => {
        waves.push({
          color,
          baseAmplitude: 50 + Math.random() * 100,
          amplitudeOffset: Math.random() * 20,
          wavelength: 0.005 + Math.random() * 0.01,
          speed: 0.1 + Math.random() * 0.2,
          phase: Math.random() * Math.PI * 2,
          oscillationSpeed: 0.01 + Math.random() * 0.03,
          time: 0,
        });
      });
    }

    function animateWaves() {
      ctx.clearRect(0, 0, width, height);

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);

        const dynamicAmplitude =
          wave.baseAmplitude + Math.sin(wave.time) * wave.amplitudeOffset;

        for (let x = 0; x <= width; x += 10) {
          const y =
            Math.sin(x * wave.wavelength + wave.phase) * dynamicAmplitude +
            height / 2;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0.85, wave.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fill();

        wave.phase += wave.speed * 0.02;
        wave.time += wave.oscillationSpeed;
      });

      requestAnimationFrame(animateWaves);
    }

    createWaves();
    animateWaves();
  }, []);

  return reactive(() => UI);
};
