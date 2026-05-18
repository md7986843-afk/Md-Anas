/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import About from '@/src/components/About';
import Services from '@/src/components/Services';
import Portfolio from '@/src/components/Portfolio';
import Skills from '@/src/components/Skills';
import Process from '@/src/components/Process';
import Testimonials from '@/src/components/Testimonials';
import Blogs from '@/src/components/Blogs';
import CTA from '@/src/components/CTA';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-brand-accent/30 selection:text-white">
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-brand-bg">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-accent/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-glow/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="services" className="content-auto">
          <Services />
        </section>
        
        <section id="portfolio" className="content-auto">
          <Portfolio />
        </section>
        
        <section id="skills" className="content-auto">
          <Skills />
        </section>

        <section id="process" className="content-auto">
          <Process />
        </section>
        
        <section id="testimonials" className="content-auto">
          <Testimonials />
        </section>

        <section id="blog" className="content-auto">
          <Blogs />
        </section>

        <CTA />
        
        <section id="contact" className="content-auto">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

