import { useRef, useEffect } from 'react';

// CSS (place in a separate .css file or use CSS-in-JS)
/*

}
*/

class Star {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2;
    this.speed = Math.random() * 0.5;
  }

  update() {
    this.y += this.speed;
    if (this.y > this.canvas.height) this.y = 0;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = '#FFF';
    ctx.fill();
  }
}

export default function CanvasFloating() {
  const canvasRef = useRef(null);
  const stars = useRef([]);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars.current = Array.from({ length: 200 }, () => new Star(canvas));
    };

    // Initial setup
    handleResize();
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.current.forEach((star) => {
        star.update();
        star.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='starfield-canvas'
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#000',
        zIndex: 1,
      }}
    />
  );
}
