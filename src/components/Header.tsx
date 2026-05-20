import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { CORE_INFO } from '../data/conferenceData';
import LogoEmblem from './LogoEmblem';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenSubmitModal?: () => void;
  onOpenRegisterModal: () => void;
}

export default function Header({ onNavigate, activeSection, onOpenSubmitModal, onOpenRegisterModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Speakers', id: 'speakers' },
    { name: 'Call for Papers', id: 'call-for-papers' },
    { name: 'Program & Dates', id: 'program' },
    { name: 'Venue', id: 'venue' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-1000 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3 border-b border-brand-gray' 
          : 'bg-white/95 backdrop-blur-md py-4 border-b border-brand-gray/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Branding Area */}
          <div 
            onClick={() => handleLinkClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <LogoEmblem size={44} className="transition-all duration-300 group-hover:scale-105 shrink-0" />
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="text-xl font-bold tracking-tight text-brand-navy font-display">
                  SEA-FUTURES
                </span>
                <span className="text-xl font-bold text-brand-orange font-display">
                  2026
                </span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#5c6e8d]">
                Social Sciences Conference
              </span>
            </div>
          </div>

          {/* Desktop Navigation Link Menu */}
          <div className="hidden lg:flex items-center space-x-1.5 xl:space-x-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === link.id
                    ? 'text-brand-orange bg-brand-orange/5 font-semibold'
                    : 'text-brand-navy/80 hover:text-brand-orange hover:bg-brand-navy/5'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              id="header-register-now"
              onClick={onOpenRegisterModal}
              className="px-5 py-2.5 bg-brand-navy hover:bg-brand-orange text-white rounded-lg text-sm font-semibold transition-all duration-200 flex items-center space-x-1.5 shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-brand-navy hover:text-brand-orange hover:bg-brand-navy/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-orange transition-all duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden bg-white border-b border-brand-gray/80`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-brand-orange bg-brand-orange/5 font-semibold'
                  : 'text-brand-navy/80 hover:text-brand-orange hover:bg-brand-navy/5'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 border-t border-brand-gray flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 px-4">
            <button
              id="mobile-register-now"
              onClick={() => { setIsOpen(false); onOpenRegisterModal(); }}
              className="w-full text-center px-4 py-2.5 bg-brand-navy hover:bg-brand-orange text-white rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
