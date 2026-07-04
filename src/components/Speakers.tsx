import React from 'react';
import { HelpCircle } from 'lucide-react';
import { SPEAKERS } from '../data/conferenceData';

const SpeakerAvatar = ({ name, type, avatarUrl, avatarPosition }: { name: string; type: 'keynote' | 'panel'; avatarUrl?: string; avatarPosition?: string }) => {
  const words = name.split(' ');
  let initials = '';
  const skippedTitles = ['DR', 'DR.', 'ASSOC', 'ASSOC.', 'PROF', 'PROF.', 'S.IP.', 'M.IDEA.'];
  const cleanWords = words.filter(
    w => !skippedTitles.includes(w.toUpperCase()) && w.toUpperCase() !== 'TBA' && w.toUpperCase() !== 'TBC'
  );
  if (cleanWords.length > 0) {
    initials += cleanWords[0][0];
    if (cleanWords.length > 1) {
      initials += cleanWords[1][0];
    }
  } else {
    initials = 'SP';
  }
  initials = initials.toUpperCase().slice(0, 2);

  const isKeynote = type === 'keynote';

  return (
    <div className={`relative mx-auto rounded-2xl overflow-hidden flex items-center justify-center border-4 border-white shadow-md bg-gradient-to-br from-[#082D68] via-indigo-950 to-[#041d44] transition-all duration-300 group-hover:scale-105 shrink-0 ${
      isKeynote ? 'w-32 h-32 mb-6' : 'w-24 h-24 mb-4'
    }`}>
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: avatarPosition || 'top' }}
        />
      ) : (
        <>
          {/* Decorative inner gradient lights */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,101,34,0.35),transparent_70%)]" />
          <div className="absolute -bottom-2 w-11/12 h-3/5 rounded-t-2xl bg-white/10 border border-white/15" />
          <div className="absolute w-4/5 h-4/5 rounded-2xl border border-white/5 animate-pulse" />
          
          {/* Initials Text */}
          <span className={`font-display font-bold text-white tracking-tight leading-none z-10 ${
            isKeynote ? 'text-4xl' : 'text-2xl'
          }`}>
            {initials}
          </span>
        </>
      )}
      
      {/* Small design accent dot */}
      <span className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-brand-orange border border-white" />
    </div>
  );
};

export default function Speakers() {
  // Divide into panels, keynotes, or opening
  const keynotes = SPEAKERS.filter(s => s.type === 'keynote');
  const openings = SPEAKERS.filter(s => s.type === 'opening');
  const panelists = SPEAKERS.filter(s => s.type === 'panel');

  return (
    <section id="speakers" className="py-20 bg-brand-bg border-y border-brand-gray/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#5c6e8d] font-bold uppercase block mb-2">
            ACADEMIC POOL
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight">
            Keynote & Panel Speakers
          </h2>
          <div className="w-16 h-1.5 bg-brand-orange mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto">
            Broadening perspectives through leading minds and policymakers in Southeast Asian social landscapes.
          </p>
        </div>

        {/* Opening Remarks & Keynote Side by Side */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Opening Remarks Card */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-xs font-mono tracking-wider text-[#14496B] font-bold uppercase">
                OPENING REMARKS
              </h3>
              <p className="text-xs text-gray-400 font-sans mt-0.5">Session to be scheduled on Day 1 (Oct 31)</p>
            </div>

            {openings.map((speaker) => (
              <div 
                key={speaker.id}
                className="bg-white border-2 border-solid border-[#14496B]/30 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-[calc(100%-3.5rem)]"
              >
                <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-mono font-bold uppercase px-3.5 py-1 rounded-bl-xl shadow-sm">
                  CONFIRMED
                </div>
                
                <SpeakerAvatar name={speaker.name} type="keynote" avatarUrl={speaker.avatarUrl} avatarPosition={speaker.avatarPosition} />

                <h4 className="text-xl font-bold text-brand-navy font-display">
                  {speaker.name}
                </h4>
                <p className="text-sm text-[#14496B] font-semibold font-sans mt-1">
                  {speaker.title}
                </p>
                <p className="text-xs text-gray-500 font-mono mt-1 uppercase">
                  {speaker.affiliation}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed font-sans max-w-md mx-auto mt-4 px-2">
                  {speaker.bio}
                </p>

              </div>
            ))}
          </div>

          {/* Keynote Focus Card */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-xs font-mono tracking-wider text-brand-orange font-bold uppercase">
                KEYNOTE ADDRESS
              </h3>
              <p className="text-xs text-gray-400 font-sans mt-0.5">Session to be scheduled on Day 1 (Oct 31)</p>
            </div>

            {keynotes.map((speaker) => (
              <div 
                key={speaker.id}
                className="bg-white border-2 border-dashed border-brand-orange/30 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-[calc(100%-3.5rem)]"
              >
                <div className="absolute top-0 right-0 bg-brand-orange text-white text-[10px] font-mono font-bold uppercase px-3.5 py-1 rounded-bl-xl shadow-sm">
                  TBC
                </div>
                
                <SpeakerAvatar name={speaker.name} type="keynote" avatarUrl={speaker.avatarUrl} avatarPosition={speaker.avatarPosition} />

                <h4 className="text-xl font-bold text-brand-navy font-display">
                  {speaker.name}
                </h4>
                <p className="text-sm text-brand-orange font-semibold font-sans mt-1">
                  {speaker.title}
                </p>
                <p className="text-xs text-gray-500 font-mono mt-1 uppercase">
                  {speaker.affiliation}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed font-sans max-w-md mx-auto mt-4 px-2">
                  {speaker.bio}
                </p>

               
              </div>
            ))}
          </div>

        </div>

        {/* Panel Speakers Grid */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-xs font-mono tracking-wider text-[#14496B] font-bold uppercase">
              DISTINGUISHED PANELISTS
            </h3>
            <p className="text-xs text-gray-400 font-sans mt-0.5">Focusing on cross-regional development sub-themes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {panelists.map((speaker, index) => (
              <div
                key={speaker.id}
                className={`bg-white rounded-2xl border border-brand-gray p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group overflow-hidden ${
                  speaker.isTBC ? 'border-dashed border-gray-300 bg-white/60' : ''
                }`}
              >
                {/* Visual Status Indicator Badge */}
                <div className="absolute top-3 right-3 flex items-center">
                  {speaker.isTBC ? (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#E6E8EC]/80 text-[#5c6e8d]">
                      <span>TBC</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-100 text-emerald-800">
                      <span>CONFIRMED</span>
                    </span>
                  )}
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <SpeakerAvatar name={speaker.name} type="panel" avatarUrl={speaker.avatarUrl} avatarPosition={speaker.avatarPosition} />

                    <h4 className="text-md font-bold text-brand-navy font-display group-hover:text-brand-orange transition-colors">
                      {speaker.name}
                    </h4>
                    <p className="text-xs text-brand-orange font-semibold mt-1">
                      {speaker.title}
                    </p>
                  </div>
                  
                  <div>
                    <div className="w-10 h-0.5 bg-brand-gray mt-3 mb-3 group-hover:bg-brand-orange/40 transition-all" />

                    <p className="text-xs text-gray-500 font-sans">
                      {speaker.affiliation}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-gray/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                    Panel Speaker {index + 1}
                  </span>
                  <span className="text-[10px] font-semibold text-brand-orange font-mono">
                    Accredited
                  </span>
                </div>
              </div>
            ))}

          
          </div>
        </div>

      </div>
    </section>
  );
}
