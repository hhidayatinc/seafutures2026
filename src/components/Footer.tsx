import React from 'react';
import { Mail, MapPin, Hash, ShieldCheck } from 'lucide-react';
import { CORE_INFO } from '../data/conferenceData';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const navs = [
    { name: 'Home Landing', section: 'home' },
    { name: 'About Guidelines', section: 'about' },
    { name: 'Featured Speakers', section: 'speakers' },
    { name: '12 sub-themes list', section: 'call-for-papers' },
    { name: 'Conference Agenda', section: 'program' },
    { name: 'Venue & Lodging', section: 'venue' },
  ];

  return (
    <footer id="footer" className="bg-brand-navy text-white overflow-hidden">
      
      {/* Slogan Connect banner from Page 5 referensi */}
      <div className="bg-brand-orange text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          <span className="text-xl sm:text-2xl font-black font-display tracking-wide uppercase">
            Connect. Collaborate. Create Futures.
          </span>
          <div className="inline-flex items-center space-x-1 bg-white/10 px-4 py-1.5 rounded-full border border-white/25 text-xs font-mono font-bold tracking-widest">
            <Hash className="w-3.5 h-3.5" />
            <span>&bull; SEAFUTURES2026 &bull;</span>
          </div>
        </div>
      </div>

      {/* Main Footer Information block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
          
          {/* Col 1: Organizing Institutions & Reagal note */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-extrabold tracking-tight font-display text-white">
                  SEA-FUTURES
                </span>
                <span className="text-2xl font-extrabold font-display text-brand-orange">
                  2026
                </span>
              </div>
              <p className="text-xs text-[#a3b8cc] leading-relaxed max-w-sm font-sans mx-1">
                Southeast Asia Futures Conference on Social Sciences is organized to integrate research collaborations between Universitas Brawijaya and Universiti Putra Malaysia.
              </p>
            </div>

            {/* University affiliations info card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-white/10 rounded-xl p-4 bg-white/5">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div className="text-[11px] text-[#ccd9e6] font-sans">
                  <p className="font-bold text-white uppercase tracking-wider font-mono">Co-Hosts Locations</p>
                  <p className="mt-0.5 font-semibold">Universiti Putra Malaysia (UPM), Selangor, Malaysia</p>
                  <p>FISIP Universitas Brawijaya, Malang, East Java, Indonesia</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div className="text-[11px] text-[#ccd9e6] font-sans">
                  <p className="font-bold text-white uppercase tracking-wider font-mono">Inquiry Channels</p>
                  <p className="mt-0.5">Principal: <a href={`mailto:${CORE_INFO.email}`} className="text-[#a3e5ff] hover:underline font-mono">{CORE_INFO.email}</a></p>
                  <p>Secondary: <a href={`mailto:${CORE_INFO.secondaryEmail}`} className="text-[#a3e5ff] hover:underline font-mono">{CORE_INFO.secondaryEmail}</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#a3b8cc] uppercase">
              Web Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#ccd9e6]">
              {navs.map((link, idx) => (
                <li key={idx}>
                  <button 
                    id={`footer-nav-${link.section}`}
                    onClick={() => onScrollToSection(link.section)}
                    className="hover:text-brand-orange transition-colors text-left text-xs uppercase font-mono cursor-pointer"
                  >
                    &bull; {link.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-6 flex items-center space-x-1.5 text-gray-400 text-[10px]">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Institutional double-blind review system verified.</span>
            </div>
          </div>

        </div>

        {/* Brand Power footer on Page 3 "FOOTER: Powered by Reagal" */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-center gap-4 text-xs text-[#a3b8cc] font-sans">
          <div>
            <p>&copy; 2026 SEA-FUTURES 2026. All academic copyrights reserved are maintained by UB & UPM.</p>
          </div>
          
          {/* Powered by Reagal badge as explicitly required in PDF page 3 */}
          <div className="flex items-center space-x-2 bg-white/5 border border-white/15 px-3 py-1.5 rounded-lg">
            <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400">
              Powered by
            </span>
            <div className="flex items-center space-x-1 font-black font-display text-white">
              <span className="text-brand-orange">R</span>
              <span>eagal</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
