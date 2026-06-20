import React from 'react';
import { Navigation, Plane, Train, MapPin, Info, Landmark } from 'lucide-react';
import { CORE_INFO } from '../data/conferenceData';

interface RegistrationVenueProps {
  isRegisterModalOpen: boolean;
  onCloseRegisterModal: () => void;
}

export default function RegistrationVenue({ isRegisterModalOpen, onCloseRegisterModal }: RegistrationVenueProps) {
  return (
    <section id="venue" className="py-20 bg-brand-bg border-t border-brand-gray/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Venue left column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#5c6e8d] font-bold uppercase block mb-2">
                ACCOMMODATION & LOCATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight">
                Conference Venue
              </h2>
              <div className="w-16 h-1.5 bg-brand-orange mt-4 rounded-full" />
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              The conference will be physically hosted at <strong className="text-brand-navy font-semibold">Universiti Putra Malaysia (UPM)</strong> located in Selangor, Malaysia. Founded in 1931, UPM is recognized as one of Malaysia's leading research-intensive universities, featuring high-quality facilities, nature surroundings, and proximity to Kuala Lumpur.
            </p>

            {/* Travel instruction grids */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Air */}
              <div className="bg-white border border-brand-gray rounded-xl p-4 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-brand-navy/5 text-brand-navy flex items-center justify-center mb-3">
                  <Plane className="w-4 h-4 text-brand-orange" />
                </div>
                <h4 className="text-xs font-mono font-bold text-brand-navy uppercase">
                  Flight Connections
                </h4>
                <p className="text-[11px] text-gray-400 font-sans mt-1 leading-relaxed">
                  Fly into Kuala Lumpur International Airport (KLIA T1/T2), located a 35-minute taxi ride from the UPM campus corridors.
                </p>
              </div>

              {/* Rails */}
              <div className="bg-white border border-brand-gray rounded-xl p-4 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-brand-navy/5 text-brand-navy flex items-center justify-center mb-3">
                  <Train className="w-4 h-4 text-brand-navy" />
                </div>
                <h4 className="text-xs font-mono font-bold text-brand-navy uppercase">
                  Local Rails (MRT)
                </h4>
                <p className="text-[11px] text-gray-400 font-sans mt-1 leading-relaxed">
                  Take the MRT Putrajaya Line directly to "UPM Station", which links key parts of Selangor and Kuala Lumpur city.
                </p>
              </div>

              {/* Transit */}
              <div className="bg-white border border-brand-gray rounded-xl p-4 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-brand-navy/5 text-brand-navy flex items-center justify-center mb-3">
                  <Landmark className="w-4 h-4 text-brand-yellow" />
                </div>
                <h4 className="text-xs font-mono font-bold text-brand-navy uppercase">
                  Local Hotels
                </h4>
                <p className="text-[11px] text-gray-400 font-sans mt-1 leading-relaxed">
                  Several 4-star lodging accommodations (e.g. Putrajaya Marriott, Le Méridien International) surround the campus.
                </p>
              </div>
            </div>

            {/* Creative Vector Map Block */}
            <div className="rounded-2xl border border-brand-gray bg-white p-5 shadow-sm relative overflow-hidden">
              <h4 className="text-xs font-mono font-black text-brand-navy uppercase mb-3 flex items-center space-x-1.5">
                <Navigation className="w-4 h-4 text-brand-orange animate-bounce" />
                <span>UPM Selangor Campus Overview Map</span>
              </h4>
              
              <div className="h-44 bg-slate-950/5 border border-brand-gray/80 rounded-xl relative flex items-center justify-center overflow-hidden">
                {/* Visual grid lines representing a stylized blueprint map */}
                <div className="absolute inset-0 bg-[radial-gradient(#082D6815_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                
                {/* Abstract vector road routes for premium effect */}
                <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                  <path d="M -50 40 L 500 40 L 800 150" fill="none" stroke="#F26522" strokeWidth="2" strokeDasharray="4" />
                  <path d="M 220 -20 L 220 300" fill="none" stroke="#082D68" strokeWidth="3" />
                  <circle cx="220" cy="40" r="16" fill="none" stroke="#F5B400" strokeWidth="2" />
                </svg>

                <div className="relative text-center space-y-2 p-4">
                  <div className="inline-flex items-center space-x-1 bg-white border border-brand-gray px-3 py-1 rounded-full shadow-sm">
                    <MapPin className="w-4 h-4 text-brand-orange" />
                    <span className="text-xs font-bold text-brand-navy font-mono">
                      UPM Selangor Campus Core
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-500 font-sans max-w-sm mx-auto">
                    Grand Auditorium Faculty of Modern Languages & Communication. Located at Jalan Universiti, Serdang, Selangor, Malaysia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration fee section */}
          <div className="lg:col-span-5 bg-white border border-brand-gray rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-navy" />

            <div className="space-y-4 mb-6">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-brand-orange">
                REGISTRATION SCHEMES
              </span>
              <h3 className="text-xl font-bold text-brand-navy font-display">
                Registration Fees
              </h3>
            </div>

            {/* General Rates Table */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-brand-navy mb-3">General Rates</h4>
              <div className="overflow-hidden rounded-xl border border-brand-gray">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-navy text-white">
                      <th className="text-left px-4 py-3 font-semibold text-xs tracking-wide"></th>
                      <th className="text-center px-3 py-3 font-semibold text-xs tracking-wide">
                        <div>Early Bird Entry</div>
                        <div className="text-[10px] font-normal text-white/70 mt-0.5">10th June 2026</div>
                      </th>
                      <th className="text-center px-3 py-3 font-semibold text-xs tracking-wide">
                        <div>Regular Entry</div>
                        <div className="text-[10px] font-normal text-white/70 mt-0.5">10th July 2026</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-gray bg-brand-bg/50">
                      <td className="px-4 py-3 text-xs font-semibold text-brand-navy">In-Person Presentation</td>
                      <td className="text-center px-3 py-3 text-xs font-bold text-brand-navy">USD 130</td>
                      <td className="text-center px-3 py-3 text-xs font-bold text-brand-navy">USD 150</td>
                    </tr>
                    <tr className="border-b border-brand-gray">
                      <td className="px-4 py-3 text-xs font-semibold text-brand-navy">In-Person Listener</td>
                      <td className="text-center px-3 py-3 text-xs font-bold text-brand-navy">USD 35</td>
                      <td className="text-center px-3 py-3 text-xs font-bold text-brand-navy">USD 55</td>
                    </tr>
                    <tr className="border-b border-brand-gray bg-brand-bg/50">
                      <td className="px-4 py-3 text-xs font-semibold text-brand-navy">Virtual Presentation</td>
                      <td className="text-center px-3 py-3 text-xs font-bold text-brand-navy">USD 70</td>
                      <td className="text-center px-3 py-3 text-xs font-bold text-brand-navy">USD 90</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-xs font-semibold text-brand-navy">Virtual Listener</td>
                      <td className="text-center px-3 py-3 text-xs font-bold text-brand-navy">USD 15</td>
                      <td className="text-center px-3 py-3 text-xs font-bold text-brand-navy">USD 35</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Student Rates Table */}
            <div className="mb-4">
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-brand-navy mb-3">Student Rates</h4>
              <div className="overflow-hidden rounded-xl border border-brand-gray">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-navy text-white">
                      <th className="text-left px-4 py-3 font-semibold text-xs tracking-wide"></th>
                      <th className="text-center px-3 py-3 font-semibold text-xs tracking-wide">Entry</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-gray bg-brand-bg/50">
                      <td className="px-4 py-3 text-xs font-semibold text-brand-navy">In-Person Presentation</td>
                      <td className="text-center px-3 py-3 text-xs font-bold text-brand-navy">USD 120</td>
                    </tr>
                    <tr className="border-b border-brand-gray">
                      <td className="px-4 py-3 text-xs font-semibold text-brand-navy">In-Person Listener</td>
                      <td className="text-center px-3 py-3 text-xs font-bold text-brand-navy">USD 25</td>
                    </tr>
                    <tr className="border-b border-brand-gray bg-brand-bg/50">
                      <td className="px-4 py-3 text-xs font-semibold text-brand-navy">Virtual Presentation</td>
                      <td className="text-center px-3 py-3 text-xs font-bold text-brand-navy">USD 60</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-xs font-semibold text-brand-navy">Virtual Listener</td>
                      <td className="text-center px-3 py-3 text-xs font-bold text-brand-navy">USD 5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-gray/60 flex items-center space-x-2 text-xs text-gray-400">
              <Info className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Early bird rates apply for registrations before 10th July 2026.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
