import React from 'react';
import { PROCESS_STEPS } from '../constants';
import FadeIn from './ui/FadeIn';

const Process: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-20">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6">
              簡單三步，開展自動化
            </h2>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-0 right-0 h-1 bg-gradient-to-r from-brand-primary/10 via-brand-primary/50 to-brand-primary/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PROCESS_STEPS.map((step, index) => (
              <FadeIn key={index} delay={index * 200} direction="up">
                <div className="relative z-10 flex flex-col items-center text-center group">
                  {/* Circle Number */}
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-brand-primary flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-brand-primary to-[#2D5A87]">
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-brand-dark mb-4">{step.title}</h3>
                  <p className="text-gray-600 max-w-xs">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;