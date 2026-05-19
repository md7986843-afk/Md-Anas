import { motion } from 'motion/react';
import { ExternalLink, Eye } from 'lucide-react';
import { PORTFOLIO } from '@/src/constants';
import SectionHeading from './SectionHeading';

export default function Portfolio() {
  return (
    <div className="section-padding bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          subtitle="My Portfolio" 
          title="Recent Projects I've Delivered"
          description="A selection of high-end WordPress websites built for various industries."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PORTFOLIO.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-[2rem] border border-white/10 shadow-xl"
            >
              {/* Link Wrapper for the whole card area */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-0"
              />

              {/* Image */}
              <motion.img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent opacity-90 transition-all duration-300 translate-y-[70%] group-hover:translate-y-0 p-8 flex flex-col justify-end pointer-events-none group-hover:pointer-events-auto">
                <div className="space-y-4">
                  <span className="px-3 py-1 bg-brand-accent/20 text-brand-accent text-xs font-bold rounded-lg uppercase tracking-wider border border-brand-accent/20">
                    {project.category}
                  </span>
                  
                  <h3 className="text-2xl font-display font-bold text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 btn-premium flex items-center justify-center gap-2 py-3 pointer-events-auto"
                    >
                      Live Preview <Eye className="w-4 h-4" />
                    </a>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full rotating-border text-gray-300 hover:text-white transition-colors pointer-events-auto"
                    >
                      <div className="rotating-border-inner rounded-full">
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Label (Visible when not hovered) */}
              <div className="absolute bottom-6 left-6 right-6 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                <div className="glass-card p-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-brand-accent font-bold uppercase tracking-widest">{project.category}</div>
                    <div className="text-sm font-bold text-white mt-1">{project.title}</div>
                  </div>
                  <Eye className="w-5 h-5 text-gray-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
