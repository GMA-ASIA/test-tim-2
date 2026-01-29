import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';
import FadeIn from './ui/FadeIn';

const FAQItem = ({ question, answer, isOpen, toggle }: { question: string, answer: string, isOpen: boolean, toggle: () => void }) => {
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={toggle}
      >
        <span className={`text-xl font-medium transition-colors ${isOpen ? 'text-brand-primary' : 'text-brand-dark'}`}>
          {question}
        </span>
        <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus className="text-brand-primary" /> : <Plus className="text-gray-400" />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-[800px]">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">常見問題</h2>
            <p className="text-gray-600">解答你對 AI 自動化的疑慮</p>
          </FadeIn>
        </div>

        <div className="space-y-2">
          {FAQS.map((faq, index) => (
            <FadeIn key={index} delay={index * 50} direction="up">
              <FAQItem 
                question={faq.question} 
                answer={faq.answer} 
                isOpen={openIndex === index} 
                toggle={() => setOpenIndex(openIndex === index ? null : index)} 
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;