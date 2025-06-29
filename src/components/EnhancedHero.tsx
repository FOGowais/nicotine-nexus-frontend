
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from './ui/button';
import { useSimpleAnimations } from '../hooks/useSimpleAnimations';

const EnhancedHero = ({
  onContactClick
}: {
  onContactClick: () => void;
}) => {
  const {
    containerRef
  } = useSimpleAnimations();
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Simple glow pulse
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0.3,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
    }
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" 
      data-scroll-section
    >
      {/* Background Image with Filters */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/949322c2-03fa-48e5-9069-437c9c91e1fe.png"
          alt="Mountain landscape background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Additional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
      </div>

      {/* Simplified glow background */}
      <div 
        ref={glowRef} 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10 z-1" 
        style={{
          background: 'radial-gradient(circle at center, rgba(10, 132, 255, 0.3) 0%, transparent 70%)'
        }} 
      />
      
      <div className="container-max relative z-10 text-center px-6">
        <div className="max-w-4xl mx-auto">
          {/* Centered Content */}
          <div className="text-center">
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-2xl" data-animate="slide-up">
                <span className="block">Crafted by Experts</span>
                <span className="block text-white relative">
                  Branded by You
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-accent-blue shadow-lg"></div>
                </span>
              </h1>
            </div>

            {/* Certification Badges */}
            

            {/* CTAs */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;
