import React from 'react';
import { Mail, MapPin, Building2, Clock, Landmark, MessageSquareText } from 'lucide-react';
import { CORE_INFO } from '../data/conferenceData';

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-white border-t border-brand-gray/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#5c6e8d] font-bold uppercase block mb-2">
            HELP DESK & SECRETARIAT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight">
            Contact & Support
          </h2>
          <div className="w-16 h-1.5 bg-brand-orange mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 text-sm mt-4 max-w-sm mx-auto">
            Directly connect with our joint hosting bodies for administrative and academic support.
          </p>
        </div>

        {/* Co-Hosts Bento Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Universitas Brawijaya block */}
          <div className="bg-brand-bg rounded-2xl border border-brand-gray p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-brand-navy" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase bg-brand-navy/10 text-brand-navy font-bold px-2.5 py-0.5 rounded-full">
                    Lead Host Secretariat
                  </span>
                  <h3 className="text-md font-bold text-brand-navy font-display mt-1">
                    Universitas Brawijaya
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-brand-navy font-display">Faculty of Social and Political Sciences (FISIP)</p>
                    <p className="text-xs text-gray-500 mt-1 font-mono leading-relaxed">
                      Brawijaya Grand Boulevard, Lowokwaru, Malang City, 65145, East Java, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-2">
                  <Mail className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-brand-navy font-display">Submissions Inquiry Inbox</p>
                    <p className="text-xs text-gray-500 mt-0.5 font-mono">
                      FISIP UB Coordinate Email:
                    </p>
                    <a href={`mailto:${CORE_INFO.secondaryEmail}`} className="text-sm font-bold text-brand-orange hover:underline block mt-1 font-mono">
                      {CORE_INFO.secondaryEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-brand-gray/80 flex items-center justify-between text-xs text-gray-400">
              <span className="font-mono">Inquiry Desk UB</span>
              <span className="text-emerald-500 font-bold">&#x25CF; Active Support</span>
            </div>
          </div>

          {/* Universiti Putra Malaysia block */}
          <div className="bg-brand-bg rounded-2xl border border-brand-gray p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#C31F33]/5 rounded-xl flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-[#C31F33]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase bg-[#C31F33]/10 text-[#C31F33] font-bold px-2.5 py-0.5 rounded-full">
                    Academic Venue Secretariat
                  </span>
                  <h3 className="text-md font-bold text-brand-navy font-display mt-1">
                    Universiti Putra Malaysia (UPM)
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-brand-navy font-display">Faculty of Modern Languages and Communication</p>
                    <p className="text-xs text-gray-500 mt-1 font-mono leading-relaxed">
                      Jalan UPM, 43400, Serdang, Selangor Darul Ehsan, Malaysia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-2">
                  <Mail className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-brand-navy font-display">Administrative Support Inbox</p>
                    <p className="text-xs text-gray-500 mt-0.5 font-mono">
                      Principal Inquiries Address:
                    </p>
                    <a href={`mailto:${CORE_INFO.email}`} className="text-sm font-bold text-brand-orange hover:underline block mt-1 font-mono">
                      {CORE_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-brand-gray/80 flex items-center justify-between text-xs text-gray-400">
              <span className="font-mono">Inquiry Desk UPM</span>
              <span className="text-emerald-500 font-bold">&#x25CF; Active Support</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
