import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import FadeIn from './ui/FadeIn';

const data = [
  { name: '薪金支出', value: 45000, color: '#2D5A87' },
  { name: '租金開支', value: 35000, color: '#3A7CA5' },
  { name: '低效時間成本', value: 60000, color: '#FF6B6B' }, // Highlighted error color for waste
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-apple-card border border-gray-100">
        <p className="font-semibold text-brand-dark mb-1">{label}</p>
        <p className="text-brand-primary">
          HKD ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const Problem: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-brand-light">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6 leading-tight">
                你的團隊每日<br />
                <span className="text-[#FF6B6B]">「燒」</span>緊幾多錢？
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                香港人工貴、租金貴，但最貴的，是<span className="font-bold text-brand-dark">「時間」</span>。
                當你的員工花 3 小時做 Copy & Paste 的工作，你的企業就失去咗 3 小時創造價值的機會。
              </p>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 inline-block">
                <p className="text-gray-500 text-sm mb-2 uppercase tracking-wider">每月隱形損失</p>
                <p className="text-4xl md:text-5xl font-bold text-brand-dark">
                  HKD $60,000<span className="text-brand-accent text-3xl">+</span>
                </p>
                <p className="text-sm text-gray-400 mt-2">*基於 5 人團隊每日 2 小時低效工作計算</p>
              </div>
            </FadeIn>
          </div>

          {/* Chart */}
          <div className="lg:w-1/2 w-full h-[400px]">
            <FadeIn direction="left" delay={200}>
              <div className="bg-white p-8 rounded-3xl shadow-apple-card h-full relative">
                 <h3 className="text-lg font-semibold text-center mb-6 text-gray-500">企業每月支出分佈估算</h3>
                <ResponsiveContainer width="100%" height="90%">
                  <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#86868B', fontSize: 14 }}
                      dy={10}
                    />
                    <YAxis 
                      hide={true} 
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                    <Bar dataKey="value" radius={[8, 8, 8, 8]} barSize={60}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;