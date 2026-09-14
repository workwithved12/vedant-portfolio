import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export const CustomCursor = () => {
  const { cursorText, cursorVariant } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for fluid motion
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if coarse pointer (mobile/touch)
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const hasText = cursorText.length > 0;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Center dot (visible when no label) */}
      {!hasText && (
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-amber-500 pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{
            x: mouseX,
            y: mouseY,
          }}
        />
      )}

      {/* Outer interactive ring & label pill */}
      <motion.div
        className={`fixed top-0 left-0 flex items-center justify-center pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-colors duration-200 ${
          hasText
            ? 'px-3 py-1.5 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-xl border border-neutral-800 dark:border-neutral-200'
            : cursorVariant === 'hover'
            ? 'w-10 h-10 rounded-full border border-amber-500 bg-amber-500/10'
            : 'w-7 h-7 rounded-full border border-neutral-400 dark:border-neutral-600'
        }`}
        style={{
          x: smoothX,
          y: smoothY,
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{ scale: 0.5, opacity: 0 }}
      >
        {hasText && (
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase whitespace-nowrap">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
