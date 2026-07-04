import React from 'react';

/* ─── Committee Data ─── */

interface CommitteeMember {
  name: string;
  role?: string;
  affiliation: string;
  country?: string;
}

interface CommitteeGroup {
  title: string;
  members: CommitteeMember[];
}

const committeeData: CommitteeGroup[] = [
  {
    title: 'Patron',
    members: [
      {
        name: 'Assoc. Prof. Dr. Hazlina Abdul Halim',
        role: 'Dean, Faculty of Modern Languages and Communication',
        affiliation: 'Universiti Putra Malaysia',
      },
      {
        name: 'Dr. Ahmad Imron Rozuli',
        role: 'Dean, Faculty of Social and Political Science',
        affiliation: 'University Brawijaya, Indonesia',
      },
    ],
  },
  {
    title: 'Advisory & Steering Committee',
    members: [
      {
        name: 'Dr. Julia Wirza Mohd Zawawi',
        role: 'Head of Communication Department, Faculty of Modern Languages and Communication',
        affiliation: 'Universiti Putra Malaysia',
      },
      {
        name: 'Reza Safitri, Ph.D',
        role: 'Vice Dean for Academic Affairs, Faculty of Social and Political Science',
        affiliation: 'Universitas Brawijaya, Indonesia',
      },
      {
        name: 'Dr. Muhammad Lukman Hakim',
        role: 'Vice Dean for General Affairs, Finance, and Human Resources, Faculty of Social and Political Science',
        affiliation: 'Universitas Brawijaya, Indonesia',
      },
      {
        name: 'Dr. Sumi Lestari',
        role: 'Vice Dean for Student Affairs, Alumni, and Student Entrepreneurship, Faculty of Social and Political Science',
        affiliation: 'Universitas Brawijaya, Indonesia',
      },
      {
        name: 'Prof. Dr. Rachmat Kriyantono',
        role: 'Professor, Faculty of Social and Political Science',
        affiliation: 'Universitas Brawijaya, Indonesia',
      },
      {
        name: 'Prof. Dr. Anang Sujoko',
        role: 'Professor, Faculty of Social and Political Science',
        affiliation: 'Universitas Brawijaya, Indonesia',
      },
      {
        name: 'Prof. Dr. Drs. Ali Maksum',
        role: 'Professor, Faculty of Social and Political Science',
        affiliation: 'Universitas Brawijaya, Indonesia',
      },
      {
        name: 'Hendrix Yulis Setyawan, S.TP., M.Si., Ph.D',
        role: 'Lecturer, Faculty of Agroindustry and Biosystems Technology ',
        affiliation: 'Universitas Brawijaya, Indonesia',
      },
    ],
  },
  {
    title: 'Organising Committee',
    members: [
      { name: 'Hendrix Yulis Setyawan, S.TP., M.Si., Ph.D', role: 'Chair', affiliation: 'Universitas Brawijaya, Indonesia' },
      { name: 'Aulia Luqman Aziz, S.S., S.Pd., M.Pd.', role: 'Chair', affiliation: 'Universitas Brawijaya, Indonesia' },
      { name: 'Henny Rosalinda, S.IP., M.A., Ph.D', role: 'Deputy Chair I', affiliation: 'Universitas Brawijaya, Indonesia' },
      { name: 'Dr. Ana Marie J. Matalines', role: 'Deputy Chair II', affiliation: 'Davao del Sur State College, the Philippines' },
      { name: 'Lavrita Hita Pertiwi, S.AB.', role: 'General Secretary', affiliation: 'Universitas Brawijaya, Indonesia' },
      { name: 'Cydeah Aldic Conchas', role: 'Secretary I', affiliation: 'Davao del Sur State College, the Philippines' },
      { name: 'Ain Ajeerah Binti Ramli', role: 'Secretary II', affiliation: 'Universiti Teknologi Malaysia, Malaysia' },
      { name: 'Dr. Mohamad Noor Salehhudin Sharipudin', affiliation: 'Universiti Putra Malaysia' },
      { name: 'Dr. Siti Salbiah Norazan', affiliation: 'Universiti Putra Malaysia' },
      { name: 'Dr. Sharifah Sofiah Syed Zainudin', affiliation: 'Universiti Putra Malaysia' },
      { name: 'Dr. Ghazila Ghazi', affiliation: 'Universiti Putra Malaysia' },
      { name: 'Dr. Mastura Mahamed', affiliation: 'Universiti Putra Malaysia' },
      { name: 'Dr. Syafila Kamarudin', affiliation: 'Universiti Putra Malaysia' },
      { name: 'Ts. Dr. Latifah Abd Latib', affiliation: 'Universiti Putra Malaysia' },
      { name: 'Dr. Norliana Hashim', affiliation: 'Universiti Putra Malaysia' },
      { name: 'Ts. Dr. Syed Agil Al-Sagoff', affiliation: 'Universiti Putra Malaysia' },
      { name: 'Dr. Siti Aishah Mohamad Razi', affiliation: 'Universiti Putra Malaysia' },
      { name: 'Dr. Kalaivani A/P Munusamy', affiliation: 'Universiti Putra Malaysia' },
      { name: 'Novy Setia Yunas, S.IP., M.IP.', affiliation: 'Universitas Brawijaya, Indonesia' },
      { name: 'Ika Rizki Yustisia, S.I.Kom., M.A.', affiliation: 'Universitas Brawijaya, Indonesia' },
      { name: 'Mochammad Alexander Mujiburrohman, S.IP., M.IP.', affiliation: 'Universitas Brawijaya, Indonesia' },
      { name: 'Anik Susanti, S.Pd., M.Si.', affiliation: 'Universitas Brawijaya, Indonesia' },
    ],
  },
  {
    title: 'Scientific Committee',
    members: [
      { name: 'Ali Mashuri, Ph.D.', affiliation: 'Universitas Brawijaya, Indonesia' },
      { name: 'Dr. Ika Rahma Susilawati', affiliation: 'Universitas Brawijaya, Indonesia' },
      { name: 'Cleoputri Al-Yusainy, Ph.D.', affiliation: 'Universitas Brawijaya, Indonesia' },
      { name: 'Dr. Akhmad Muwafik Saleh', affiliation: 'Universitas Brawijaya, Indonesia' },
      { name: 'Restu Karlina Rahayu, Ph.D.', affiliation: 'Universitas Brawijaya, Indonesia' },
      { name: 'Dr. Drs. Fauzi', affiliation: 'Universitas Brawijaya, Indonesia' },
      { name: 'Dr. Mobashar Mubarik', affiliation: 'Vilnius University, Lithuania' },
      { name: 'Dr. Muhammad Faraz Mubarak', affiliation: 'Kaunas University of Technology, Lithuania' },
      { name: 'Dr. Morteza Ghokhloo', affiliation: 'Uppsala University, Sweden' },
      { name: 'Dr. Khuram Shahza', affiliation: 'University of Vaasa, Finland' },
    ],
  },
];

/* ─── Leadership-style short role titles ─── */
const SHORT_ROLES = ['Chair', 'Deputy Chair I', 'Deputy Chair II', 'General Secretary', 'Secretary I', 'Secretary II'];

/* ─── Format member display ─── */
const formatMember = (m: CommitteeMember): React.ReactNode => {
  if (m.role && SHORT_ROLES.includes(m.role)) {
    return <><strong className="text-brand-navy font-semibold">{m.role}:</strong> {m.name}, {m.affiliation}</>;
  }
  if (m.role) {
    return <>{m.name}, {m.role}, {m.affiliation}</>;
  }
  return <>{m.name}, {m.affiliation}</>;
};

/* ─── Main Component ─── */
export default function Committee() {
  return (
    <section id="committee" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#5c6e8d] font-bold uppercase block mb-2">
            COMMITTEE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight">
            SEA-FUTURES 2026 Committee
          </h2>
          <div className="w-16 h-1.5 bg-brand-orange mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto">
            Meet the distinguished committees behind the organization of the conference.
          </p>
        </div>

        {/* Committee Groups — 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {committeeData.map((group) => (
            <div
              key={group.title}
              className="bg-brand-bg rounded-2xl border border-brand-gray p-6 sm:p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-brand-navy font-display mb-5">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.members.map((member, idx) => (
                  <li key={idx} className="text-sm text-gray-700 font-sans leading-relaxed flex items-start">
                    <span className="text-brand-navy mr-2 mt-[2px] shrink-0">•</span>
                    <span>{formatMember(member)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
