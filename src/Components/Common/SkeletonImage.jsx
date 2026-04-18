import React, { useState } from 'react';

/**
 * SkeletonImage Component
 * Implements Blur-up placeholder + Fade-in transition for a premium loading experience.
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text
 * @param {string|number} width - Explicit width for CLS prevention
 * @param {string|number} height - Explicit height for CLS prevention
 * @param {boolean} priority - If true, uses loading="eager", else "lazy"
 * @param {string} className - Additional CSS classes
 */
const SkeletonImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false, 
  className = '',
  style = {}
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div 
      className={`image-wrapper ${className}`} 
      style={{ 
        width: width || '100%', 
        height: height || 'auto',
        aspectRatio: width && height ? `${width}/${height}` : 'unset',
        ...style 
      }}
    >
      {/* Shimmer Placeholder - visible until main image loads */}
      {!loaded && <div className="skeleton-shimmer"></div>}
      
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setLoaded(true)}
        className={`skeleton-image ${loaded ? 'visible' : ''}`}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default SkeletonImage;
