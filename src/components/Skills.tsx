import { motion } from 'motion/react';
import { Target, Users, Award, Heart } from 'lucide-react';
import { SKILLS } from '@/src/constants';
import SectionHeading from './SectionHeading';

const STATS = [
  { icon: Target, count: "50+", label: "Projects Completed" },
  { icon: Users, count: "30+", label: "Happy Clients" },
  { icon: Award, count: "2+", label: "Years Experience" },
  { icon: Heart, count: "100%", label: "Satisfaction Rate" },
];

export default function Skills() {
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Skills Bars */}
          <div className="order-2 md:order-1">
            <SectionHeading 
              subtitle="My Skills" 
              title="Professional Expertise"
              align="left"
              className="mb-12"
            />
            
            <div className="space-y-8">
              {SKILLS.map((skill, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest">
                    <span>{skill.name}</span>
                    <span className="text-brand-accent">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-brand-accent to-brand-glow relative"
                    >
                      <div className="absolute top-0 right-0 h-full w-4 bg-white/30 blur-[4px]" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 flex flex-col items-center text-center group hover:bg-brand-accent/[0.05] transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl rotating-border mb-6 group-hover:scale-110 transition-transform">
                  <div className="rotating-border-inner rounded-2xl">
                    <stat.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-4xl font-display font-black mb-2 tracking-tight group-hover:neon-text">
                  {stat.count}
                </div>
                <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
