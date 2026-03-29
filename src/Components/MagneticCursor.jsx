import React, { useEffect, useState, useRef } from 'react';

const MagneticCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef();

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateCursor = () => {
      setPosition({ x: mouseX, y: mouseY });
      requestRef.current = requestAnimationFrame(updateCursor);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, select, textarea, .magnetic')) {
        setIsHovering(true);
      }
    };
    
    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, input, select, textarea, .magnetic')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    requestRef.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div 
        className={`cursor-dot ${isHovering ? 'hover' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={`cursor-ring ${isHovering ? 'hover' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default MagneticCursor;
