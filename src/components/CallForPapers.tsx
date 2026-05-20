import React from 'react';
import { Award, Layers, TableProperties } from 'lucide-react';
import { SUB_THEMES, CORE_INFO } from '../data/conferenceData';

export default function CallForPapers() {
  return (
    <section id="call-for-papers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#5c6e8d] font-bold uppercase block mb-2">
            ACADEMIC CONTRIBUTIONS
          </span>
          <h2 className="text-4xl font-extrabold text-brand-navy font-display tracking-tight leading-tight">
            Call For Papers
          </h2>
          <div className="w-16 h-1.5 bg-brand-orange mx-auto mt-4 rounded-full" />
          
          <div className="mt-6 p-4 rounded-xl bg-brand-navy/5 border border-brand-navy/10 max-w-2xl mx-auto">
            <span className="text-[10px] font-mono uppercase tracking-wider text-brand-orange font-bold block">
              Core Themes
            </span>
            <p className="text-md font-bold text-brand-navy font-display leading-snug mt-1">
              "{CORE_INFO.subThemeMaster}"
            </p>
          </div>
        </div>

        {/* Sub-Themes - No Descriptions */}
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
                className="bg-brand-bg border border-brand-gray rounded-xl p-5 hover:bg-white hover:shadow-md hover:border-brand-navy/20 transition-all duration-300 flex items-start space-x-3"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-navy/5 text-brand-navy flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 border border-brand-navy/10">
                  {theme.number.toString().padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-brand-navy font-display leading-snug">
                    {theme.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publication Opportunities - Highly prominent & permanently visible */}
        <div id="publication-opportunities" className="bg-brand-bg rounded-2xl border border-brand-gray p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#14496B] uppercase block">
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
              <div className="bg-white border border-brand-gray rounded-xl p-5 shadow-sm hover:border-brand-orange/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-brand-navy/5 text-brand-navy flex items-center justify-center mb-3">
                  <Layers className="w-5 h-5 text-brand-navy" />
                </div>
                <h4 className="text-sm font-bold text-brand-navy font-display">
                  Conference Proceedings
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed mt-2 font-sans">
                  Peer-reviewed abstracts and papers will be archived into registered digital proceedings with standard DOI indexes.
                </p>
              </div>

              {/* Option 2 */}
              <div className="bg-white border border-brand-gray rounded-xl p-5 shadow-sm hover:border-brand-orange/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-brand-navy/5 text-brand-navy flex items-center justify-center mb-3">
                  <Award className="w-5 h-5 text-brand-orange" />
                </div>
                <h4 className="text-sm font-bold text-brand-navy font-display">
                  International Book Chapters
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed mt-2 font-sans">
                  Selected outputs will be grouped by specific sub-themes to form reference hardback book chapters with top global academic publishers.
                </p>
              </div>

              {/* Option 3 */}
              <div className="bg-white border border-brand-gray rounded-xl p-5 shadow-sm hover:border-brand-orange/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-brand-navy/5 text-brand-navy flex items-center justify-center mb-3">
                  <TableProperties className="w-5 h-5 text-brand-yellow" />
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
