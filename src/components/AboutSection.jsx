import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CTAButton from './CTAButton';
import OrbScene from './OrbScene';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const ringParallax = useTransform(scrollYProgress, [0, 1], [0, -40]);

  useEffect(() => {
    // Smooth glow pulse via CSS variable
    const el = sectionRef.current;
    if (!el) return;
    let t = 0;
    let raf;
    const loop = () => {
      t += 0.02;
      const pulse = 0.35 + Math.sin(t) * 0.15; // 0.2..0.5
      el.style.setProperty('--glow-alpha', String(pulse));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleCTA = () => {
    // Placeholder interaction; could link to portfolio route
    window.alert('Imagine a smooth scroll to portfolio or opening the work gallery.');
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        background: 'radial-gradient(circle at top, #0d0d0d 0%, #000000 100%)',
        paddingTop: '120px',
        paddingBottom: '120px'
      }}
    >
      {/* Star dust / particle haze */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-60"
             style={{ backgroundImage: 'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.22), rgba(0,0,0,0)), radial-gradient(1px 1px at 70% 60%, rgba(255,255,255,0.18), rgba(0,0,0,0)), radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.15), rgba(0,0,0,0))' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(50% 35% at 50% 0%, rgba(255,77,0,var(--glow-alpha,0.35)), rgba(255,77,0,0) 70%)' }} />
      </div>

      {/* Rotating orbit rings (parallax) */}
      <motion.div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] opacity-30"
        style={{ rotate: ringRotate, y: ringParallax }}
        aria-hidden
      >
        <svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" className="w-full h-full">
          {[220, 340, 460, 600].map((r, i) => (
            <circle
              key={r}
              cx="600"
              cy="600"
              r={r}
              stroke="url(#grad)"
              strokeWidth={i === 0 ? 1.4 : 1}
              opacity={0.8 - i * 0.15}
            />
          ))}
          <defs>
            <radialGradient id="grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(600 600) rotate(90) scale(600)">
              <stop offset="0%" stopColor="#ff4d00" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#ff4d00" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ff4d00" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="h-[10px] w-[10px] rounded-full" style={{ boxShadow: '0 0 16px 6px rgba(255,77,0,0.55)', backgroundColor: '#ff4d00' }} />
              <span className="text-xs tracking-[0.25em] uppercase text-white/70" style={{ fontFamily: 'Poppins, sans-serif' }}>About Me</span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl leading-tight text-white"
              style={{ fontFamily: 'Cinzel, serif', textShadow: '0 0 24px rgba(255,77,0,0.25)' }}
            >
              Designing experiences that merge creativity and logic.
            </h2>

            <div className="space-y-4 text-white/80 text-base leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <p>
                I’m Niranj R, a passionate UI/UX Designer dedicated to crafting digital experiences that feel intuitive, meaningful, and human-centered.
              </p>
              <p>
                My design philosophy combines artistic storytelling with structured usability — transforming abstract ideas into interactive realities.
              </p>
              <p>
                When I’m not designing, I explore motion design, 3D visualization, and micro-interactions that make interfaces come alive.
              </p>
            </div>

            <div className="pt-2">
              <CTAButton onClick={handleCTA} />
            </div>
          </motion.div>

          {/* Right: 3D / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Aura glow behind object */}
            <div className="pointer-events-none absolute inset-0 -z-[1]">
              <div className="absolute inset-0 blur-3xl" style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(255,77,0,0.25), rgba(255,77,0,0) 70%)' }} />
            </div>
            <OrbScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
