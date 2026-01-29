import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';
import { NAVIGATION_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      } h-[72px] flex items-center`}
    >
      <div className="container mx-auto px-6 max-w-[1200px] flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-brand-primary tracking-tight">
          NextMaven AI
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-brand-dark hover:text-brand-primary font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" size="sm" onClick={() => window.location.href = '#cta'}>
            免費診斷
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-dark focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-x-0 top-[72px] bg-white shadow-xl transition-all duration-300 md:hidden overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-6 px-6">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-brand-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button fullWidth onClick={() => { setIsMobileMenuOpen(false); window.location.href = '#cta'; }}>
            免費診斷
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;