import { useCallback, useRef } from 'react';

interface TiltOptions {
  maxRotation?: number; // max tilt degrees (default: 8)
  perspective?: number; // CSS perspective in px (default: 1000)
  scale?: number; // scale on hover (default: 1.02)
  glowColor?: string; // pastel glow rgba string
}

export function useTilt(options: TiltOptions = {}) {
  const {
    maxRotation = 8,
    perspective = 1000,
    scale = 1.02,
    glowColor = 'rgba(168, 191, 163, 0.28)'
  } = options;

  const animationFrameRef = useRef<number | null>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      // Check for hover capability and reduced motion
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
        card.style.boxShadow = `0 18px 36px -12px ${glowColor}, 0 0 24px -4px rgba(244, 198, 215, 0.35)`;
        card.style.transition = 'transform 0.1s ease-out, box-shadow 0.25s ease';
      });
    },
    [maxRotation, perspective, scale, glowColor]
  );

  const onMouseLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.boxShadow = '';
    card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease';
  }, []);

  return { onMouseMove, onMouseLeave };
}
