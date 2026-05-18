import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { PERSONAL_INFO } from '@/src/constants';

export default function CTA() {
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-accent to-brand-glow p-12 md:p-24 text-center"
        >
          {/* Animated Background Decor */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[40rem] h-[40rem] bg-white/10 rounded-full blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[30rem] h-[30rem] bg-black/20 rounded-full blur-[80px]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 tracking-tight">
              Let’s Build Something Amazing Together
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-12">
              Have a project idea? Let’s create a modern and high-performing website together. 
              I’m available for freelance work and new collaborations.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href={PERSONAL_INFO.socials.whatsapp} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-white text-brand-accent font-black rounded-full hover:scale-105 transition-transform flex items-center gap-3 shadow-2xl shadow-black/20 uppercase tracking-widest text-sm"
              >
                Start a Project <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
