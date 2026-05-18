import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOGS } from '@/src/constants';
import SectionHeading from './SectionHeading';

export default function Blogs() {
  return (
    <div className="section-padding bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          subtitle="Recent Articles" 
          title="Insights & Tutorials"
          description="Stay updated with the latest trends in WordPress development and speed optimization."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group overflow-hidden"
            >
              <div className="relative h-[240px] overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-brand-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-lg">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-6 text-xs text-gray-500 font-medium mb-4 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-accent" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-accent" />
                    {blog.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold mb-6 group-hover:text-brand-accent transition-colors leading-tight">
                  {blog.title}
                </h3>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-glow group-hover:text-brand-accent transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
