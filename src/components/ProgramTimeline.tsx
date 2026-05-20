import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Milestone, CheckSquare, Layers, Sparkles, Award } from 'lucide-react';
import { DATES } from '../data/conferenceData';

export default function ProgramTimeline() {
  const [activeTimelineTab, setActiveTimelineTab] = useState<'timeline' | 'day1' | 'day2'>('timeline');

  // Interactive timeline events Day 1
  const day1Events = [
    {
      time: '08:00 - 09:00',
      title: 'Registration & Morning Coffee Reception',
      speaker: 'Event Committee Desk',
      room: 'Main Academic Hall Foyer, Universiti Putra Malaysia',
      desc: 'Pick up badges, conference programs, proceedings handbook, and VIP kits.'
    },
    {
      time: '09:00 - 09:30',
      title: 'Opening Ceremony & VIP Welcoming Addresses',
      speaker: 'Deans & Organizers from Universitas Brawijaya (FISIP UB) & Universiti Putra Malaysia (UPM)',
      room: 'Grand Auditorium, UPM',
      desc: 'Introductory speeches celebrating international research cooperation and regional transformation.'
    },
    {
      time: '09:30 - 10:45',
      title: 'Keynote Address & Photo Session',
      speaker: 'TBA (Global Social Sciences Leader)',
      room: 'Grand Auditorium, UPM',
      desc: 'A comprehensive opening lecture framing "Global Southeast Asia: Expanding Networks for Regional Development".'
    },
    {
      time: '10:45 - 11:15',
      title: 'Networking Coffee Break & Poster Exhibition',
      speaker: 'All participants',
      room: 'Exhibition Hall B',
      desc: 'Reviewing physical poster sessions on regional development, environmental policies, and digital models.'
    },
    {
      time: '11:15 - 12:45',
      title: 'Panel Session 1: Technology & Social Transformation',
      speaker: 'Dr. Anggun Trisnanto Hari Susilo, S.IP., M.IDEA. & Selected Panelists',
      room: 'Auditorium A',
      desc: 'Examining artificial intelligence governance, public communication, and digital inequality gaps across ASEAN.'
    },
    {
      time: '12:45 - 14:00',
      title: 'Halal Community Lunch & Dedicated networking slots',
      speaker: 'All Participants',
      room: 'VIP Dining Area',
      desc: 'Fostering peer connections over authentic Malaysian-Javanese local dishes.'
    },
    {
      time: '14:00 - 15:30',
      title: 'Parallel Paper Tracks (Sessions 1-4)',
      speaker: 'Accepted Author Presenters',
      room: 'Seminar Rooms 101, 102 & 201',
      desc: 'Simultaneous tracks covering tracks like: 1) Public Policy, 2) Democracy & Political Dynamics, 3) Data Governance & Privacy.'
    },
    {
      time: '15:30 - 15:50',
      title: 'Afternoon Tea Stand & Informal dialogue',
      room: 'Central Courtyard',
      desc: 'Quick refreshments.'
    },
    {
      time: '15:50 - 17:30',
      title: 'Parallel Paper Tracks (Sessions 5-8)',
      speaker: 'Accepted Author Presenters',
      room: 'Seminar Rooms 101, 102 & 201',
      desc: 'Continuing specialized sessions on: 4) Social Cohesion, 5) Youth Education & Well-being, 6) Media Narratives & Perception.'
    }
  ];

  // Day 2
  const day2Events = [
    {
      time: '09:00 - 10:30',
      title: 'Panel Session 2: Governance, Regulation, & Public Policy',
      speaker: 'Assoc. Prof. Dr Hazlina Abdul Halim & Co-Speakers',
      room: 'Grand Auditorium, UPM',
      desc: 'Analyses of policy coordination, rural developments, land preservation strategies, and digital education platforms.'
    },
    {
      time: '10:30 - 11:00',
      title: 'Coffee Break & Group Photograph',
      room: 'Central Courtyard Steps',
      desc: 'Official grouping photo of all international delegates and representatives.'
    },
    {
      time: '11:00 - 12:30',
      title: 'Parallel Paper Tracks (Sessions 9-12)',
      speaker: 'Accepted Author Presenters',
      room: 'Seminar Rooms 101 & 102',
      desc: 'Final presentation rounds focusing on: 10) Regional Change, 11) International Relations & ASEAN centralization, 12) Culture & Society.'
    },
    {
      time: '12:30 - 14:00',
      title: 'VIP Lunch & Panelist Discussion Wrap-Up',
      speaker: 'Senior Representatives',
      room: 'Faculty Club lounge',
      desc: 'Private roundtables plotting collaborative grant programs and multi-institute curriculum exchanges.'
    },
    {
      time: '14:00 - 15:30',
      title: 'Best Paper Awards & Proceedings Closure',
      speaker: 'Award Committee Chair',
      room: 'Grand Auditorium, UPM',
      desc: 'Recognition of Top 3 Outstanding Studies, Student Paper awards, and brief remarks on manuscript publication pathways.'
    },
    {
      time: '15:30 - 16:00',
      title: 'Closing Ceremony & Coffee Send-off',
      speaker: 'Organizing Committee Directors',
      room: 'Grand Auditorium, UPM',
      desc: 'A physical farewell and official hand-off notice for upcoming SEA-FUTURES iterations.'
    }
  ];

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

        {/* TAB 2: Day 1 Schedule list */}
        {activeTimelineTab === 'day1' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/20 px-3 py-1 px-4 py-2.5 rounded-xl text-brand-orange font-semibold text-xs uppercase mb-4 self-start max-w-sm">
              <Sparkles className="w-4 h-4" />
              <span>Full Program Day 1 &bull; Oct 31, 2026</span>
            </div>

            <div className="space-y-4">
              {day1Events.map((ev, index) => (
                <div 
                  key={index}
                  className="bg-brand-bg border border-brand-gray rounded-2xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
                >
                  <div className="md:col-span-3 flex flex-row md:flex-col items-center md:items-start space-x-2 md:space-x-0">
                    <Clock className="w-4 h-4 text-brand-orange shrink-0" />
                    <span className="text-sm font-mono font-bold text-brand-navy md:mt-1">
                      {ev.time}
                    </span>
                  </div>

                  <div className="md:col-span-9 space-y-2 border-l-0 md:border-l md:border-brand-gray md:pl-6">
                    <h4 className="text-md font-bold text-brand-navy font-display line-clamp-2 leading-snug">
                      {ev.title}
                    </h4>
                    {ev.speaker && (
                      <p className="text-xs text-brand-orange font-semibold font-sans">
                        Presented by: {ev.speaker}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 font-sans">
                      {ev.desc}
                    </p>
                    <div className="inline-flex items-center text-[10px] font-mono font-semibold bg-brand-navy/5 text-brand-navy px-2 py-0.5 rounded border">
                      <MapPin className="w-2.5 h-2.5 mr-1" />
                      <span>{ev.room}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Day 2 Schedule list */}
        {activeTimelineTab === 'day2' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center space-x-2 bg-brand-navy/10 border border-brand-navy/20 px-3 py-1 px-4 py-2.5 rounded-xl text-brand-navy font-semibold text-xs uppercase mb-4 self-start max-w-sm">
              <Award className="w-4 h-4" />
              <span>Full Program Day 2 &bull; Nov 1, 2026</span>
            </div>

            <div className="space-y-4">
              {day2Events.map((ev, index) => (
                <div 
                  key={index}
                  className="bg-brand-bg border border-brand-gray rounded-2xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
                >
                  <div className="md:col-span-3 flex flex-row md:flex-col items-center md:items-start space-x-2 md:space-x-0">
                    <Clock className="w-4 h-4 text-brand-orange shrink-0" />
                    <span className="text-sm font-mono font-bold text-brand-navy md:mt-1">
                      {ev.time}
                    </span>
                  </div>

                  <div className="md:col-span-9 space-y-2 border-l-0 md:border-l md:border-brand-gray md:pl-6">
                    <h4 className="text-md font-bold text-brand-navy font-display line-clamp-2 leading-snug">
                      {ev.title}
                    </h4>
                    {ev.speaker && (
                      <p className="text-xs text-brand-orange font-semibold font-sans">
                        Presented by: {ev.speaker}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 font-sans">
                      {ev.desc}
                    </p>
                    <div className="inline-flex items-center text-[10px] font-mono font-semibold bg-brand-navy/5 text-brand-navy px-2 py-0.5 rounded border">
                      <MapPin className="w-2.5 h-2.5 mr-1" />
                      <span>{ev.room}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
