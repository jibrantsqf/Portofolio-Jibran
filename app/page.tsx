"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LightPillar from '../components/LightPillar';
import ProfileCard from '../components/ProfileCard';

import { 
  SiFlutter, SiLaravel, SiDart, SiPhp, SiPython, 
  SiMysql, SiFirebase, SiTailwindcss, SiNextdotjs, 
  SiFigma, SiPostman, SiGithub, SiGit, SiHtml5,
  SiPandas, SiNumpy, SiScikitlearn, SiStreamlit 
} from 'react-icons/si';

const experiences = [
  {
    date: "JAN 2025 - PRESENT",
    title: "Mobile Developer",
    company: "BANTUIN MOBILE APP",
    desc: "Mengembangkan aplikasi mobile menggunakan Flutter & Firebase bersama dengan 5 anggota tim"
  },
  {
    date: "FEB 2026 - JUL 2026",
    title: "Data Scientist (Internship)",
    company: "SIB Dicoding Coding Camp 2026",
    desc: "Mengikuti program magang jarak jauh selama 6 bulan, menyelesaikan kelas Fundamental Data Analysis dan Beginner Machine Learning, serta mengerjakan Capstone Project Sistem Manajemen Kampanye Terpadu. Bertanggung jawab sebagai Data Scientist dalam merancang sistem analitik untuk UMKM, membangun fitur Budget Optimizer, melakukan preprocessing data, web scraping, dan mengembangkan Campaign Management Dashboard berbasis Streamlit menggunakan Python (Pandas, NumPy, Scikit-learn)."
  },
  {
    date: "DEC 2021 - MAY 2022",
    title: "Teknisi Komputer",
    company: "Sigit Computer Situbondo",
    desc: "Melakukan troubleshooting & maintenance hardware/software laptop dan PC, menganalisis kebutuhan spesifikasi perangkat sesuai permintaan klien, serta membantu instalasi sistem operasi dan konfigurasi jaringan lokal untuk optimasi performa perangkat."
  }
];

const educations = [
  {
    date: "2023 - PRESENT",
    title: "Politeknik Negeri Banyuwangi",
    subtitle: "D4 TEKNOLOGI REKAYASA PERANGKAT LUNAK",
    desc: "Fokus pada Software Engineering dengan capaian IPK saat ini 3.70 / 4.00."
  },
  {
    date: "2020 - 2023",
    title: "SMKN 1 PANJI SITUBONDO",
    subtitle: "Teknik Komputer dan Jaringan(TKJ)",
    desc: "Pendidikan menengah atas dengan fokus pada teknik komputer dan jaringan."
  }
];

const skillCategories = [
  {
    category: "FLUTTER DEVELOPMENT",
    skills: ["Flutter", "Dart", "Firebase"]
  },
  {
    category: "BACK-END DEVELOPMENT",
    skills: ["Laravel", "Laravel RestAPI", "PHP", "SQL / MySQL"]
  },
  {
    category: "WEBSITE DEVELOPMENT",
    skills: ["HTML", "CSS", "Laravel Framework"]
  },
  {
    category: "DATA SCIENCE & MACHINE LEARNING",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"]
  }
];

const tools = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Pandas', icon: SiPandas, color: '#150458' },
  { name: 'NumPy', icon: SiNumpy, color: '#013243' },
  { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'Streamlit', icon: SiStreamlit, color: '#FF4B4B' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'Dart', icon: SiDart, color: '#0175C2' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'GitHub', icon: SiGithub, color: '#ffffff' }
];

const projects = [
  {
    title: "MU Transfer Predictor",
    category: "MACHINE LEARNING / CBR",
    role: "Data Scientist",
    desc: "Sistem Case-Based Reasoning (CBR) untuk memprediksi potensi keberhasilan transfer pemain ke Manchester United.",
    tech: ["Python", "Streamlit", "Pandas"],
    link: "https://github.com/jibrantsqf/Proyek-SPK-CBR-NATIVE-ManUnited",
    image: "ManUnited.jpeg",
    detailDesc: "Sistem pendukung keputusan berbasis Case-Based Reasoning (CBR). Sistem ini menganalisis kemiripan (similarity) calon pemain baru dengan data historis transfer pemain sebelumnya untuk memberikan rekomendasi."
  },
  {
    title: "Banking Transaction Clustering",
    category: "DATA SCIENCE",
    role: "Data Analyst",
    desc: "Analisis dan segmentasi data transaksi perbankan menggunakan teknik clustering dan klasifikasi untuk mengidentifikasi pola nasabah.",
    tech: ["Python", "Scikit-Learn", "Data Science"],
    link: "https://github.com/jibrantsqf/banking-transaction-clustering-classification",
    image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=2070&auto=format&fit=crop",
    detailDesc: "Menggunakan algoritma K-Means untuk mengelompokkan nasabah berdasarkan perilaku transaksi. Model kemudian dilanjutkan dengan algoritma Klasifikasi (Random Forest) untuk memprediksi profil nasabah."
  },
  {
    title: "Integrated Campaign Management",
    category: "DATA SCIENCE",
    role: "Data Scientist",
    desc: "Sistem manajemen kampanye dengan Budget Optimizer dan AI Influencer Matching.",
    tech: ["Data Science", "Machine Learning", "Python"],
    link: "https://github.com/nafisfhkr/Capstone-Project-Data-Science---CC26-PSU142",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    detailDesc: "Dikembangkan selama program SIB Dicoding. Sistem analitik untuk UMKM ini membantu optimasi alokasi anggaran menggunakan Linear Programming dan pencocokan influencer menggunakan NLP."
  },
  {
    title: "Bike Sharing Analytics",
    category: "DATA ANALYSIS",
    role: "Data Analyst",
    desc: "Dashboard interaktif untuk menganalisis pola penyewaan sepeda berdasarkan cuaca.",
    tech: ["Python", "Streamlit", "Pandas"],
    link: "https://github.com/jibrantsqf/bike-sharing-dashboard",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2070&auto=format&fit=crop",
    detailDesc: "Proyek analisis data komprehensif. Menemukan korelasi kuat antara suhu udara dan jumlah penyewaan. Menggunakan Streamlit untuk visualisasi tren harian dan pengaruh cuaca."
  },
  {
    title: "Kasir Pintar API",
    category: "BACKEND DEVELOPMENT",
    role: "Backend Developer",
    desc: "Pengembangan RESTful API menggunakan arsitektur yang solid untuk aplikasi kasir.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    link: "https://github.com/jibrantsqf/API-Kasir-Pintar-Laravel",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    detailDesc: "Sistem kasir berbasis web yang mencakup manajemen stok, transaksi, diskon, hingga laporan hutang-piutang. Menerapkan RESTful API standar dengan otentikasi JWT dan validasi input yang ketat."
  },
  {
    title: "E-Commerce Bantuin",
    category: "MOBILE DEVELOPMENT",
    role: "Mobile Developer",
    desc: "Aplikasi mobile cross-platform untuk e-commerce lokal.",
    tech: ["Flutter", "Dart", "Firebase", "Agile/Scrum"],
    link: "https://github.com/nafisfhkr/E-commerce-Bantuin",
    image: "Bantuin.png",
    detailDesc: "Aplikasi e-commerce penyedia jasa untuk perbaikan kendaraan dan barang elektronik. Memiliki fitur autentikasi, manajemen layanan, dan integrasi real-time menggunakan arsitektur Firebase."
  }
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="bg-[#050505] text-white min-h-screen overflow-x-hidden">
      
      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section id="home" className="relative w-full h-screen flex flex-col items-center text-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 [&>div]:w-full [&>div]:h-full">
          <LightPillar 
            topColor="#1138e2" 
            bottomColor="#ff00f3" 
            intensity={1} 
            rotationSpeed={0.3} 
            glowAmount={0.002} 
            pillarWidth={3} 
            pillarHeight={0.4} 
            noiseIntensity={0.5} 
            pillarRotation={25} 
            interactive={false} 
            mixBlendMode="screen" 
            quality="high" 
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl relative z-10 font-extrabold tracking-tight mb-6 text-white mt-10">
          Halo, Saya <br className="md:hidden" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            Jibran Tsaqif
          </span> 
        </h1>
        
        <p className="text-lg md:text-xl relative z-10 text-gray-300 mb-12 max-w-2xl font-light px-4"> 
          Software Developer | Data Science & Machine Learning Enthusiast. 
        </p>
        
        <div className="relative z-10 flex flex-col items-center gap-10">
          <a href="/resume.pdf" download="Resume_Jibran_Tsaqif.pdf" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black text-lg font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            RESUME
          </a>
          <div className="flex gap-8 text-sm font-semibold text-gray-500 tracking-[0.2em]">
            <a href="https://github.com/jibrantsqf" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GITHUB</a>
            <a href="https://linkedin.com/in/jibran-tsaqif" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
            <a href="https://www.instagram.com/jibrantsaqif" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">INSTAGRAM</a>
          </div>
        </div>
      </section>

      <div className="space-y-40 pb-24 pt-24 px-6 md:px-12 lg:px-16 max-w-[1900px] mx-auto">
        
        {/* --- ABOUT SECTION --- */}
        <section id="about" className="scroll-mt-24 relative max-w-6xl mx-auto">
          <div className="absolute right-0 top-20 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full -z-10"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Tentang Saya</h2>
          
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <div className="flex justify-center lg:justify-start w-full"> 
              <ProfileCard 
                name="Jibran Tsaqif" 
                title="Data Scientist & Software Developer" 
                handle="jibrantsaqif" 
                avatarUrl="/profile.jpg" 
                miniAvatarUrl="/profile.jpg" 
                status="Tersedia untuk Kolaborasi" 
                contactText="Hubungi Saya" 
              /> 
            </div>
            <div className="space-y-6">
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-light">
                <p> 
                  Mahasiswa Politeknik Negeri Banyuwangi dan calon Data Scientist dengan keahlian kuat dalam analisis data, machine learning, dan pengembangan perangkat lunak. Berpengalaman membangun solusi berbasis data dan API menggunakan Python, Laravel, dan Flutter, termasuk pembuatan sistem manajemen kampanye terintegrasi yang memanfaatkan kecerdasan buatan. Termotivasi untuk menerapkan pemodelan algoritma tingkat lanjut dan teknik ekstraksi data guna mendukung pengambilan keputusan yang strategis dan berdampak di dunia profesional. 
                </p>
                <p> 
                  Saat ini saya tergabung dalam program SIB Dicoding Coding Camp 2026 sebagai salah satu milestone dalam learning path Data Science yang saya jalani. Fokus saya adalah memperdalam keterampilan mulai dari eksplorasi data, analisis statistik, hingga pengembangan model prediktif dan aplikasi berbasis data yang efisien. 
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- RESUME SECTION --- */}
        <section id="resume" className="scroll-mt-24 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {/* Kolom 1: EXPERIENCE */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>
                </div>
                <h2 className="text-2xl font-black uppercase tracking-wider text-white">Experience</h2>
              </div>
              <div className="border-l border-neutral-800 ml-6 space-y-12"> 
                {experiences.map((exp, idx) => ( 
                  <div key={idx} className="relative pl-8 group"> 
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-600 group-hover:bg-blue-500 transition-colors ring-4 ring-neutral-950"></div> 
                    <div className="text-xs font-semibold text-neutral-500 flex items-center gap-2 mb-2"> 
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/></svg> 
                      {exp.date} 
                    </div> 
                    <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3> 
                    <p className="text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">{exp.company}</p> 
                    <p className="text-sm text-neutral-400 font-light leading-relaxed">{exp.desc}</p> 
                  </div> 
                ))} 
              </div>
            </div>

            {/* Kolom 2: EDUCATION */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>
                </div>
                <h2 className="text-2xl font-black uppercase tracking-wider text-white">Education</h2>
              </div>
              <div className="border-l border-neutral-800 ml-6 space-y-12"> 
                {educations.map((edu, idx) => ( 
                  <div key={idx} className="relative pl-8 group"> 
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-600 group-hover:bg-cyan-500 transition-colors ring-4 ring-neutral-950"></div> 
                    <div className="text-xs font-semibold text-neutral-500 flex items-center gap-2 mb-2"> 
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/></svg> 
                      {edu.date} 
                    </div> 
                    <h3 className="text-lg font-bold text-white mb-1">{edu.title}</h3> 
                    <p className="text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">{edu.subtitle}</p> 
                    <p className="text-sm text-neutral-400 font-light leading-relaxed">{edu.desc}</p> 
                  </div> 
                ))} 
              </div>
            </div>

            {/* Kolom 3: SKILLS */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>
                </div>
                <h2 className="text-2xl font-black uppercase tracking-wider text-white">Skills</h2>
              </div>
              <div className="space-y-6"> 
                {skillCategories.map((category, idx) => ( 
                  <div key={idx} className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 transition-colors"> 
                    <h4 className="text-xs font-bold text-neutral-500 tracking-widest mb-5 uppercase">{category.category}</h4> 
                    <div className="flex flex-wrap gap-3"> 
                      {category.skills.map((skill, i) => ( 
                        <span key={i} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-neutral-800 bg-neutral-950 text-sm font-medium text-neutral-300"> 
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 text-neutral-500"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> 
                          {skill} 
                        </span> 
                      ))} 
                    </div> 
                  </div> 
                ))} 
              </div>
            </div>
          </div>
        </section>

        {/* --- SKILLSET SECTION --- */}
        <section id="tools" className="scroll-mt-24 max-w-6xl mx-auto">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white mb-4 flex items-center gap-3"> 
              SKILLSET <span className="text-blue-500 font-light">|</span> <span className="text-neutral-500 font-light">TECH STACK</span> 
            </h2>
            <p className="text-sm md:text-base font-light text-neutral-400 tracking-wide max-w-2xl"> 
              Kurasi alat dan teknologi yang saya andalkan untuk membangun solusi perangkat lunak yang tangguh dan model analitik berbasis data. 
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"> 
            {tools.map((tool, idx) => { 
              const IconComponent = tool.icon; 
              return ( 
                <div key={idx} className="group flex flex-col items-center justify-center p-6 bg-[#0f0f0f] border border-neutral-800 rounded-2xl aspect-[4/3] hover:bg-white hover:border-white transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-white/20"> 
                  <IconComponent className="w-10 h-10 mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: tool.color }} /> 
                  <span className="text-[11px] font-bold tracking-widest text-neutral-500 group-hover:text-black uppercase text-center transition-colors duration-300">
                    {tool.name}
                  </span> 
                </div> 
              ) 
            })} 
          </div>
        </section>

        {/* --- PROJECTS GALLERY SECTION --- */}
        <section id="projects" className="scroll-mt-24 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Proyek Unggulan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col bg-[#0f0f0f] border border-neutral-800 rounded-3xl overflow-hidden cursor-pointer hover:border-neutral-600 transition-all duration-500"
              >
                {/* Gambar Proyek Polos Tanpa Pil Teknologi */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-neutral-800">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80"></div>
                </div>

                <div className="p-8 pt-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-black tracking-[0.2em] text-blue-500 uppercase block mb-2">
                    {project.category}
                  </span>
                  <p className="text-xs font-medium text-neutral-400 mb-3">{project.role}</p>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight">{project.title}</h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8 line-clamp-2">
                    {project.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:translate-x-2 transition-transform duration-300 mt-auto">
                    VIEW PROJECT <span className="text-blue-500">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="scroll-mt-24">
          <div className="max-w-2xl mx-auto p-8 md:p-12 rounded-3xl bg-neutral-900/30 border border-neutral-800">
            <div className="text-center mb-10"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Mari Berkolaborasi</h2><p className="text-gray-400"> Punya ide proyek atau butuh solusi berbasis data? Tinggalkan pesan di bawah ini. </p></div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div><label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Nama Lengkap</label><input type="text" id="name" name="name" required className="w-full px-5 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-gray-600 focus:border-blue-500 outline-none transition-all" /></div>
                <div><label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email Aktif</label><input type="email" id="email" name="email" required className="w-full px-5 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-gray-600 focus:border-blue-500 outline-none transition-all" /></div>
              </div>
              <div><label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Pesan</label><textarea id="message" name="message" rows={4} required className="w-full px-5 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-gray-600 focus:border-blue-500 outline-none transition-all resize-none"></textarea></div>
              <button type="submit" className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wide transition-colors shadow-lg shadow-blue-500/30"> Kirim Pesan </button>
            </form>
          </div>
        </section>
      </div>

      {/* ------------------------------------------------------------------------- */}
      {/* --- MODAL DETAIL PROYEK (Terpusat Sempurna, Latar Belakang Gelap Total) --- */}
      {/* ------------------------------------------------------------------------- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          
          {/* Overlay Gelap Total (Menutupi seluruh layar utama) */}
          <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl transition-all" onClick={() => setSelectedProject(null)}></div>
          
          {/* Modal Container */}
          <div className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-[2rem] border border-neutral-800 flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden z-10 max-h-[90vh]">
            
            {/* Bagian Gambar (Kiri - Desktop) */}
            <div className="w-full md:w-1/2 relative bg-neutral-900 border-r border-neutral-800 hidden md:block">
               <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>

            {/* Bagian Gambar (Atas - Mobile) */}
            <div className="w-full aspect-video relative bg-neutral-900 border-b border-neutral-800 md:hidden block">
               <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
               <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white backdrop-blur-md"> ✕ </button>
            </div>

            {/* Bagian Teks & Info (Kanan) */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">
              
              {/* Close Button Desktop */}
              <div className="hidden md:flex justify-end mb-2 relative z-20">
                <button onClick={() => setSelectedProject(null)} className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>

              {/* Header Info */}
              <div className="mb-8 md:pr-4">
                <span className="text-[10px] font-black tracking-[0.2em] text-amber-500 uppercase block mb-3">Project Detail</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase leading-tight">{selectedProject.title}</h2>
              </div>
              
              {/* Konten Utama */}
              <div className="space-y-8 mb-8 flex-grow">
                <div>
                  <h4 className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-3">Description</h4>
                  <p className="text-sm text-neutral-300 leading-relaxed font-light">{selectedProject.detailDesc}</p>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t: string, i: number) => (
                      <span key={i} className="px-3.5 py-1.5 bg-[#1a1a1a] border border-neutral-800 text-[10px] font-bold text-neutral-400 uppercase tracking-wider rounded-md">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tombol Action Bottom */}
              <div className="mt-auto pt-6 border-t border-neutral-800">
                <a href={selectedProject.link} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 border border-neutral-700 bg-transparent text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-neutral-800 transition-colors gap-3 w-full sm:w-max">
                  <SiGithub className="text-base" /> GitHub
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}