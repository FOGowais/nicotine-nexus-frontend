
import React from 'react';
import { Card, CardContent } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';
import { useSimpleAnimations } from '../hooks/useSimpleAnimations';

const videos = [
  {
    id: 1,
    title: 'Manufacturing Process Overview',
    description: 'See our state-of-the-art production facility and quality control processes.',
    thumbnailUrl: '/placeholder.svg',
    duration: '3:24',
    category: 'Manufacturing'
  },
  {
    id: 2,
    title: 'Quality Testing & Compliance',
    description: 'Behind-the-scenes look at our rigorous testing procedures and certifications.',
    thumbnailUrl: '/placeholder.svg',
    duration: '2:47',
    category: 'Quality'
  },
  {
    id: 3,
    title: 'Custom Flavor Development',
    description: 'How we create unique flavor profiles tailored to your brand requirements.',
    thumbnailUrl: '/placeholder.svg',
    duration: '4:12',
    category: 'Development'
  },
  {
    id: 4,
    title: 'Packaging & Logistics',
    description: 'From custom packaging design to global distribution capabilities.',
    thumbnailUrl: '/placeholder.svg',
    duration: '2:58',
    category: 'Logistics'
  },
  {
    id: 5,
    title: 'Client Success Stories',
    description: 'Hear from our partners about their experience working with Corbett Labs.',
    thumbnailUrl: '/placeholder.svg',
    duration: '5:03',
    category: 'Testimonials'
  },
  {
    id: 6,
    title: 'Sustainability Initiatives',
    description: 'Our commitment to environmental responsibility and sustainable practices.',
    thumbnailUrl: '/placeholder.svg',
    duration: '3:36',
    category: 'Sustainability'
  }
];

const VideoShowcase = () => {
  const { containerRef } = useSimpleAnimations();

  return (
    <section ref={containerRef} className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16" data-animate="slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
            See Our Process in Action
          </h2>
          <p className="text-xl text-cool-grey max-w-3xl mx-auto">
            Take a behind-the-scenes look at our manufacturing excellence, 
            quality control, and the innovation that sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card 
              key={video.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-white"
              data-animate="slide-up"
            >
              <CardContent className="p-0">
                <AspectRatio ratio={16 / 9} className="bg-base-grey overflow-hidden rounded-t-lg">
                  <div className="relative w-full h-full bg-gradient-to-br from-accent-blue/20 to-sky-glow/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-0 h-0 border-l-[12px] border-l-accent-blue border-y-[8px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                      {video.duration}
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-2 left-2 bg-accent-blue text-white px-2 py-1 rounded text-xs font-medium">
                      {video.category}
                    </div>
                  </div>
                </AspectRatio>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-deep-navy mb-2 group-hover:text-accent-blue transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-cool-grey text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12" data-animate="slide-up">
          <button className="btn-primary">
            View Full Video Library
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
