"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  // State untuk melacak section mana yang sedang aktif
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Mengambil semua elemen <section> yang memiliki id
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        // Mengukur posisi setiap section dari atas layar
        const sectionTop = (section as HTMLElement).offsetTop - 150; 
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        // Jika posisi scroll ada di dalam area section ini, jadikan section ini aktif
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          if (sectionId) setActiveSection(sectionId);
        }
      });
    };

    // Pasang 'pendengar' ketika user melakukan scroll
    window.addEventListener('scroll', handleScroll);
    
    // Jalankan sekali saat halaman pertama dimuat
    handleScroll();

    // Bersihkan 'pendengar' saat komponen dilepas (unmount)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Daftar menu untuk mempermudah perulangan (mapping)
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Resume', id: 'resume' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    // Menambahkan efek kaca (backdrop-blur) agar teks tetap terbaca saat scroll
    <nav className="fixed top-0 left-0 w-full z-50 p-6 md:px-12 bg-neutral-950/80 backdrop-blur-md">
      <div className="max-w-[1900px] mx-auto flex justify-between items-center text-sm">
        
        {/* Sisi Kiri: Menu Navigasi */}
        <div className="flex gap-6 md:gap-8 text-neutral-400 font-light">
          {navLinks.map((link) => (
            <Link 
              key={link.id} 
              href={`#${link.id}`} 
              className={`pb-1 transition-all duration-300 ${
                activeSection === link.id 
                  ? 'text-white border-b border-white' // Style jika aktif (garis bawah putih)
                  : 'hover:text-white' // Style jika tidak aktif
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Sisi Kanan: Info Kontak */}
        <div className="flex items-center gap-2 text-neutral-400 font-light hidden md:flex">
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
          <a href="tel:+6285735702010" className="hover:text-white transition-colors">+62 85 7357 02010</a>
        </div>

      </div>
    </nav>
  )
}