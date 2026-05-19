import { motion } from 'motion/react';
import { Check, Zap } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

const Pricing = () => {
  return (
    <div className="section-padding relative overflow-hidden" id="pricing">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-brand-accent text-sm font-bold uppercase tracking-widest mb-6"
          >
            <Zap className="w-4 h-4" />
            Pricing Plans
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 tracking-tight"
          >
            Choose Your <span className="neon-text">Plan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Professional WordPress solutions tailored to your specific needs and budget.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className={`relative glass-card p-6 sm:p-8 md:p-10 flex flex-col group transition-all duration-500 hover:translate-y-[-10px] ${
                plan.isPopular ? 'border-brand-accent/50 shadow-2xl shadow-brand-accent/10' : ''
              } ${i === 2 ? 'sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:w-full lg:max-w-none' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-accent text-white text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-display font-black text-brand-accent">${plan.price}</span>
                <span className="text-gray-500 font-medium">/ Project</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-brand-accent" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-4 rounded-xl font-bold transition-all text-center ${
                  plan.isPopular
                    ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/30 hover:scale-[1.02]'
                    : 'glass border-white/10 hover:bg-white/5 hover:border-brand-accent/30'
                }`}
              >
                {plan.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
