import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { DATES } from '../data/conferenceData';

export default function ProgramTimeline() {
  const [activeTimelineTab, setActiveTimelineTab] = useState<'timeline' | 'day1' | 'day2'>('timeline');

  return (
    <section id="program" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#5c6e8d] font-bold uppercase block mb-2">
            CONGRESS AGENDA & TIMELINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight">
            Important Dates & Program Overview
          </h2>
          <div className="w-16 h-1.5 bg-brand-orange mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab triggers */}
        <div className="flex justify-center space-x-2 mb-12">
          <button
            id="tab-milestones"
            onClick={() => setActiveTimelineTab('timeline')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTimelineTab === 'timeline'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'bg-brand-bg text-brand-navy border border-brand-gray hover:bg-brand-navy/5'
            }`}
          >
            Important Deadlines
          </button>
          <button
            id="tab-day1"
            onClick={() => setActiveTimelineTab('day1')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTimelineTab === 'day1'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'bg-brand-bg text-brand-navy border border-brand-gray hover:bg-brand-navy/5'
            }`}
          >
            Day 1 (31 October 2026)
          </button>
          <button
            id="tab-day2"
            onClick={() => setActiveTimelineTab('day2')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTimelineTab === 'day2'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'bg-brand-bg text-brand-navy border border-brand-gray hover:bg-brand-navy/5'
            }`}
          >
            Day 2 (1 November 2026)
          </button>
        </div>

        {/* TAB 1: DEADLINES VIEW */}
        {activeTimelineTab === 'timeline' && (
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-brand-gray pl-6 sm:pl-8 space-y-12 py-3 mt-4">
              
              {DATES.map((date) => {
                let badgeStyle = 'bg-brand-gray text-[#5c6e8d]';
                if (date.type === 'submission') badgeStyle = 'bg-brand-navy/10 text-brand-navy font-bold';
                if (date.type === 'notification') badgeStyle = 'bg-brand-orange/10 text-brand-orange font-bold';
                if (date.type === 'registration') badgeStyle = 'bg-brand-yellow/10 text-[#a07400] font-bold';
                if (date.type === 'event') badgeStyle = 'bg-indigo-100 text-[#1e293b] font-bold';

                return (
                  <div key={date.id} className="relative group">
                    {/* Circle timeline visual notch */}
                    <div className="absolute -left-[31px] sm:-left-[39px] w-5 h-5 rounded-full border-4 border-white bg-brand-orange group-hover:bg-brand-navy group-hover:scale-110 transition-all shadow-sm z-2" />
                    
                    <div className="bg-brand-bg rounded-2xl border border-brand-gray p-6 hover:bg-white hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <span className={`inline-block text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full ${badgeStyle}`}>
                          {date.type} List
                        </span>
                        
                        <div className="flex items-center text-xs font-mono font-bold text-brand-orange">
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          <span>{date.currentDate}</span>
                        </div>
                      </div>

                      <h4 className="text-md font-bold text-brand-navy font-display">
                        {date.label}
                      </h4>
                      {date.originalDate.includes('TBA') ? (
                        <p className="text-xs text-brand-orange mt-2 italic font-mono uppercase">
                          Payment details & pricing schedules will be published in subsequent iterations.
                        </p>
                      ) : (
                        <p className="text-xs text-gray-500 mt-1">
                          Adherence to the schedule is mandatory to guarantee inclusion in proceedings indexes.
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        )}

        {/* TAB 2: Day 1 - Coming Soon */}
        {activeTimelineTab === 'day1' && (
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="bg-brand-bg border border-brand-gray rounded-2xl p-12">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-navy font-display mb-3">Coming Soon</h3>
              <p className="text-gray-500 text-sm font-sans max-w-md mx-auto">
                The detailed program schedule for Day 1 (31 October 2026) will be announced closer to the conference date. Stay tuned!
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: Day 2 - Coming Soon */}
        {activeTimelineTab === 'day2' && (
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="bg-brand-bg border border-brand-gray rounded-2xl p-12">
              <div className="w-16 h-16 bg-brand-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-brand-navy" />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-navy font-display mb-3">Coming Soon</h3>
              <p className="text-gray-500 text-sm font-sans max-w-md mx-auto">
                The detailed program schedule for Day 2 (1 November 2026) will be announced closer to the conference date. Stay tuned!
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
