import { useRef, useEffect } from 'react';

const BEE_COUNT = 32;
const COLORS = [
  'rgba(255, 221, 51, 0.95)', // amarelo principal
  'rgba(255, 255, 180, 0.7)', // brilho
  'rgba(255, 221, 51, 0.5)',  // trilha
];

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

const BeeParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const bees = useRef<any[]>([]);
  const mouse = useRef({ x: 0, y: 0, over: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = canvas.parentElement?.offsetHeight || window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    function handleResize() {
      width = window.innerWidth;
      height = canvas.parentElement?.offsetHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', handleResize);

    // Mouse events
    function handleMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    }
    function handleMouseEnter() {
      mouse.current.over = true;
    }
    function handleMouseLeave() {
      mouse.current.over = false;
    }
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Inicializa as "abelhas"
    bees.current = Array.from({ length: BEE_COUNT }).map(() => {
      const angle = random(0, Math.PI * 2);
      return {
        x: random(0, width),
        y: random(0, height),
        vx: Math.cos(angle) * random(0.4, 1.2),
        vy: Math.sin(angle) * random(0.4, 1.2),
        size: random(2.5, 5.5),
        color: COLORS[Math.floor(random(0, COLORS.length))],
        t: random(0, 1000),
        speed: random(0.7, 1.7),
      };
    });

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (const bee of bees.current) {
        // Movimento orgânico (ruído simples)
        bee.t += 0.01 * bee.speed;
        let angle = Math.sin(bee.t) * Math.PI * 2 + Math.cos(bee.t * 0.7);
        let targetVx = Math.cos(angle) * bee.speed;
        let targetVy = Math.sin(angle) * bee.speed;

        // Se mouse sobre o canvas, atraia para o mouse
        if (mouse.current.over) {
          const dx = mouse.current.x - bee.x;
          const dy = mouse.current.y - bee.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          // Força de atração ainda mais forte
          const force = Math.min(0.7, 400 / (dist + 20));
          targetVx = lerp(targetVx, dx / dist * bee.speed * 7, force);
          targetVy = lerp(targetVy, dy / dist * bee.speed * 7, force);
        }

        bee.vx = lerp(bee.vx, targetVx, 0.05);
        bee.vy = lerp(bee.vy, targetVy, 0.05);
        bee.x += bee.vx;
        bee.y += bee.vy;

        // Rebote nas bordas
        if (bee.x < 0 || bee.x > width) bee.vx *= -1;
        if (bee.y < 0 || bee.y > height) bee.vy *= -1;

        // Desenha "abelha" (ponto brilhante)
        ctx.save();
        ctx.beginPath();
        ctx.arc(bee.x, bee.y, bee.size, 0, Math.PI * 2);
        ctx.fillStyle = bee.color;
        ctx.shadowColor = '#fffbe6';
        ctx.shadowBlur = 18 + bee.size * 2;
        ctx.globalAlpha = 0.85;
        ctx.fill();
        ctx.restore();
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'auto',
        opacity: 0.85,
      }}
      aria-hidden="true"
    />
  );
};

export default BeeParticles; 