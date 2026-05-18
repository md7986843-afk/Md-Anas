import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '@/src/constants';
import SectionHeading from './SectionHeading';
import { cn } from '@/src/lib/utils';

export default function Services() {
  return (
    <div className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          subtitle="What I Do" 
          title="Exceptional Services for Your Digital Growth"
          description="I provide professional WordPress solutions that combine stunning design with high performance to help your business stand out."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            // @ts-ignore
            const IconComponent = LucideIcons[service.icon];
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={cn(
                  "glass-card p-10 group relative transition-all duration-300",
                  "hover:bg-brand-accent/[0.05] hover:border-brand-accent/30"
                )}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-[40px] rounded-full group-hover:bg-brand-accent/10 transition-colors" />
                
                <div className="w-16 h-16 rounded-2xl rotating-border mb-8 shadow-xl shadow-brand-accent/20 transition-transform group-hover:rotate-12">
                   <div className="rotating-border-inner rounded-2xl bg-gradient-to-br from-brand-accent to-brand-glow text-white">
                      {IconComponent && <IconComponent className="w-8 h-8" />}
                   </div>
                </div>

                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                  {service.description}
                </p>

                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-brand-accent">0{i + 1} Service</span>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-brand-glow group-hover:text-brand-accent"
                  >
                    <LucideIcons.ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
