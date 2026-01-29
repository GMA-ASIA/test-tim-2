import React from 'react';
import Button from './ui/Button';
import FadeIn from './ui/FadeIn';
import { CheckCircle2 } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-brand-light">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">方案與收費</h2>
          <p className="text-gray-600">透明報價，按需選擇</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Tier 1 */}
          <FadeIn delay={0} className="h-full">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm h-full flex flex-col">
              <h3 className="text-xl font-bold text-brand-dark mb-2">入門方案</h3>
              <p className="text-3xl font-bold text-brand-primary mb-6">HKD $8,000<span className="text-base font-normal text-gray-500"> 起</span></p>
              <ul className="space-y-4 mb-8 flex-grow">
                {['單一流程自動化', '2 星期內上線', '30 日支援'].map(item => (
                  <li key={item} className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary mr-3" /> {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" fullWidth onClick={() => window.location.href = '#cta'}>了解入門方案</Button>
            </div>
          </FadeIn>

          {/* Tier 2 (Recommended) */}
          <FadeIn delay={100} className="h-full -translate-y-4 md:-translate-y-6">
            <div className="bg-white rounded-3xl shadow-2xl relative overflow-hidden h-full flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-gradient-to-r from-brand-primary to-[#2D5A87] p-8 pb-12 text-white text-center relative">
                <span className="absolute top-4 right-4 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full">推薦</span>
                <h3 className="text-2xl font-bold mb-2">全面升級</h3>
                <p className="text-4xl font-bold">HKD $50,000<span className="text-lg font-normal opacity-80"> 起</span></p>
              </div>
              <div className="p-8 pt-6 flex-grow flex flex-col bg-white">
                <ul className="space-y-4 mb-8 flex-grow">
                  {['全流程自動化顧問', '多環節系統整合', '6 個月優化支援', '專屬 Account Manager', '包含員工培訓'].map(item => (
                    <li key={item} className="flex items-center text-brand-dark font-medium">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent mr-3" /> {item}
                    </li>
                  ))}
                </ul>
                <Button variant="primary" fullWidth onClick={() => window.location.href = '#cta'}>預約深度諮詢</Button>
              </div>
            </div>
          </FadeIn>

          {/* Tier 3 */}
          <FadeIn delay={200} className="h-full">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm h-full flex flex-col">
              <h3 className="text-xl font-bold text-brand-dark mb-2">AI 課程</h3>
              <p className="text-3xl font-bold text-brand-primary mb-6">按需報價</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {['線上課程 + 實體工作坊', '由淺入深教學', '適合想自學的老闆', '提供教材及範本'].map(item => (
                  <li key={item} className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary mr-3" /> {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" fullWidth onClick={() => window.location.href = '#cta'}>探索 AI 課程</Button>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Pricing;