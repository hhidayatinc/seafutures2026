import React, { useState } from 'react';
import { ExternalLink, Award, Share2, Heart, ShieldCheck, Users, HelpCircle, GraduationCap, BookOpen, Cpu, Scale, Building2, Gavel, Globe } from 'lucide-react';
import { CORE_INFO, SDGS_INFO } from '../data/conferenceData';

const BrawijayaEmblem = () => {
  return (
    <svg className="w-14 h-14 shrink-0 hover:rotate-6 transition-transform duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circular gold frame */}
      <circle cx="50" cy="50" r="46" fill="#082D68" stroke="#F5B400" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="41" stroke="#F5B400" strokeWidth="1" strokeDasharray="3 2" />
      
      {/* Golden wings / rays */}
      <path d="M 50 20 L 36 45 C 38 48, 42 50, 44 48 L 50 32 L 56 48 C 58 50, 62 48, 64 45 Z" fill="#F5B400" opacity="0.9" />
      <path d="M 50 35 L 25 55 C 28 60, 36 62, 40 58 L 50 45 L 60 58 C 64 62, 72 60, 75 55 Z" fill="#F26522" opacity="0.8" />
      
      {/* Central Star */}
      <polygon points="50,14 53,22 61,22 55,27 57,35 50,30 43,35 45,27 39,22 47,22" fill="#F5B400" />
      
      {/* Internal temple step monument */}
      <rect x="42" y="62" width="16" height="4" rx="0.5" fill="#F5B400" />
      <rect x="44" y="56" width="12" height="6" rx="0.5" fill="#ffffff" />
      <rect x="47" y="50" width="6" height="6" rx="0.5" fill="#F5B400" />
      
      {/* Text arch UB */}
      <text x="50" y="80" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">FISIP UB</text>
    </svg>
  );
};

const UPMEmblem = () => {
  return (
    <svg className="w-14 h-14 shrink-0 hover:-rotate-6 transition-transform duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circular gold trim and red fill */}
      <circle cx="50" cy="50" r="46" fill="#C31F33" stroke="#F5B400" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="41" stroke="#ffffff" strokeWidth="0.75" />
      
      {/* Side arching leaves branches */}
      <path d="M 22 55 C 25 75, 45 82, 50 82 C 55 82, 75 75, 78 55" fill="none" stroke="#F5B400" strokeWidth="1.5" />
      <path d="M 18 45 C 15 65, 30 78, 50 81 C 70 78, 85 65, 82 45" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 2" />
      
      {/* Golden Stars */}
      <polygon points="50,22 52,26 56,26 53,29 54,33 50,31 46,33 47,29 44,26 48,26" fill="#F5B400" />
      <polygon points="36,26 38,30 42,30 39,33 40,37 36,35 32,37 33,33 30,30 34,30" fill="#F5B400" />
      <polygon points="64,26 66,30 70,30 67,33 68,37 64,35 60,37 61,33 58,30 62,30" fill="#F5B400" />
      
      {/* Open book element */}
      <path d="M 36 50 C 40 46, 48 46, 50 49 C 52 46, 60 46, 64 50 L 64 62 C 60 58, 52 58, 50 61 C 48 58, 40 58, 36 62 Z" fill="#ffffff" stroke="#F5B400" strokeWidth="1" />
      <line x1="50" y1="49" x2="50" y2="61" stroke="#F5B400" strokeWidth="1" />
      
      {/* UPM print text */}
      <text x="50" y="75" fill="#ffffff" fontSize="9" fontWeight="black" textAnchor="middle" fontFamily="sans-serif">UPM</text>
    </svg>
  );
};

const getSdgIcon = (number: number, color: string) => {
  const props = { className: "w-4 h-4 shrink-0 font-bold", style: { color } };
  switch (number) {
    case 4:
      return <BookOpen {...props} />;
    case 9:
      return <Cpu {...props} />;
    case 10:
      return <Scale {...props} />;
    case 11:
      return <Building2 {...props} />;
    case 16:
      return <Gavel {...props} />;
    case 17:
      return <Globe {...props} />;
    default:
      return <GraduationCap {...props} />;
  }
};

export default function About() {
  const hosts = [
    {
      role: 'Hosted by',
      name: 'Faculty of Social and Political Sciences (FISIP)',
      university: 'Universitas Brawijaya',
      location: 'Malang, East Java, Indonesia',
      desc: 'One of the leading state faculties of social and political sciences in Indonesia, fostering critical research and public sector strategies.',
      initials: 'FISIP UB',
      bgColor: 'bg-brand-navy'
    },
    {
      role: 'Co-hosted by',
      name: 'Faculty of Modern Languages and Communication',
      university: 'Universiti Putra Malaysia',
      location: 'Selangor, Malaysia',
      desc: 'A prominent, world-class research university in Malaysia offering extensive interdisciplinary communication and linguistic research.',
      initials: 'UPM',
      bgColor: 'bg-[#C31F33]'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#5c6e8d] font-bold uppercase block mb-2">
            CONFERENCE IDENTITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight">
            About The Conference
          </h2>
          <div className="w-16 h-1.5 bg-brand-orange mx-auto mt-4 rounded-full" />
        </div>

        {/* Introduction Panel */}
        <div className="bg-brand-bg rounded-2xl border border-brand-gray p-8 md:p-12 shadow-sm relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <GraduationCap className="w-48 h-48 text-brand-navy" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-2">
            <div className="lg:col-span-4 flex flex-col space-y-4">
              <span className="text-lg font-mono text-brand-orange font-bold uppercase tracking-wider block">
                SEA-FUTURES 2026
              </span>
              <h3 className="text-2xl font-bold text-brand-navy font-display leading-tight">
                Global Academic Platform for Interdisciplinary Exchange
              </h3>
              <p className="text-gray-500 text-sm font-sans leading-relaxed">
                Aiming to bring voices together to configure and construct ideas mapping Southeast Asia's sustainable future.
              </p>
            </div>
            
            <div className="lg:col-span-8 border-l-0 lg:border-l lg:border-brand-gray/80 lg:pl-8">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed font-sans">
                {CORE_INFO.abbreviation} is a global academic platform dedicated to advancing critical dialogue, research collaboration, and knowledge exchange on the future of Southeast Asia. Through interdisciplinary perspectives in social sciences, the conference connects scholars, practitioners, policymakers, and emerging researchers to address regional transformation, inclusive development, and global challenges.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="p-3 bg-white rounded-xl border border-brand-gray text-center">
                  <span className="text-2xl font-extrabold text-brand-navy font-mono">12+</span>
                  <span className="text-[10px] text-gray-500 uppercase block font-mono font-semibold tracking-wider mt-1">Sub-Themes</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-brand-gray text-center">
                  <span className="text-2xl font-extrabold text-brand-orange font-mono">100+</span>
                  <span className="text-[10px] text-gray-500 uppercase block font-mono font-semibold tracking-wider mt-1">Expected Papers</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-brand-gray text-center">
                  <span className="text-2xl font-extrabold text-brand-yellow font-mono">3+</span>
                  <span className="text-[10px] text-gray-500 uppercase block font-mono font-semibold tracking-wider mt-1">Publication routes</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-brand-gray text-center">
                  <span className="text-2xl font-extrabold text-[#14496B] font-mono">100%</span>
                  <span className="text-[10px] text-gray-500 uppercase block font-mono font-semibold tracking-wider mt-1">Double-Blind Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hosted By & Co-Hosted By Sections */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xl font-bold text-brand-navy font-display tracking-tight">
              Organizing Institutions
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Joint academic collaboration across leading institutes in Southeast Asia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {hosts.map((host, idx) => (
              <div 
                key={idx}
                className="bg-white border border-brand-gray rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-brand-orange">
                      {host.role}
                    </span>
                    {host.initials === 'FISIP UB' ? <BrawijayaEmblem /> : <UPMEmblem />}
                  </div>
                  <h4 className="text-lg font-bold text-brand-navy font-display leading-snug">
                    {host.name}
                  </h4>
                  <p className="text-sm font-semibold text-gray-600 mt-1 font-sans">
                    {host.university}
                  </p>
                  <p className="text-xs text-gray-400 mt-1 font-mono uppercase">
                    {host.location}
                  </p>
                  <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                    {host.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-gray/60 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-400">Verified Partner</span>
                  <span className="inline-flex items-center space-x-1 text-xs text-brand-navy font-bold hover:text-brand-orange transition-colors">
                    <span>Learn More</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SDGs alignment block (from Page 3) */}
        <div className="border-t border-brand-gray/80 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Text description left */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              <span className="text-[11px] font-mono tracking-widest text-[#5c6e8d] font-bold uppercase block">
                GLOBAL COMPACT
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-display tracking-tight leading-tight">
                Sustainable Development Goals (SDGs) Alignment
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {CORE_INFO.abbreviation} stands solidly with the United Nations Sustainable Development Goals. By advancing interdisciplinary dialogue, we critically analyze challenges directly tied to equality, infrastructure, and strong institutional policy across Southeast Asia.
              </p>
            </div>

            {/* SDG List Icons right */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {SDGS_INFO.map((sdg) => (
                  <div
                    key={sdg.number}
                    className="p-5 rounded-xl text-white flex flex-col justify-between h-36 relative overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.02] duration-300 transition-all group"
                    style={{ backgroundColor: sdg.color }}
                  >
                    <div className="flex justify-between items-start w-full">
                      {/* Big bold number */}
                      <span className="text-4xl font-black font-mono tracking-tight leading-none text-white">
                        {sdg.number}
                      </span>
                      {/* White-filled icon badge */}
                      <div className="p-1.5 rounded-lg bg-white/20 text-white shrink-0">
                        {getSdgIcon(sdg.number, "#ffffff")}
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-xs sm:text-sm font-extrabold tracking-wide uppercase font-sans leading-tight text-white line-clamp-2">
                        {sdg.title}
                      </h4>
                      <span className="text-[9px] font-mono tracking-widest text-white/70 uppercase block mt-1">
                        UN SDG
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
