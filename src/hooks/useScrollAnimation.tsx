
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  const scrollRef = useRef<HTMLElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      return;
    }

    // Initialize Locomotive Scroll
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
    });

    // Update ScrollTrigger when Locomotive Scroll updates
    locomotiveScrollRef.current.on('scroll', ScrollTrigger.update);

    // Sync ScrollTrigger with Locomotive Scroll
    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length 
          ? locomotiveScrollRef.current?.scrollTo(value, { duration: 0, disableLerp: true })
          : locomotiveScrollRef.current?.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: scrollRef.current.style.transform ? 'transform' : 'fixed'
    });

    // Refresh both libraries
    ScrollTrigger.addEventListener('refresh', () => locomotiveScrollRef.current?.update());
    ScrollTrigger.refresh();

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return { scrollRef };
};
