
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './ui/button';

gsap.registerPlugin(ScrollTrigger);

const EnhancedHero = ({ onContactClick }: { onContactClick: () => void }) => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ delay: 0.5 });

    // Hero entrance animation
    tl.from(headlineRef.current?.children || [], {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "power2.out"
    })
    .from(sublineRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    .from(badgesRef.current?.children || [], {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.3")
    .from(ctaRef.current?.children || [], {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.2");

    // Glow pulse animation
    gsap.to(glowRef.current, {
      opacity: 0.2,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut"
    });

    // Mockup tilt on scroll
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom center",
      scrub: 1,
      onUpdate: (self) => {
        if (mockupRef.current) {
          gsap.to(mockupRef.current, {
            rotateY: -10 * self.progress,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleCTAHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.to(e.currentTarget, {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(91, 234, 255, 0.4)",
      duration: 0.2,
      ease: "power2.out"
    });
  };

  const handleCTALeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.to(e.currentTarget, {
      scale: 1,
      boxShadow: "none",
      duration: 0.2,
      ease: "power2.out"
    });
  };

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      data-scroll-section
    >
      {/* Animated Blue Glow Background */}
      <div 
        ref={glowRef}
        className="absolute top-1/2 right-1/4 w-96 h-96 opacity-10"
        style={{
          background: 'radial-gradient(circle at center, rgba(10, 132, 255, 0.3) 0%, rgba(91, 234, 255, 0.1) 50%, transparent 100%)'
        }}
      />
      
      <div className="container-max relative z-10 text-center px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="mb-6">
              <h1 ref={headlineRef} className="text-5xl md:text-7xl font-bold mb-4">
                <span className="block text-deep-navy">Premium Nicotine Pouches</span>
                <span className="block text-accent-blue relative">
                  Made for Your Brand
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-blue transform origin-left"></div>
                </span>
              </h1>
              <p ref={sublineRef} className="text-xl text-cool-grey mb-8 max-w-2xl">
                End-to-end OEM • 50M pouches/month • 99.8% Quality Control
              </p>
            </div>

            {/* Certification Badges */}
            <div ref={badgesRef} className="flex justify-start space-x-6 mb-12">
              {['ISO 9001', 'GMP', 'FDA'].map((badge) => (
                <div 
                  key={badge}
                  className="glass-card px-4 py-2 hover:transform hover:translate-y-1 hover:shadow-lg transition-all duration-200 cursor-pointer"
                  style={{
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 16px rgba(10, 132, 255, 0.1)'
                  }}
                >
                  <span className="text-sm font-medium text-accent-blue">{badge}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                onClick={onContactClick} 
                className="btn-primary text-lg px-10 py-5"
                onMouseEnter={handleCTAHover}
                onMouseLeave={handleCTALeave}
              >
                Request Quote & Samples
              </Button>
              <Button 
                className="btn-secondary text-lg px-10 py-5"
                onMouseEnter={handleCTAHover}
                onMouseLeave={handleCTALeave}
              >
                Schedule Factory Tour
              </Button>
            </div>
          </div>

          {/* Right Mockup */}
          <div 
            ref={mockupRef}
            className="relative"
            style={{ perspective: '1000px' }}
          >
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
