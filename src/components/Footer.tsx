import { PERSONAL_INFO } from '@/src/constants';
import { Facebook, Linkedin, Github, Instagram, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-bg border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-accent to-brand-glow flex items-center justify-center font-display font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
                {PERSONAL_INFO.brand}
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              I build modern, fast and responsive WordPress websites that help businesses grow and stand out online.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, link: PERSONAL_INFO.socials.facebook },
                { Icon: Linkedin, link: PERSONAL_INFO.socials.linkedin },
                { Icon: Instagram, link: PERSONAL_INFO.socials.instagram },
                { Icon: Github, link: PERSONAL_INFO.socials.github },
              ].map(({ Icon, link }, i) => (
                <a 
                  key={i} 
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full rotating-border text-gray-400 hover:text-white transition-all"
                >
                  <div className="rotating-border-inner rounded-full">
                    <Icon className="w-5 h-5" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-brand-accent text-sm footer-link animated-underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Services</h4>
            <ul className="space-y-4">
              {['WordPress Website Design', 'Plugin Customization', 'WooCommerce Development', 'Speed & SEO Optimization'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-brand-accent text-sm footer-link animated-underline">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                {PERSONAL_INFO.location}
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                {PERSONAL_INFO.email}
              </li>
              <li className="flex items-center gap-4 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                {PERSONAL_INFO.phone}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 {PERSONAL_INFO.name}. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>

          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="w-12 h-12 rounded-full rotating-border text-brand-accent group overflow-hidden relative"
          >
            <div className="rotating-border-inner rounded-full">
              <ArrowUp className="w-6 h-6" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
