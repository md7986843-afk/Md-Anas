import { PERSONAL_INFO } from '@/src/constants';
import { Facebook, Linkedin, Github, Instagram, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import Logo from './Logo';

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
            <a href="#home" className="inline-block mb-6 group">
              <Logo className="h-12 sm:h-14" />
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
                { Icon: () => (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                ), link: PERSONAL_INFO.socials.whatsapp },
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
              {['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Blog', 'Contact'].map((link) => (
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
