import React from 'react';
import { Award, Layers, TableProperties, Sparkles } from 'lucide-react';
import { SUB_THEMES, CORE_INFO } from '../data/conferenceData';

export default function CallForPapers() {
  return (
    <section id="call-for-papers" className="py-20 bg-gradient-to-b from-[#FFF8F2] via-[#FFF5EC] to-[#F8F9FB] relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-orange/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-yellow/5 blur-3xl" />
        {/* Subtle curved decorative line like the reference */}
        <svg className="absolute top-0 right-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 600">
          <path d="M800 0 Q900 200 1200 150" fill="none" stroke="#F26522" strokeWidth="80" />
          <path d="M900 0 Q1000 300 1200 250" fill="none" stroke="#082D68" strokeWidth="60" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-orange font-bold uppercase block mb-2">
            ACADEMIC CONTRIBUTIONS
          </span>
          <h2 className="text-4xl font-extrabold text-brand-navy font-display tracking-tight leading-tight">
            Call For Papers
          </h2>
          <div className="w-16 h-1.5 bg-brand-orange mx-auto mt-4 rounded-full" />
          
          <div className="mt-6 p-4 rounded-xl bg-white border border-brand-orange/15 max-w-2xl mx-auto shadow-sm">
            <span className="text-[10px] font-mono uppercase tracking-wider text-brand-orange font-bold block">
              Core Themes
            </span>
            <p className="text-md font-bold text-brand-navy font-display leading-snug mt-1">
              "{CORE_INFO.subThemeMaster}"
            </p>
          </div>
        </div>

        {/* Sub-Themes */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xs font-mono tracking-widest text-brand-orange font-bold uppercase">
              Core Sub-Themes / Topic Tracks
            </h3>
            <p className="text-xs text-gray-400 font-sans mt-0.5">Twelve focused areas for academic submissions and joint dialogue</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUB_THEMES.map((theme) => (
              <div 
                key={theme.number}
                className="bg-white border border-brand-gray/80 rounded-xl p-5 hover:shadow-lg hover:border-brand-orange/30 hover:-translate-y-0.5 transition-all duration-300 flex items-start space-x-3 group"
              >
                <div className="w-9 h-9 rounded-full bg-brand-orange text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 group-hover:bg-brand-navy group-hover:scale-110 transition-all duration-300 shadow-sm">
                  {theme.number.toString().padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-brand-navy font-display leading-snug group-hover:text-brand-orange transition-colors">
                    {theme.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publication Opportunities */}
        <div id="publication-opportunities" className="bg-white rounded-2xl border border-brand-gray/80 p-6 sm:p-8 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase block">
                  OUTLET ALIGNMENTS
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy font-display leading-tight">
                  Publication Opportunities
                </h3>
                <p className="text-xs text-gray-500 font-sans leading-relaxed">
                  Selected high-quality papers will undergo peer evaluation for fast-track publication.
                </p>
              </div>

              <div className="block mt-6 border-t border-brand-gray/80 pt-4">
                <span className="text-[10px] font-mono text-brand-orange uppercase font-bold block">
                  Editorial Note
                </span>
                <p className="text-[11px] text-gray-400 font-sans leading-relaxed mt-1">
                  All submissions are peer-reviewed. Acceptance into targeted journals depends entirely on manuscript originality and quality standards.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Option 1 */}
              <div className="bg-gradient-to-br from-[#FFF8F2] to-white border border-brand-orange/10 rounded-xl p-5 hover:shadow-md hover:border-brand-orange/25 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-brand-navy font-display">
                  Conference Proceedings
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed mt-2 font-sans">
                  Peer-reviewed abstracts and papers will be archived into registered digital proceedings with standard DOI indexes.
                </p>
              </div>

              {/* Option 2 */}
              <div className="bg-gradient-to-br from-[#FFF8F2] to-white border border-brand-orange/10 rounded-xl p-5 hover:shadow-md hover:border-brand-orange/25 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-brand-navy font-display">
                  International Book Chapters
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed mt-2 font-sans">
                  Selected outputs will be grouped by specific sub-themes to form reference hardback book chapters with top global academic publishers.
                </p>
              </div>

              {/* Option 3 */}
              <div className="bg-gradient-to-br from-[#FFF8F2] to-white border border-brand-orange/10 rounded-xl p-5 hover:shadow-md hover:border-brand-orange/25 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <TableProperties className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-brand-navy font-display">
                  Selected Indexed Journals
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed mt-2 font-sans">
                  Top papers undergo priority evaluation in respected sub-theme indexed journals (including Scopus Tier special volumes).
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
