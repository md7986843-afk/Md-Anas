import { motion } from 'motion/react';
import { CheckCircle2, User, Mail, MapPin, Clock, Calendar, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '@/src/constants';
import SectionHeading from './SectionHeading';

const INFO_FIELDS = [
  { icon: User, label: "Name", value: PERSONAL_INFO.name },
  { icon: Mail, label: "Email", value: PERSONAL_INFO.email },
  { icon: Globe, label: "Experience", value: PERSONAL_INFO.experience.split('.')[0] }, // Just "2 years"
  { icon: Clock, label: "Availability", value: PERSONAL_INFO.availability },
  { icon: MapPin, label: "Location", value: PERSONAL_INFO.location },
  { icon: Calendar, label: "Languages", value: PERSONAL_INFO.languages },
];

const FEATURES = [
  "Pixel Perfect Design",
  "Fully Responsive Website",
  "SEO Optimized",
  "Fast Loading",
  "Modern UI/UX",
  "Clean Code Structure"
];

export default function About() {
  return (
    <div className="section-padding relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <div>
            <SectionHeading 
              subtitle="About Me" 
              title="I'm Md Anas, a Professional WordPress Developer"
              align="left"
              className="mb-8"
            />
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I specialize in creating modern, responsive, SEO-friendly, and user-focused WordPress websites 
              for businesses, agencies, startups, and personal brands. My goal is to build websites 
              that not only look visually stunning but also perform exceptionally fast and deliver real business results.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {FEATURES.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                  <span className="text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <a href="#portfolio" className="btn-premium inline-block">
              More About Me
            </a>
          </div>

          {/* Right Side - Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12 relative group"
          >
            <div className="absolute top-0 right-0 p-8">
              <User className="w-12 h-12 text-brand-accent/20 rotate-12 transition-transform group-hover:scale-110" />
            </div>
            
            <div className="space-y-8">
              {INFO_FIELDS.map((item, i) => (
                <div key={i} className="flex items-start gap-5 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center text-brand-accent shadow-lg shadow-brand-accent/10">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-white font-semibold flex items-center gap-2">
                       {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
