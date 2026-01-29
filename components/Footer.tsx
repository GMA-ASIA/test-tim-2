import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white tracking-tight mb-2 block">
              NextMaven AI
            </a>
            <p className="text-gray-400">AI 自動化，為香港中小企而設。</p>
          </div>

          <div className="flex space-x-8">
            {NAVIGATION_LINKS.map(link => (
              <a key={link.label} href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2025 NextMaven AI. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-brand-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-brand-accent transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-brand-accent transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;