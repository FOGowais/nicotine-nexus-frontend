import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from './ui/button';
import { useSimpleAnimations } from '../hooks/useSimpleAnimations';

const EnhancedHero = ({ onContactClick }: { onContactClick: () => void }) => {
  const { containerRef } = useSimpleAnimations();
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
      {/* Simplified glow background */}
      <div 
        ref={glowRef}
        className="absolute top-1/2 right-1/4 w-96 h-96 opacity-10"
        style={{
          background: 'radial-gradient(circle at center, rgba(10, 132, 255, 0.3) 0%, transparent 70%)'
        }}
      />
      
      <div className="container-max relative z-10 text-center px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - keeping exact text positions */}
          <div className="text-left">
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-4" data-animate="slide-up">
                <span className="block text-deep-navy">Premium Nicotine Pouches</span>
                <span className="block text-accent-blue relative">
                  Made for Your Brand
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-blue"></div>
                </span>
              </h1>
              <p className="text-xl text-cool-grey mb-8 max-w-2xl" data-animate="slide-up">
                End-to-end OEM • 50M pouches/month • 99.8% Quality Control
              </p>
            </div>

            {/* Certification Badges */}
            <div className="flex justify-start space-x-6 mb-12" data-animate="slide-up">
              {['ISO 9001', 'GMP', 'FDA'].map((badge) => (
                <div 
                  key={badge}
                  className="glass-card px-4 py-2 hover:transform hover:scale-105 transition-all duration-200"
                >
                  <span className="text-sm font-medium text-accent-blue">{badge}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6" data-animate="slide-up">
              <Button 
                onClick={onContactClick} 
                className="btn-primary text-lg px-10 py-5 hover:scale-105 transition-transform duration-200"
              >
                Request Quote & Samples
              </Button>
              <Button 
                className="btn-secondary text-lg px-10 py-5 hover:scale-105 transition-transform duration-200"
              >
                Schedule Factory Tour
              </Button>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="relative" data-animate="slide-left">
            <div className="bg-gradient-to-br from-accent-blue/10 to-sky-glow/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="w-24 h-24 bg-accent-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">CL</span>
                  </div>
                  <h3 className="text-xl font-bold text-deep-navy mb-2">Premium Quality</h3>
                  <p className="text-cool-grey">Manufacturing Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;
