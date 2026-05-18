import { motion } from 'motion/react';
import { PROCESS } from '@/src/constants';
import SectionHeading from './SectionHeading';

export default function Process() {
  return (
    <div className="section-padding bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          subtitle="My Workflow" 
          title="The Success Path"
          description="How I bring your vision to life through a systematic and tested development process."
        />

        <div className="relative">
          {/* Horizontal Line on Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {PROCESS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-8 flex justify-center">
                  <div className="w-16 h-16 rounded-full rotating-border z-10 transition-all">
                    <div className="rotating-border-inner rounded-full font-display font-black text-2xl text-brand-accent">
                      {step.step}
                    </div>
                  </div>
                  {/* Subtle Pulse Effect */}
                  <div className="absolute inset-x-0 bottom-0 top-0 w-16 h-16 bg-brand-accent/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100 mx-auto" />
                </div>
                
                <h3 className="text-xl font-display font-bold mb-4 tracking-tight group-hover:text-brand-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
