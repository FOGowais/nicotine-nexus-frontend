
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    title: 'Custom Formulation',
    description: 'Proprietary nicotine blends, flavor profiles, and strength variations tailored to your market requirements.',
    features: ['Nicotine salts & extracts', 'Natural & synthetic flavors', 'Strength: 2-20mg/pouch', 'pH optimization'],
    icon: '🧪'
  },
  {
    title: 'Private Labeling',
    description: 'Complete branding solutions from package design to regulatory documentation.',
    features: ['Custom packaging design', 'Brand compliance', 'Regulatory filing support', 'Market-specific labeling'],
    icon: '🏷️'
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing protocols ensuring product safety, consistency, and regulatory compliance.',
    features: ['Batch testing', 'Microbial analysis', 'Heavy metals screening', 'Stability studies'],
    icon: '✅'
  },
  {
    title: 'Scalable Production',
    description: 'Flexible manufacturing capacity from prototype runs to high-volume commercial production.',
    features: ['500K minimum order', '50M monthly capacity', '24/7 production', 'JIT delivery'],
    icon: '📈'
  },
  {
    title: 'Regulatory Support',
    description: 'Comprehensive regulatory assistance for global market entry and compliance maintenance.',
    features: ['TPD compliance', 'FDA registration', 'Health Canada', 'PMTA support'],
    icon: '📋'
  },
  {
    title: 'Global Logistics',
    description: 'Worldwide shipping with cold chain management and customs documentation.',
    features: ['Temperature control', 'Customs clearance', 'Express shipping', 'Track & trace'],
    icon: '🚚'
  }
];

const EnhancedOEMCapabilities = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cards = sectionRef.current?.querySelectorAll('.capability-card');
    const icons = sectionRef.current?.querySelectorAll('.capability-icon');
    
    cards?.forEach((card, index) => {
      // Card slide-in animation
      gsap.set(card, { x: index % 2 === 0 ? -40 : 40, opacity: 0 });
      
      ScrollTrigger.create({
        trigger: card,
        start: "top 70%",
        onEnter: () => {
          gsap.to(card, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.1
          });
        }
      });
    });

    // Floating icon animation
    icons?.forEach((icon) => {
      gsap.to(icon, {
        y: -20,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut",
        delay: Math.random() * 2
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="capabilities" className="section-padding" data-scroll-section>
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
            End-to-End OEM Capabilities
          </h2>
          <p className="text-xl text-cool-grey max-w-3xl mx-auto">
            From initial concept through to market launch, we provide comprehensive 
            manufacturing and regulatory support for your nicotine pouch brand.
          </p>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Vertical Line with Glow */}
          <div 
            ref={timelineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-blue to-sky-glow hidden lg:block"
            style={{
              boxShadow: '0 0 20px rgba(10, 132, 255, 0.3)'
            }}
          />
          
          <div className="space-y-12">
            {capabilities.map((capability, index) => (
              <div 
                key={capability.title}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-12 capability-card`}
              >
                {/* Enhanced Icon with Glow */}
                <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center text-2xl mb-6 lg:mb-0 z-10 capability-icon"
                     style={{
                       boxShadow: '0 0 0 4px rgba(91, 234, 255, 0.2), 0 0 20px rgba(10, 132, 255, 0.3)'
                     }}>
                  {capability.icon}
                </div>
                
                {/* Enhanced Content Card */}
                <div className={`glass-card p-8 w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'} hover:transform hover:scale-105 transition-all duration-300`}
                     style={{
                       backdropFilter: 'blur(10px)',
                       border: '1px solid rgba(255, 255, 255, 0.2)'
                     }}>
                  <h3 className="text-2xl font-bold text-deep-navy mb-4">{capability.title}</h3>
                  <p className="text-cool-grey mb-6">{capability.description}</p>
                  
                  <ul className="space-y-2">
                    {capability.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-cool-grey">
                        <div className="w-2 h-2 bg-accent-blue rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedOEMCapabilities;
