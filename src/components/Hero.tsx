import { motion } from 'motion/react';
import { Download, ExternalLink, Facebook, Linkedin, Github, Instagram, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '@/src/constants';

const SOCIALS = [
  { icon: Facebook, href: PERSONAL_INFO.socials.facebook },
  { icon: Linkedin, href: PERSONAL_INFO.socials.linkedin },
  { icon: Instagram, href: PERSONAL_INFO.socials.instagram },
  { icon: Github, href: PERSONAL_INFO.socials.github },
];

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 right-[10%] w-[40rem] h-[40rem] bg-brand-accent/20 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-6">
              <span className="text-brand-accent animate-pulse">👋</span>
              <span className="text-sm font-semibold tracking-wide uppercase">Hello, I’m</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-tight mb-4 tracking-tighter">
              {PERSONAL_INFO.name}
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-8 neon-text uppercase tracking-tight">
              {PERSONAL_INFO.tagline}
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              I build modern, fast, high-converting, and fully responsive WordPress websites 
              that help businesses grow online with a strong professional presence.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <a href="#portfolio" className="btn-premium flex items-center gap-2">
                View My Work <ExternalLink className="w-4 h-4" />
              </a>
              <button className="px-8 py-3 rounded-full font-medium border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-2">
                Download CV <Download className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center gap-8">
              <span className="text-gray-500 uppercase text-xs font-bold tracking-[0.2em]">Follow Me</span>
              <div className="flex items-center gap-4">
                {SOCIALS.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full rotating-border text-gray-400 hover:text-brand-accent transition-all"
                  >
                    <div className="rotating-border-inner rounded-full text-gray-400 group-hover:text-brand-accent">
                      <social.icon className="w-5 h-5" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            {/* Image Container with Glows */}
            <div className="relative w-full max-w-[500px] aspect-square rounded-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent to-brand-glow rounded-full blur-[40px] opacity-20 animate-pulse-slow" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-accent/30 to-brand-glow/30 rounded-full -z-10 animate-spin-slow duration-[10s]" />
              
              <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                <img 
                  src={PERSONAL_INFO.personalImage} 
                  alt={PERSONAL_INFO.name}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass shadow-xl p-4 rounded-2xl flex items-center gap-3 border-white/20"
              >
                <div className="w-10 h-10 rounded-full rotating-border text-brand-accent">
                  <div className="rotating-border-inner rounded-full bg-brand-accent/20">
                    <Briefcase className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold">2+ Years</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Experience</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-1/4 -left-8 glass shadow-xl p-4 rounded-2xl flex items-center gap-3 border-white/20"
              >
                <div className="text-2xl font-black text-brand-accent">50+</div>
                <div>
                  <div className="text-sm font-bold">Projects</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Completed</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-2 right-4 glass shadow-xl p-4 rounded-2xl flex items-center gap-3 border-white/20"
              >
                <div className="text-2xl font-black text-green-400">100%</div>
                <div>
                  <div className="text-sm font-bold">Satisfaction</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Guarantee</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
