import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowUpRight, Trophy, Sparkles, GraduationCap, ArrowRight } from 'lucide-react';
import { CORE_INFO } from '../data/conferenceData';

interface HeroProps {
  onOpenSubmitModal: () => void;
  onOpenRegisterModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onOpenSubmitModal, onOpenRegisterModal, onScrollToSection }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    // Target date: October 31, 2026 UTC
    const targetDate = new Date('2026-10-31T00:00:00Z').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-br from-[#082D68] via-[#0b3471] to-[#041d44] text-white">
      {/* Decorative background grids/ellipses */}
      <div className="absolute inset-0 pointer-events-none opacity-45">
        <div className="absolute top-10 right-5 w-96 h-96 rounded-full bg-brand-orange/25 blur-3xl animate-pulse" />
        <div className="absolute bottom-5 left-5 w-80 h-80 rounded-full bg-brand-yellow/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero text columns */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-orange/20 border border-brand-orange/35 px-3 py-1.5 rounded-full text-brand-yellow text-xs font-semibold uppercase tracking-wider self-start">
              <Sparkles className="w-3.5 h-3.5" />
              <span>International Academic Congress 2026</span>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest text-brand-yellow font-bold block uppercase">
                {CORE_INFO.host.university} &bull; {CORE_INFO.cohost.short} Joint Venture
              </span>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight font-display leading-[1.1] text-balance">
                Southeast Asia Futures Conference on <span className="text-brand-orange">Social Sciences 2026</span>
              </h1>
            </div>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-sans max-w-2xl">
              <strong className="text-white font-semibold">"Global Southeast Asia, Shared Futures"</strong> &mdash; 
              co-creating innovative insights, local knowledge networks, and inclusive solutions targeting regional transformation and sustainable development goals.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                id="hero-register"
                onClick={onOpenRegisterModal}
                className="px-6 py-3.5 bg-brand-orange hover:bg-brand-yellow hover:text-brand-navy text-white rounded-xl text-md font-semibold transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="hero-view-subthemes"
                onClick={() => onScrollToSection('call-for-papers')}
                className="px-6 py-3.5 bg-white/5 border-2 border-white/20 hover:border-white text-white font-semibold rounded-xl text-md transition-all duration-200 flex items-center justify-center space-x-2 hover:bg-white/10 cursor-pointer"
              >
                <span>Explore Sub-Themes</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Details Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-xl bg-white/10 text-brand-yellow shrink-0">
                  <Calendar className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">Date</h4>
                  <p className="text-sm font-semibold text-white">{CORE_INFO.dates}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-xl bg-white/10 text-brand-yellow shrink-0">
                  <MapPin className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">Venue</h4>
                  <p className="text-sm font-semibold text-white">{CORE_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero countdown card/graphic side */}
          <div className="lg:col-span-5 w-full flex flex-col items-center">
            
            {/* Visual Header / Building background mock card */}
            <div className="w-full bg-white rounded-2xl border border-brand-gray shadow-xl p-6 relative overflow-hidden flex flex-col space-y-6">
              
              {/* Abstract decorative orange/navy ribbon border */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-navy via-brand-yellow to-brand-orange" />

              {/* Subdued illustration graphic to match screenshot style */}
              <div className="rounded-xl overflow-hidden h-40 bg-gradient-to-br from-brand-navy to-indigo-950 relative flex flex-col justify-end p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,101,34,0.3),transparent)]" />
                <div className="absolute -bottom-2 -right-2 text-brand-navy/20">
                  <GraduationCap className="w-44 h-44" />
                </div>
                <div className="relative z-2">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-brand-yellow text-brand-navy text-[10px] font-mono uppercase font-bold mb-1.5">
                    Universiti Putra Malaysia
                  </span>
                  <h3 className="text-white text-lg font-bold font-display tracking-tight leading-snug">
                    Southeast Asia Futures Academic Summit
                  </h3>
                  <p className="text-white/70 text-xs font-sans mt-0.5">
                    Host: FISIP Universitas Brawijaya
                  </p>
                </div>
              </div>

              {/* Countdown panel container matching PDF visual theme */}
              <div className="text-center space-y-4">
                <div className="flex flex-col items-center">
                  <span className="text-xs font-mono tracking-widest text-[#5c6e8d] font-bold uppercase">
                    COUNTDOWN TO CONGRESS
                  </span>
                  <div className="w-12 h-0.5 bg-brand-orange mt-1.5" />
                </div>

                <div className="grid grid-cols-4 gap-2.5 max-w-sm mx-auto">
                  {/* Days */}
                  <div className="bg-brand-bg hover:bg-brand-orange/5 border border-brand-gray rounded-xl p-3 flex flex-col items-center justify-center transition-all duration-200">
                    <span className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-mono tracking-tight leading-none">
                      {timeLeft.days}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider font-semibold text-gray-500 uppercase mt-2">
                      Days
                    </span>
                  </div>

                  {/* Hours */}
                  <div className="bg-brand-bg hover:bg-brand-orange/5 border border-brand-gray rounded-xl p-3 flex flex-col items-center justify-center transition-all duration-200">
                    <span className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-mono tracking-tight leading-none">
                      {timeLeft.hours}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider font-semibold text-gray-500 uppercase mt-2">
                      Hours
                    </span>
                  </div>

                  {/* Minutes */}
                  <div className="bg-brand-bg hover:bg-brand-orange/5 border border-brand-gray rounded-xl p-3 flex flex-col items-center justify-center transition-all duration-200">
                    <span className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-mono tracking-tight leading-none">
                      {timeLeft.minutes}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider font-semibold text-gray-500 uppercase mt-2">
                      Mins
                    </span>
                  </div>

                  {/* Seconds */}
                  <div className="bg-brand-bg hover:bg-brand-orange/5 border border-brand-gray rounded-xl p-3 flex flex-col items-center justify-center transition-all duration-200">
                    <span className="text-2xl sm:text-3xl font-extrabold text-brand-orange font-mono tracking-tight leading-none">
                      {timeLeft.seconds}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider font-semibold text-gray-500 uppercase mt-2">
                      Secs
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-500 leading-relaxed max-w-xs mx-auto text-center font-sans">
                  The countdown marks the kickoff of keynote sessions on <strong className="text-brand-navy">Oct 31, 2026</strong>. Explore our tracks and check out the academic guidelines!
                </p>
              </div>

              {/* Status footer inside card */}
              <div className="flex justify-between items-center bg-brand-navy/5 rounded-xl px-4 py-3 border border-brand-navy/10">
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-mono font-bold text-gray-600 uppercase">
                    REGISTRATION OPEN
                  </span>
                </div>
                <button
                  id="hero-view-dates"
                  onClick={() => onScrollToSection('program')}
                  className="text-xs text-brand-orange hover:text-brand-navy font-bold flex items-center space-x-1 transition-all"
                >
                  <span>View Deadlines</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
