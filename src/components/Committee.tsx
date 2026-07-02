import React, { useState } from 'react';
import { Crown, Compass, Users, FlaskConical, ChevronDown, ChevronUp, GraduationCap, Building2, MapPin } from 'lucide-react';

/* ─── Committee Data ─── */

interface CommitteeMember {
  name: string;
  role?: string;
  affiliation: string;
  country?: string;
}

interface CommitteeGroup {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accentColor: string;
  accentBg: string;
  members: CommitteeMember[];
}

const committeeData: CommitteeGroup[] = [
  {
    title: 'Patron',
    subtitle: 'Institutional Leadership',
    icon: <Crown className="w-5 h-5" />,
    accentColor: 'text-amber-500',
    accentBg: 'bg-amber-500/10',
    members: [
      {
        name: 'Assoc. Prof. Dr. Hazlina Abdul Halim',
        role: 'Dean, Faculty of Modern Languages and Communication',
        affiliation: 'Universiti Putra Malaysia',
        country: 'Malaysia',
      },
      {
        name: 'Dr. Ahmad Imron Rozuli',
        role: 'Dean, Faculty of Social and Political Science',
        affiliation: 'Universitas Brawijaya',
        country: 'Indonesia',
      },
    ],
  },
  {
    title: 'Advisory & Steering Committee',
    subtitle: 'Strategic Direction & Governance',
    icon: <Compass className="w-5 h-5" />,
    accentColor: 'text-brand-orange',
    accentBg: 'bg-brand-orange/10',
    members: [
      {
        name: 'Dr. Julia Wirza Mohd Zawawi',
        role: 'Head of Communication Department, Faculty of Modern Languages and Communication',
        affiliation: 'Universiti Putra Malaysia',
        country: 'Malaysia',
      },
      {
        name: 'Reza Safitri, Ph.D',
        role: 'Vice Dean for Academic Affairs, Faculty of Social and Political Science',
        affiliation: 'Universitas Brawijaya',
        country: 'Indonesia',
      },
      {
        name: 'Dr. Muhammad Lukman Hakim',
        role: 'Vice Dean for General Affairs, Finance, and Human Resources, Faculty of Social and Political Science',
        affiliation: 'Universitas Brawijaya',
        country: 'Indonesia',
      },
      {
        name: 'Dr. Sumi Lestari',
        role: 'Vice Dean for Student Affairs, Alumni, and Student Entrepreneurship, Faculty of Social and Political Science',
        affiliation: 'Universitas Brawijaya',
        country: 'Indonesia',
      },
      {
        name: 'Prof. Dr. Rachmat Kriyantono',
        role: 'Professor, Faculty of Social and Political Science',
        affiliation: 'Universitas Brawijaya',
        country: 'Indonesia',
      },
      {
        name: 'Prof. Dr. Anang Sujoko',
        role: 'Professor, Faculty of Social and Political Science',
        affiliation: 'Universitas Brawijaya',
        country: 'Indonesia',
      },
      {
        name: 'Prof. Dr. Drs. Ali Maksum',
        role: 'Professor, Faculty of Social and Political Science',
        affiliation: 'Universitas Brawijaya',
        country: 'Indonesia',
      },
    ],
  },
  {
    title: 'Organising Committee',
    subtitle: 'Operations & Logistics',
    icon: <Users className="w-5 h-5" />,
    accentColor: 'text-[#14496B]',
    accentBg: 'bg-[#14496B]/10',
    members: [
      { name: 'Dr. Mohamad Noor Salehhudin Sharipudin', affiliation: 'Universiti Putra Malaysia', country: 'Malaysia' },
      { name: 'Dr. Siti Salbiah Norazan', affiliation: 'Universiti Putra Malaysia', country: 'Malaysia' },
      { name: 'Dr. Sharifah Sofiah Syed Zainudin', affiliation: 'Universiti Putra Malaysia', country: 'Malaysia' },
      { name: 'Dr. Ghazila Ghazi', affiliation: 'Universiti Putra Malaysia', country: 'Malaysia' },
      { name: 'Dr. Mastura Mahamed', affiliation: 'Universiti Putra Malaysia', country: 'Malaysia' },
      { name: 'Dr. Syafila Kamarudin', affiliation: 'Universiti Putra Malaysia', country: 'Malaysia' },
      { name: 'Ts. Dr. Latifah Abd Latib', affiliation: 'Universiti Putra Malaysia', country: 'Malaysia' },
      { name: 'Dr. Norliana Hashim', affiliation: 'Universiti Putra Malaysia', country: 'Malaysia' },
      { name: 'Ts. Dr. Syed Agil Al-Sagoff', affiliation: 'Universiti Putra Malaysia', country: 'Malaysia' },
      { name: 'Dr. Siti Aishah Mohamad Razi', affiliation: 'Universiti Putra Malaysia', country: 'Malaysia' },
      { name: 'Dr. Kalaivani A/P Munusamy', affiliation: 'Universiti Putra Malaysia', country: 'Malaysia' },
      { name: 'Novy Setia Yunas, S.IP., M.IP.', affiliation: 'Universitas Brawijaya', country: 'Indonesia' },
      { name: 'Ika Rizki Yustisia, S.I.Kom., M.A.', affiliation: 'Universitas Brawijaya', country: 'Indonesia' },
      { name: 'Mochammad Alexander Mujiburrohman, S.IP., M.IP.', affiliation: 'Universitas Brawijaya', country: 'Indonesia' },
      { name: 'Anik Susanti, S.Pd., M.Si.', affiliation: 'Universitas Brawijaya', country: 'Indonesia' },
    ],
  },
  {
    title: 'Scientific Committee',
    subtitle: 'Academic Review & Quality Assurance',
    icon: <FlaskConical className="w-5 h-5" />,
    accentColor: 'text-emerald-600',
    accentBg: 'bg-emerald-500/10',
    members: [
      { name: 'Ali Mashuri, Ph.D.', affiliation: 'Universitas Brawijaya', country: 'Indonesia' },
      { name: 'Dr. Ika Rahma Susilawati', affiliation: 'Universitas Brawijaya', country: 'Indonesia' },
      { name: 'Cleoputri Al-Yusainy, Ph.D.', affiliation: 'Universitas Brawijaya', country: 'Indonesia' },
      { name: 'Dr. Akhmad Muwafik Saleh', affiliation: 'Universitas Brawijaya', country: 'Indonesia' },
      { name: 'Restu Karlina Rahayu, Ph.D.', affiliation: 'Universitas Brawijaya', country: 'Indonesia' },
      { name: 'Dr. Drs. Fauzi', affiliation: 'Universitas Brawijaya', country: 'Indonesia' },
      { name: 'Dr. Mobashar Mubarik', affiliation: 'Vilnius University', country: 'Lithuania' },
      { name: 'Dr. Muhammad Faraz Mubarak', affiliation: 'Kaunas University of Technology', country: 'Lithuania' },
      { name: 'Dr. Morteza Ghokhloo', affiliation: 'Uppsala University', country: 'Sweden' },
      { name: 'Dr. Khuram Shahza', affiliation: 'University of Vaasa', country: 'Finland' },
    ],
  },
];

/* ─── Helper: member initials ─── */
const getInitials = (name: string): string => {
  const skip = ['DR', 'DR.', 'ASSOC', 'ASSOC.', 'PROF', 'PROF.', 'TS', 'TS.', 'DRS', 'DRS.', 'PH.D', 'PH.D.', 'A/P',
    'S.IP.', 'M.IP.', 'S.I.KOM.', 'M.A.', 'S.PD.', 'M.SI.'];
  const words = name.split(/[\s,]+/).filter(w => !skip.includes(w.toUpperCase()) && w.length > 1);
  if (words.length === 0) return 'CM';
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};

/* ─── Country flag emoji helper ─── */
const getCountryFlag = (country?: string): string => {
  if (!country) return '';
  const map: Record<string, string> = {
    'Malaysia': '🇲🇾',
    'Indonesia': '🇮🇩',
    'Lithuania': '🇱🇹',
    'Sweden': '🇸🇪',
    'Finland': '🇫🇮',
  };
  return map[country] || '🌏';
};

/* ─── Patron Card (special large layout) ─── */
const PatronCard = ({ member, accentColor }: { member: CommitteeMember; accentColor: string }) => (
  <div className="bg-white rounded-2xl border border-brand-gray p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
    {/* Decorative gradient */}
    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 via-brand-orange to-amber-500" />
    
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mt-2">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#082D68] via-indigo-950 to-[#041d44] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,101,34,0.35),transparent_70%)]" />
        <span className="text-2xl font-bold text-white font-display z-10 relative">
          {getInitials(member.name)}
        </span>
        <span className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-white" />
      </div>

      {/* Info */}
      <div className="text-center sm:text-left flex-1">
        <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
          <Crown className={`w-4 h-4 ${accentColor}`} />
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500">
            Patron
          </span>
        </div>
        <h4 className="text-lg font-bold text-brand-navy font-display leading-snug">
          {member.name}
        </h4>
        {member.role && (
          <p className="text-sm text-gray-600 font-sans mt-1 leading-relaxed">
            {member.role}
          </p>
        )}
        <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
          <Building2 className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-xs text-gray-500 font-sans">{member.affiliation}</span>
          {member.country && (
            <span className="text-xs">{getCountryFlag(member.country)}</span>
          )}
        </div>
      </div>
    </div>
  </div>
);

/* ─── Regular Member Row ─── */
const MemberRow = ({ member, index, accentColor }: { member: CommitteeMember; index: number; accentColor: string }) => (
  <div className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-white border border-brand-gray/60 hover:border-brand-orange/30 hover:shadow-sm transition-all duration-200 group">
    {/* Mini avatar */}
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#082D68] to-[#041d44] flex items-center justify-center shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform duration-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,101,34,0.25),transparent_70%)]" />
      <span className="text-xs font-bold text-white font-display z-10 relative">
        {getInitials(member.name)}
      </span>
    </div>

    {/* Info */}
    <div className="flex-1 min-w-0">
      <h5 className="text-sm font-semibold text-brand-navy font-display truncate group-hover:text-brand-orange transition-colors">
        {member.name}
      </h5>
      {member.role && (
        <p className="text-xs text-gray-500 font-sans mt-0.5 line-clamp-1">{member.role}</p>
      )}
      <div className="flex items-center gap-1.5 mt-0.5">
        <span className="text-[11px] text-gray-400 font-sans">{member.affiliation}</span>
        {member.country && (
          <span className="text-[11px]">{getCountryFlag(member.country)}</span>
        )}
      </div>
    </div>

    {/* Index badge */}
    <span className="text-[10px] font-mono font-bold text-gray-300 shrink-0 hidden sm:block">
      {String(index + 1).padStart(2, '0')}
    </span>
  </div>
);

/* ─── Advisory Member Card (medium layout with role) ─── */
const AdvisoryCard = ({ member, accentColor }: { member: CommitteeMember; accentColor: string }) => (
  <div className="bg-white rounded-2xl border border-brand-gray p-5 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
    <div className="flex items-start gap-4">
      {/* Avatar */}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#082D68] via-indigo-950 to-[#041d44] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,101,34,0.3),transparent_70%)]" />
        <span className="text-lg font-bold text-white font-display z-10 relative">
          {getInitials(member.name)}
        </span>
        <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-brand-orange border border-white" />
      </div>

      <div className="flex-1 min-w-0">
        <h5 className="text-sm font-bold text-brand-navy font-display leading-snug group-hover:text-brand-orange transition-colors">
          {member.name}
        </h5>
        {member.role && (
          <p className="text-xs text-gray-500 font-sans mt-1 leading-relaxed">
            {member.role}
          </p>
        )}
        <div className="flex items-center gap-1.5 mt-2">
          <Building2 className="w-3 h-3 text-gray-400" />
          <span className="text-[11px] text-gray-400 font-sans">{member.affiliation}</span>
          {member.country && (
            <span className="text-[11px]">{getCountryFlag(member.country)}</span>
          )}
        </div>
      </div>
    </div>
  </div>
);

/* ─── Collapsible Committee Group ─── */
const CommitteeGroupSection = ({ group, defaultOpen = true }: { group: CommitteeGroup; defaultOpen?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(defaultOpen);
  const isPatron = group.title === 'Patron';
  const isAdvisory = group.title === 'Advisory & Steering Committee';

  return (
    <div className="mb-10">
      {/* Group Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 rounded-xl bg-white border border-brand-gray shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
      >
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl ${group.accentBg} ${group.accentColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200`}>
            {group.icon}
          </div>
          <div className="text-left">
            <h3 className="text-base sm:text-lg font-bold text-brand-navy font-display tracking-tight">
              {group.title}
            </h3>
            <p className="text-[11px] text-gray-400 font-mono uppercase tracking-wider mt-0.5">
              {group.subtitle} · {group.members.length} {group.members.length === 1 ? 'Member' : 'Members'}
            </p>
          </div>
        </div>
        <div className={`w-8 h-8 rounded-lg ${group.accentBg} ${group.accentColor} flex items-center justify-center shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {/* Collapsible Content */}
      <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isExpanded ? 'max-h-[3000px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
        {isPatron ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {group.members.map((member, idx) => (
              <PatronCard key={idx} member={member} accentColor={group.accentColor} />
            ))}
          </div>
        ) : isAdvisory ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {group.members.map((member, idx) => (
              <AdvisoryCard key={idx} member={member} accentColor={group.accentColor} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {group.members.map((member, idx) => (
              <MemberRow key={idx} member={member} index={idx} accentColor={group.accentColor} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Main Component ─── */
export default function Committee() {
  return (
    <section id="committee" className="py-20 bg-brand-bg border-y border-brand-gray/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#5c6e8d] font-bold uppercase block mb-2">
            LEADERSHIP & GOVERNANCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight">
            Conference Committee
          </h2>
          <div className="w-16 h-1.5 bg-brand-orange mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto">
            Distinguished academics and professionals guiding the strategic direction, organization, and scientific integrity of SEA-FUTURES 2026.
          </p>
        </div>

        {/* Committee summary stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {committeeData.map((group) => (
            <div key={group.title} className="bg-white rounded-xl border border-brand-gray p-4 text-center shadow-sm hover:shadow-md transition-all duration-200">
              <div className={`w-10 h-10 rounded-xl ${group.accentBg} ${group.accentColor} flex items-center justify-center mx-auto mb-2`}>
                {group.icon}
              </div>
              <span className="text-2xl font-extrabold text-brand-navy font-mono">{group.members.length}</span>
              <span className="text-[10px] text-gray-500 uppercase block font-mono font-semibold tracking-wider mt-1 line-clamp-1">
                {group.title}
              </span>
            </div>
          ))}
        </div>

        {/* Committee Groups */}
        {committeeData.map((group) => (
          <CommitteeGroupSection key={group.title} group={group} />
        ))}

        {/* Footer note */}
        <div className="mt-8 p-5 bg-white rounded-xl border border-brand-gray shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-navy/5 flex items-center justify-center shrink-0 mt-0.5">
              <GraduationCap className="w-4 h-4 text-brand-navy" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-sans leading-relaxed">
                The conference committee comprises distinguished scholars from <strong className="text-brand-navy">Universiti Putra Malaysia</strong>, <strong className="text-brand-navy">Universitas Brawijaya</strong>, and partner institutions across <strong className="text-brand-navy">Europe</strong>, ensuring global academic standards and interdisciplinary collaboration.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
