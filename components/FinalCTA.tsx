import React from 'react';
import Button from './ui/Button';
import FadeIn from './ui/FadeIn';

const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-brand-primary via-[#2D5A87] to-[#3A7CA5] relative overflow-hidden text-center">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-brand-primary/80 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-[900px] relative z-10">
        <FadeIn direction="up">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            準備好慳返每個月 <span className="text-brand-accent">60 小時</span>？
          </h2>
        </FadeIn>

        <FadeIn delay={100} direction="up">
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
            免費 30 分鐘診斷——我哋會幫你搵出最值得自動化的 3 個流程，並計算預計節省的成本。<br />
            <span className="text-sm md:text-base opacity-80 mt-4 block">無壓力、無 hardsell，純粹傾吓你嘅業務。</span>
          </p>
        </FadeIn>

        <FadeIn delay={200} direction="up">
          <div className="flex flex-col items-center space-y-8">
            <Button size="xl" className="shadow-glow animate-pulse-slow">
              立即預約免費診斷
            </Button>
            
            <div className="flex flex-col md:flex-row items-center gap-6 text-blue-200">
              <a href="#" className="flex items-center hover:text-white transition-colors">
                <span className="mr-2">📞</span> WhatsApp: +852 9876 5432
              </a>
              <a href="mailto:hello@nextmaven.ai" className="flex items-center hover:text-white transition-colors">
                <span className="mr-2">📧</span> Email: hello@nextmaven.ai
              </a>
            </div>
          </div>
        </FadeIn>
      </div>

       <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 212, 170, 0.7); }
          50% { transform: scale(1.02); box-shadow: 0 0 20px 0 rgba(0, 212, 170, 0.4); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;