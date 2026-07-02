import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Committee from './components/Committee';
import CallForPapers from './components/CallForPapers';
import ProgramTimeline from './components/ProgramTimeline';
import RegistrationVenue from './components/RegistrationVenue';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { BellRing, Mail, Check, X, ShieldAlert, Award, Star } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  
  // Registration Popup state inside main view
  const [regEmail, setRegEmail] = useState('');
  const [regName, setRegName] = useState('');
  const [regInterest, setRegInterest] = useState('Presenter');
  const [regSuccess, setRegSuccess] = useState(false);

  // Monitor scrolling to highlight correct navigation item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'speakers', 'committee', 'call-for-papers', 'program', 'venue', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSubmit = () => {
    // Auto navigation to paper/academic tracks area
    navigateToSection('call-for-papers');
  };

  const handleOpenRegister = () => {
    setIsRegisterModalOpen(true);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (regEmail && regName) {
      const currentList = JSON.parse(localStorage.getItem('seafutures_preregistrations') || '[]');
      currentList.push({
        id: 'reg-' + Date.now(),
        name: regName,
        email: regEmail,
        interest: regInterest,
        date: new Date().toISOString()
      });
      localStorage.setItem('seafutures_preregistrations', JSON.stringify(currentList));
      
      setRegSuccess(true);
      setTimeout(() => {
        setRegSuccess(false);
        setIsRegisterModalOpen(false);
        setRegName('');
        setRegEmail('');
      }, 3500);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-brand-navy font-sans antialiased selection:bg-brand-orange selection:text-white">
      
      {/* Universal Sticky Header Navigation */}
      <Header 
        onNavigate={navigateToSection}
        activeSection={activeSection}
        onOpenSubmitModal={handleOpenSubmit}
        onOpenRegisterModal={handleOpenRegister}
      />

      {/* Main Sections */}
      <main className="w-full">
        <Hero 
          onOpenSubmitModal={handleOpenSubmit}
          onOpenRegisterModal={handleOpenRegister}
          onScrollToSection={navigateToSection}
        />
        
        <About />
        
        <Speakers />
        
        <Committee />
        
        <CallForPapers />
        
        <ProgramTimeline />
        
        <RegistrationVenue 
          isRegisterModalOpen={isRegisterModalOpen}
          onCloseRegisterModal={() => setIsRegisterModalOpen(false)}
        />
        
        <ContactForm />
      </main>

      {/* Footer system */}
      <Footer onScrollToSection={navigateToSection} />

      {/* Pre-Registration / Register Now interactive overlay dialogue */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-5000 overflow-y-auto flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm" onClick={() => setIsRegisterModalOpen(false)} />
          
          <div className="relative bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-brand-gray z-5001 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsRegisterModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-brand-orange hover:bg-brand-navy/5 transition-all text-xl cursor-pointer"
            >
              &times;
            </button>

            <div className="text-center space-y-3 mb-6">
              <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center mx-auto mb-2">
                <BellRing className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy font-display">
                Register Now
              </h3>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                Official registration fees are currently pending institutional authorization from FISIP UB & UPM boards.
              </p>
            </div>

            {regSuccess ? (
              <div id="subs-success-overlay" className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                  <Check className="w-4 h-4 font-extrabold" />
                </div>
                <p className="font-bold">Interest Registered Successfully!</p>
                <p className="text-[10px] text-gray-500">
                  Your academic priority has been logged. We will message you early-bird booking passes as soon as the tariff charts are published.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono font-bold text-gray-600 uppercase block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="reg-input-name"
                    type="text"
                    required
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="e.g. Dr. Anggun Susilo"
                    className="w-full text-xs font-sans bg-brand-bg border border-brand-gray rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-brand-orange"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-gray-600 uppercase block mb-1">
                    Institutional Email Address *
                  </label>
                  <input
                    id="reg-input-email"
                    type="email"
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="e.g. name@university.edu"
                    className="w-full text-xs font-sans bg-brand-bg border border-brand-gray rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-brand-orange"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-gray-600 uppercase block mb-1">
                    Conference Category Interest
                  </label>
                  <select
                    id="reg-input-select"
                    value={regInterest}
                    onChange={(e) => setRegInterest(e.target.value)}
                    className="w-full text-xs font-sans bg-brand-bg border border-brand-gray rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-brand-orange"
                  >
                    <option value="Presenter">Paper Presenter (Regular Or Student)</option>
                    <option value="General Attendant">General Attendant / Delegate</option>
                    <option value="Panel Co-Chair">Collaborative Session Co-Chair</option>
                  </select>
                </div>

                <div className="bg-brand-navy/[0.03] border border-brand-navy/10 rounded-xl p-3 text-[11px] text-gray-500 leading-relaxed font-sans flex items-start space-x-2">
                  <Star className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                  <span>By preregistering, you secure an automatic 15% discount code applicable once ticket booking portals launch. No payment required today.</span>
                </div>

                <div className="pt-2">
                  <button
                    id="reg-submit-btn"
                    type="submit"
                    className="w-full py-2.5 bg-brand-navy hover:bg-brand-orange text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>Reserve Priority Ticket</span>
                    <Mail className="w-4 h-4 text-white" />
                  </button>
                </div>
              </form>
            )}

            <div className="mt-4 pt-3 border-t border-brand-gray/80 flex items-center justify-between text-[11px] text-gray-400 font-sans">
              <span>No obligation contract.</span>
              <span className="text-brand-orange font-bold cursor-pointer hover:underline" onClick={() => setIsRegisterModalOpen(false)}>
                Go Back
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
