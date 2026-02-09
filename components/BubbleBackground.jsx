import React from 'react';
import { COLORS } from '../constants';

const BubbleBackground = ({ variant = 'light' }) => {
  const isLight = variant === 'light';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <div 
        className="fluid-blob w-[120vw] h-[100vh] -top-[30%] -left-[10%]"
        style={{ 
          backgroundColor: isLight ? COLORS.mellowYellow : 'rgba(0, 50, 31, 0.4)',
          opacity: isLight ? 0.6 : 0.3
        }}
      />
      
      <div 
        className="fluid-blob-delayed w-[90vw] h-[80vh] top-[20%] -right-[20%]"
        style={{ 
          backgroundColor: isLight ? COLORS.paleSunlight : COLORS.electricBlue,
          opacity: isLight ? 0.4 : 0.1
        }}
      />

      <div 
        className="fluid-blob w-[80vw] h-[90vh] -bottom-[20%] -left-[15%]"
        style={{ 
          backgroundColor: isLight ? COLORS.mellowYellow : COLORS.primaryOrange,
          opacity: isLight ? 0.5 : 0.2
        }}
      />

      <div 
        className="fluid-blob-delayed w-[50vw] h-[50vh] -top-[10%] -right-[10%]"
        style={{ 
          backgroundColor: isLight ? COLORS.electricBlue : 'rgba(255, 155, 0, 0.5)',
          opacity: isLight ? 0.1 : 0.4
        }}
      />

      <div 
        className="fluid-blob w-[100vw] h-[100vh] top-[40%] left-[20%]"
        style={{ 
          backgroundColor: isLight ? COLORS.paleSunlight : 'rgba(0, 50, 31, 0.2)',
          opacity: isLight ? 0.3 : 0.2
        }}
      />
    </div>
  );
};

export default BubbleBackground;
