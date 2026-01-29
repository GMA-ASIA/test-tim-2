import React from 'react';
import { DETAILED_SERVICES } from '../constants';
import FadeIn from './ui/FadeIn';
import { Check } from 'lucide-react';

const ServiceDetails: React.FC = () => {
  return (
    <div className="flex flex-col">
      {DETAILED_SERVICES.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <section 
            key={service.id} 
            id={service.id} 
            className={`py-20 md:py-32 ${isEven ? 'bg-brand-light' : 'bg-white'}`}
          >
            <div className="container mx-auto px-6 max-w-[1200px]">
              <div className={`flex flex-col lg:flex-row items-center gap-16 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Content Side */}
                <div className="lg:w-1/2">
                  <FadeIn direction={isEven ? 'right' : 'left'}>
                    <h3 className="text-3xl md:text-4xl font-bold text-brand-primary mb-8">
                      {service.title}
                    </h3>

                    {/* Problem Box */}
                    <div className="bg-red-50 border-l-4 border-[#FF6B6B] p-6 rounded-r-xl mb-8">
                      <p className="text-gray-700 font-medium">
                        <span className="text-[#FF6B6B] font-bold block mb-1">問題：</span>
                        {service.problem}
                      </p>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-4 mb-10">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center mt-1 mr-4">
                            <Check className="w-4 h-4 text-brand-accent" strokeWidth={3} />
                          </div>
                          <span className="text-lg text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Result Card */}
                    <div className="bg-gradient-to-br from-brand-primary to-[#2D5A87] p-6 md:p-8 rounded-2xl shadow-lg text-white transform rotate-1 hover:rotate-0 transition-transform duration-300">
                      <p className="text-brand-secondary text-sm font-bold uppercase tracking-wider mb-2">
                        實際效果
                      </p>
                      <p className="text-lg md:text-xl font-medium leading-relaxed">
                        {service.result}
                      </p>
                    </div>
                  </FadeIn>
                </div>

                {/* Image Side - Placeholder for simplicity using solid colors/gradients or patterns if real images strictly not allowed, but system prompt allows picsum */}
                <div className="lg:w-1/2 w-full">
                  <FadeIn direction={isEven ? 'left' : 'right'} delay={200}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply" />
                    </div>
                  </FadeIn>
                </div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ServiceDetails;