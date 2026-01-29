import React from 'react';
import FadeIn from './ui/FadeIn';

const features = [
  { title: "香港本地團隊", desc: "溝通零障礙，了解本地商業文化" },
  { title: "創辦人親自參與", desc: "不是 Sales 應酬你，是專家解決問題" },
  { title: "實戰派技術", desc: "不講空泛概念，只交付可運行的系統" },
  { title: "全程透明", desc: "無隱藏收費，清楚知道每一分錢去向" }
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-gradient-to-br from-brand-primary via-[#2D5A87] to-[#3A7CA5] text-white overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Headline & Quote */}
          <div className="lg:w-5/12">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                點解揀 NextMaven AI？
              </h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                我們唔係外國 agency，我們係<span className="text-brand-accent font-bold">「香港製造」</span>。
                明白香港中小企的痛點：租貴、人手不足、競爭大。
              </p>

              {/* Founder Quote */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl relative">
                <span className="text-6xl font-serif absolute -top-4 -left-2 text-brand-accent opacity-50">“</span>
                <p className="text-lg italic text-blue-50 mb-6 relative z-10 leading-relaxed">
                  我自己都係中小企老闆，我知道你最怕嘅唔係『唔識 AI』，係『花咗錢但用唔到』。
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                    <img src="https://picsum.photos/100/100" alt="Tim Chan" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Tim Chan</p>
                    <p className="text-sm text-blue-200">NextMaven AI 創辦人</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Feature Grid */}
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 content-center">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 100} direction="up">
                <div className="h-full p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-brand-accent">{feature.title}</h3>
                  <p className="text-blue-100">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;