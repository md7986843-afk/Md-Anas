import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({ subtitle, title, description, align = 'center', className }: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-16",
      align === 'center' ? "text-center mx-auto" : "text-left",
      className
    )}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-brand-accent uppercase bg-brand-accent/10 rounded-full border border-brand-accent/20"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
