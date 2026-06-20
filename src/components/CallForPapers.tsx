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
        <div id="publication-opportunities" className="bg-white rounded-2xl border border-brand-gray/80 p-6 sm:p-10 shadow-md">
          
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase block mb-2">
              OUTLET ALIGNMENTS
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy font-display leading-tight">
              Publication Opportunities
            </h3>
            <div className="w-12 h-1 bg-brand-orange mx-auto mt-3 rounded-full" />
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-sm sm:text-base text-gray-700 font-sans leading-relaxed">
              SEA-FUTURES 2026 offers additional publication opportunities for interested participants. To opt for this program and proceed with the full paper submission and review process according to the timeline, an additional publication fee is required upfront.
            </p>

            <div>
              <p className="text-sm sm:text-base font-semibold text-brand-navy font-display mb-3">
                Publication options are available through:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-sans leading-relaxed">
                    Scopus-Indexed International Journal <span className="font-bold text-brand-navy">(Deposit: USD 200)</span>
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-sans leading-relaxed">
                    Scopus-Indexed International Proceedings/Book Chapter <span className="font-bold text-brand-navy">(USD 175)</span>
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <TableProperties className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-sans leading-relaxed">
                    International Proceeding/Book Chapter <span className="font-bold text-brand-navy">(USD 100)</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-t border-brand-gray/80 pt-5 mt-6">
              <div className="flex items-start gap-3 bg-gradient-to-r from-amber-50 to-orange-50 border border-brand-orange/15 rounded-xl p-4">
                <Sparkles className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                  <span className="font-bold text-brand-navy">Please note</span> that all full paper submissions will undergo a separate review and editorial process, subject to the requirements of the respective journal or publisher.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
