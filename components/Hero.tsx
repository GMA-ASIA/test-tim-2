import React from 'react';
import Button from './ui/Button';
import FadeIn from './ui/FadeIn';
import { Bot } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-light/50 pointer-events-none" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center">
        
        {/* Floating Icon */}
        <div className="animate-bounce-slow flex justify-center mb-8">
            <div className="p-4 bg-white shadow-apple-card rounded-2xl">
                <Bot className="w-10 h-10 text-brand-primary" />
            </div>
        </div>

        <FadeIn delay={100} direction="up">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-primary leading-[1.1] md:leading-[1.1] tracking-tight mb-8">
            香港老闆，<br className="md:hidden" />你還在親手做這些嗎？
          </h1>
        </FadeIn>

        <FadeIn delay={200} direction="up">
          <p className="text-xl md:text-2xl text-[#86868B] max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            每日重複輸入客戶資料、逐封回覆查詢、<br className="hidden md:block" />手動整理訂單報表⋯⋯
          </p>
        </FadeIn>

        <FadeIn delay={300} direction="up">
          <p className="text-2xl md:text-3xl font-bold text-brand-dark mb-12">
            你請不起 10 個人，<br className="md:hidden" />但 AI 可以幫你做 10 個人的工作。
          </p>
        </FadeIn>

        <FadeIn delay={400} direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="xl" onClick={() => window.location.href = '#cta'}>
              免費預約 30 分鐘診斷
            </Button>
            <Button variant="secondary" size="xl" onClick={() => window.location.href = '#services'}>
              睇吓有咩方案
            </Button>
          </div>
        </FadeIn>
      </div>
      
      {/* CSS for custom slow bounce */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(5%); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;