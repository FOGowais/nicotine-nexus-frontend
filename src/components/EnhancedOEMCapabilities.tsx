import React from 'react';
import { useSimpleAnimations } from '../hooks/useSimpleAnimations';

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
];

const EnhancedOEMCapabilities = () => {
  const { containerRef } = useSimpleAnimations();

  return (
    <section ref={containerRef} id="capabilities" className="section-padding" data-scroll-section>
      <div className="container-max">
        <div className="text-center mb-16" data-animate="slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
            End-to-End OEM Capabilities
          </h2>
          <p className="text-xl text-cool-grey max-w-3xl mx-auto">
            From initial concept through to market launch, we provide comprehensive 
            manufacturing and regulatory support for your nicotine pouch brand.
          </p>
        </div>

        {/* Simplified Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-blue to-sky-glow hidden lg:block opacity-30" />
          
          <div className="flex flex-col gap-y-16">
            {capabilities.map((capability, index) => (
              <div 
                key={capability.title}
                className={`flex ${index === 0 || index === 1 ? 'lg:flex-row justify-between items-center' : ''} ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} flex-col gap-y-8 lg:gap-x-8`}
                data-animate={index % 2 === 0 ? 'slide-right' : 'slide-left'}
              >
                {/* Simplified Icon */}
                <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center text-2xl mb-6 lg:mb-0 z-10 shadow-lg">
                  {capability.icon}
                </div>
                {/* Content Card and Media for Custom Formulation and Private Labeling */}
                {index === 0 ? (
                  <>
                    <div className="glass-card p-8 w-full max-w-[520px] hover:scale-105 transition-transform duration-300">
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
                    {/* Video: Only on large screens, same width as card */}
                    <div className="hidden lg:block w-full max-w-[520px]">
                      <video 
                        src="/lovable-uploads/fomulation.mp4" 
                        autoPlay
                        loop
                        muted
                        className="rounded-xl shadow-lg w-full h-full object-cover"
                        style={{ minHeight: '100%', maxHeight: '340px', background: '#000' }}
                      />
                    </div>
                  </>
                ) : index === 1 ? (
                  <>
                    <div className="glass-card p-8 w-full max-w-[520px] hover:scale-105 transition-transform duration-300">
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
                    <div className="hidden lg:block w-full max-w-[520px]">
                      <img 
                        src="/lovable-uploads/your%20brand.png" 
                        alt="Your Brand"
                        className="rounded-xl shadow-lg w-full h-full object-cover"
                        style={{ minHeight: '100%', maxHeight: '340px', background: '#fff' }}
                      />
                    </div>
                  </>
                ) : index === 2 ? (
                  <div className="w-full flex-col lg:flex-row flex justify-between items-center">
                    <div className={`glass-card p-8 w-full max-w-[520px] hover:scale-105 transition-transform duration-300`}>
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
                    {/* Video: Only on large screens, same width as card, right side */}
                    <div className="hidden lg:block w-full max-w-[520px]">
                      <video 
                        src="/lovable-uploads/quallity.mp4" 
                        autoPlay
                        loop
                        muted
                        className="rounded-xl shadow-lg w-full h-full object-cover"
                        style={{ minHeight: '100%', maxHeight: '340px', background: '#000' }}
                      />
                    </div>
                  </div>
                ) : index === 3 ? (
                  <div className="w-full flex-col lg:flex-row flex justify-between items-center">
                    {/* Video: Only on large screens, same width as card, left side */}
                    <div className="hidden lg:block w-full max-w-[520px] mr-8">
                      <video 
                        src="/lovable-uploads/ScaleAble.mp4" 
                        autoPlay
                        loop
                        muted
                        className="rounded-xl shadow-lg w-full h-full object-cover"
                        style={{ minHeight: '100%', maxHeight: '340px', background: '#000' }}
                      />
                    </div>
                    <div className={`glass-card p-8 w-full max-w-[520px] hover:scale-105 transition-transform duration-300`}>
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
                ) : index === 4 ? (
                  <div className="w-full flex-col lg:flex-row flex justify-between items-center">
                    <div className={`glass-card p-8 w-full max-w-[520px] hover:scale-105 transition-transform duration-300`}>
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
                    {/* Video: Only on large screens, same width as card, right side */}
                    <div className="hidden lg:block w-full max-w-[520px] ml-8">
                      <video 
                        src="/lovable-uploads/4053048-sd_960_540_25fps.mp4" 
                        autoPlay
                        loop
                        muted
                        className="rounded-xl shadow-lg w-full h-full object-cover"
                        style={{ minHeight: '100%', maxHeight: '340px', background: '#000' }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className={`glass-card p-8 w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'} hover:scale-105 transition-transform duration-300`}>
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
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedOEMCapabilities;
