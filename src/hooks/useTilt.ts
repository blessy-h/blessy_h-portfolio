import { useCallback, useRef } from 'react';

interface TiltOptions {
  maxRotation?: number; // max tilt degrees (subtle & elegant)
  perspective?: number; // CSS perspective in px
  scale?: number; // scale on hover
  glowColor?: string; // soft shadow/glow color
}

export function useTilt(options: TiltOptions = {}) {
  const {
    maxRotation = 5,
    perspective = 1200,
    scale = 1.015,
    glowColor = 'rgba(51, 51, 51, 0.08)'
  } = options;

  const animationFrameRef = useRef<number | null>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (typeof window === 'undefined') return;
      if (!window.matchMedia('(hover: hover)').matches) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const rotateX = (-y * maxRotation).toFixed(2);
        const rotateY = (x * maxRotation).toFixed(2);
        const posX = ((x + 0.5) * 100).toFixed(1);
        const posY = ((y + 0.5) * 100).toFixed(1);

        card.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
        card.style.setProperty('--mouse-x', `${posX}%`);
        card.style.setProperty('--mouse-y', `${posY}%`);
        card.style.boxShadow = `0 20px 40px -15px ${glowColor}, 0 4px 12px rgba(51, 51, 51, 0.03)`;
        card.style.transition = 'transform 0.12s ease-out, box-shadow 0.3s ease';
      });
    },
    [maxRotation, perspective, scale, glowColor]
  );

  const onMouseLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    const card = e.currentTarget;
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.boxShadow = '';
    card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
  }, []);

  return { onMouseMove, onMouseLeave };
}
