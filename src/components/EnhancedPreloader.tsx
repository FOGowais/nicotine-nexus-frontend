
import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const EnhancedPreloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate progress bar
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          
          // Complete animation sequence
          setTimeout(() => {
            tl.to(preloaderRef.current, {
              scale: 0.9,
              opacity: 0,
              duration: 0.6,
              ease: "power2.inOut",
              onComplete: () => {
                onComplete();
              }
            });
          }, 500);
          
          return 100;
        }
        return newProgress;
      });
    }, 40);

    // Animate progress bar width
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: `${progress}%`,
        duration: 0.1,
        ease: "none"
      });
    }

    // Initial entrance animation
    tl.from(contentRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });

    return () => {
      clearInterval(progressTimer);
      tl.kill();
    };
  }, [progress, onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 bg-white flex items-center justify-center z-50"
    >
      <div ref={contentRef} className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-deep-navy mb-2">Corbett Labs</h1>
          <p className="text-accent-blue">Premium OEM Manufacturing</p>
        </div>
        
        <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div 
            ref={progressBarRef}
            className="h-full bg-accent-blue transition-all duration-100 ease-out"
            style={{ width: '0%' }}
          />
        </div>
        
        <p className="text-cool-grey mt-4">{progress}%</p>
      </div>
    </div>
  );
};

export default EnhancedPreloader;
