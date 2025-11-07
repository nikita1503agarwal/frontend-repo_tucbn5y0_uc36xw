import React from 'react';
import Spline from '@splinetool/react-spline';

const OrbScene = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[620px] lg:h-[680px] xl:h-[720px]">
      <Spline
        scene="https://prod.spline.design/dE8ryMHkF0EMjFf3/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Gradient overlays for glow and depth */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 20%, rgba(255,77,0,0.18), rgba(255,77,0,0) 45%)'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(1200px 600px at 80% 30%, rgba(255,77,0,0.15), rgba(255,77,0,0) 60%)'
          }}
        />
      </div>
    </div>
  );
};

export default OrbScene;
