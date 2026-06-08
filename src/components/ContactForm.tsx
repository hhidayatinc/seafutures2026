import React from 'react';
import { Mail, Phone, MessageCircle, Headphones } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-white border-t border-brand-gray/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#5c6e8d] font-bold uppercase block mb-2">
            HELP DESK &amp; SECRETARIAT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight">
            Contact &amp; Support
          </h2>
        </div>

        {/* Reagal Contact Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-brand-bg rounded-2xl border border-brand-gray p-8 sm:p-10 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-navy via-brand-orange to-brand-navy"></div>

            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center">
                <Headphones className="w-6 h-6 text-brand-navy" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase bg-brand-orange/10 text-brand-orange font-bold px-2.5 py-0.5 rounded-full">
                  Conference Secretariat
                </span>
                <h3 className="text-lg font-bold text-brand-navy font-display mt-1">
                  Reagal
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-1">WhatsApp</p>
                  <a 
                    href="https://wa.me/6285179677337" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-brand-navy hover:text-brand-orange transition-colors font-display"
                  >
                    +62 851-7967-7337
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-orange/5 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-1">Email</p>
                  <a 
                    href="mailto:secretariat@reagal.id" 
                    className="text-base sm:text-lg font-bold text-brand-orange hover:underline font-mono"
                  >
                    secretariat@reagal.id
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-brand-gray/80 flex items-center justify-between text-xs text-gray-400">
              <span className="font-mono">Inquiry Desk</span>
              <span className="text-emerald-500 font-bold">&#x25CF; Active Support</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
