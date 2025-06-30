
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useSimpleAnimations = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const container = containerRef.current;
    
    // Optimized animation for all elements with data-animate attribute
    const animatedElements = container.querySelectorAll('[data-animate]');
    
    animatedElements.forEach((element, index) => {
      const animationType = element.getAttribute('data-animate');
      
      // Set initial state with optimized transforms
      gsap.set(element, { 
        opacity: 0, 
        y: animationType === 'slide-up' ? 20 : 0,
        x: animationType === 'slide-left' ? -20 : animationType === 'slide-right' ? 20 : 0,
        force3D: true // Enable hardware acceleration
      });
      
      ScrollTrigger.create({
        trigger: element,
        start: "top 85%",
        onEnter: () => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.5,
            ease: "power3.out",
            delay: index * 0.05, // Reduced stagger delay
            force3D: true
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return { containerRef };
};
