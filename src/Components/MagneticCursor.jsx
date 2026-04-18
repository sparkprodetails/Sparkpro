import { useEffect, useRef } from 'react';

const MagneticCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Directly mutate style — zero React re-renders
    const loop = () => {
      dot.style.left  = `${mouseX}px`;
      dot.style.top   = `${mouseY}px`;
      ring.style.left = `${mouseX}px`;
      ring.style.top  = `${mouseY}px`;
      rafId = requestAnimationFrame(loop);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, select, textarea, .magnetic')) {
        dot.classList.add('hover');
        ring.classList.add('hover');
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, input, select, textarea, .magnetic')) {
        dot.classList.remove('hover');
        ring.classList.remove('hover');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default MagneticCursor;
