
import React from 'react';

const products = [
  {
    name: 'Classic Mint',
    strength: '6mg',
    description: 'Refreshing peppermint with cooling sensation',
    tags: ['Sugar-free', 'All-natural', 'Long-lasting'],
    icon: '🌿'
  },
  {
    name: 'Arctic Freeze',
    strength: '12mg',
    description: 'Intense menthol experience for experienced users',
    tags: ['Extra strong', 'Instant cooling', 'Premium blend'],
    icon: '❄️'
  },
  {
    name: 'Citrus Burst',
    strength: '4mg',
    description: 'Zesty orange and lemon blend',
    tags: ['Natural extracts', 'Vitamin C', 'Mild strength'],
    icon: '🍊'
  },
  {
    name: 'Berry Mix',
    strength: '8mg',
    description: 'Wild berry medley with subtle sweetness',
    tags: ['Antioxidants', 'No artificial colors', 'Balanced'],
    icon: '🫐'
  },
  {
    name: 'Pure Tobacco',
    strength: '10mg',
    description: 'Traditional tobacco flavor without tobacco leaf',
    tags: ['Tobacco-free', 'Authentic taste', 'Medium strength'],
    icon: '🌱'
  },
  {
    name: 'Coffee Blend',
    strength: '6mg',
    description: 'Rich espresso with hint of vanilla',
    tags: ['Caffeine boost', 'Premium blend', 'Morning kick'],
    icon: '☕'
  }
];

const ProductPortfolio = () => {
  return (
    <section id="products" className="section-padding bg-base-grey">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
            Product Portfolio
          </h2>
          <p className="text-xl text-cool-grey max-w-3xl mx-auto">
            Comprehensive range of nicotine pouches covering every market segment and 
            consumer preference with customizable formulations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-sm">
            <div className="flex space-x-2">
              <button className="bg-accent-blue text-white px-6 py-2 rounded-full text-sm font-medium">
                All Products
              </button>
              <button className="text-cool-grey px-6 py-2 rounded-full text-sm font-medium hover:text-accent-blue transition-colors">
                Tobacco-Free
              </button>
              <button className="text-cool-grey px-6 py-2 rounded-full text-sm font-medium hover:text-accent-blue transition-colors">
                Mint & Menthol
              </button>
              <button className="text-cool-grey px-6 py-2 rounded-full text-sm font-medium hover:text-accent-blue transition-colors">
                Fruit Flavors
              </button>
              <button className="text-cool-grey px-6 py-2 rounded-full text-sm font-medium hover:text-accent-blue transition-colors">
                Specialty Blends
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className="glass-card p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{product.icon}</div>
                <div className="bg-accent-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.strength}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-deep-navy mb-2">{product.name}</h3>
              <p className="text-cool-grey mb-4">{product.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag) => (
                  <span key={tag} className="bg-accent-blue/10 text-accent-blue px-2 py-1 rounded-md text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="w-full bg-white/50 text-cool-grey py-2 rounded-lg text-sm font-medium group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                Request Sample
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPortfolio;
