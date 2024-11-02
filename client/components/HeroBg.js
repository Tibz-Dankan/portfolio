import { html, useEffect, reactive, getRef } from "z-js-framework";
import "../styles/custom.css";

export const HeroBg = (props) => {
  const UI = html`
    <div class="relative h-screen">
      <canvas
        ref="animatedCanvasRef"
        class="absolute inset-0s left-[-10vw] right-0 -top-60 w-[120vw]
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
    const shapes = [];

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function createShapes() {
      for (let i = 0; i < 15; i++) {
        shapes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: 200 + Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
        });
      }
    }

    function animateShapes() {
      ctx.clearRect(0, 0, width, height);
      shapes.forEach((shape) => {
        ctx.beginPath();
        ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          shape.x,
          shape.y,
          shape.size * 0.5,
          shape.x,
          shape.y,
          shape.size
        );
        gradient.addColorStop(0, shape.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fill();

        shape.x += shape.speedX;
        shape.y += shape.speedY;

        if (shape.x < -shape.size) shape.x = width + shape.size;
        if (shape.x > width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = height + shape.size;
        if (shape.y > height + shape.size) shape.y = -shape.size;
      });

      requestAnimationFrame(animateShapes);
    }

    createShapes();
    animateShapes();
  }, []);

  return reactive(() => UI);
};
