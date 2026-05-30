import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/src/constants';
import SectionHeading from './SectionHeading';
import { useState } from 'react';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          subtitle="Testimonials" 
          title="What My Clients Say"
          description="Real feedback from businesses and agencies I've collaborated with."
        />

        <div className="relative max-w-4xl mx-auto pt-10">
          <div className="absolute top-0 right-0 p-10 hidden md:block">
            <Quote className="w-24 h-24 text-brand-accent/5 rotate-12" />
          </div>

          <div className="overflow-hidden relative pb-12">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-10 md:p-16 text-center md:text-left flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-brand-accent blur-[20px] opacity-30 rounded-full" />
                <img 
                  src={TESTIMONIALS[current].image} 
                  alt={TESTIMONIALS[current].name}
                  referrerPolicy="no-referrer"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover relative border-4 border-white/10"
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-center md:justify-start gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed italic mb-8">
                  "{TESTIMONIALS[current].review}"
                </p>
                
                <div>
                  <h4 className="text-xl font-display font-bold text-white uppercase tracking-tight">
                    {TESTIMONIALS[current].name}
                  </h4>
                  <p className="text-brand-accent font-medium text-sm">
                    {TESTIMONIALS[current].position}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-accent/50 transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${current === i ? 'bg-brand-accent w-8' : 'bg-white/10'}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-accent/50 transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
