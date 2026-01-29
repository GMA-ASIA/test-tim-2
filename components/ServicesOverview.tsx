import React from 'react';
import { SERVICES_SUMMARY } from '../constants';
import FadeIn from './ui/FadeIn';

const ServicesOverview: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6">
              我們的 AI 自動化方案
            </h2>
            <p className="text-xl text-gray-600">
              唔使請人、唔使識 code、最快兩星期上線。
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_SUMMARY.map((service, index) => (
            <FadeIn key={service.id} delay={index * 100}>
              <div className="group h-full p-8 bg-white rounded-3xl border border-gray-100 shadow-apple-card hover:shadow-apple-hover hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 transition-colors">
                  <service.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <a 
                  href={`#${service.id}-detail`} 
                  className="inline-flex items-center text-brand-primary font-semibold hover:text-brand-accent transition-colors"
                >
                  了解更多 <span className="ml-2">→</span>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;