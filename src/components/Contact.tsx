import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Send, Facebook, Linkedin, Github, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '@/src/constants';
import SectionHeading from './SectionHeading';

const CONTACT_INFO = [
  { icon: Mail, label: "Email Me", value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
  { icon: Phone, label: "Call Me", value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
  { icon: MessageSquare, label: "WhatsApp", value: "Chat with me", href: PERSONAL_INFO.socials.whatsapp },
  { icon: MapPin, label: "Location", value: PERSONAL_INFO.location, href: "#" },
];

const SOCIALS = [
  { icon: Facebook, href: PERSONAL_INFO.socials.facebook },
  { icon: Linkedin, href: PERSONAL_INFO.socials.linkedin },
  { icon: Instagram, href: PERSONAL_INFO.socials.instagram },
  { icon: Github, href: PERSONAL_INFO.socials.github },
];

export default function Contact() {
  return (
    <div className="section-padding bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          subtitle="Get In Touch" 
          title="Let’s Discuss Your Project"
          description="Ready to take your digital presence to the next level? Drop me a message and I'll get back to you as soon as possible."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-6">
            {CONTACT_INFO.map((info, i) => (
              <motion.a
                key={i}
                href={info.href}
                target={info.href.startsWith('http') ? "_blank" : undefined}
                rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex items-center gap-6 group hover:border-brand-accent/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl rotating-border group-hover:scale-110 transition-transform">
                  <div className="rotating-border-inner rounded-2xl">
                    <info.icon className="w-6 h-6 text-brand-accent" />
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">{info.label}</div>
                  <div className="text-white font-bold tracking-tight">{info.value}</div>
                </div>
              </motion.a>
            ))}

            <div className="pt-8">
              <div className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">Social Networks</div>
              <div className="flex gap-4">
                {SOCIALS.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-12 h-12 rounded-2xl rotating-border text-gray-400 hover:text-brand-accent transition-all"
                  >
                    <div className="rotating-border-inner rounded-2xl">
                      <social.icon className="w-5 h-5" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-8 md:p-12"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 pl-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full px-6 py-4 rounded-2xl glass border-white/10 focus:border-brand-accent/50 outline-none transition-all placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 pl-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 rounded-2xl glass border-white/10 focus:border-brand-accent/50 outline-none transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 pl-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="Enter project subject"
                  className="w-full px-6 py-4 rounded-2xl glass border-white/10 focus:border-brand-accent/50 outline-none transition-all placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 pl-2">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-6 py-4 rounded-2xl glass border-white/10 focus:border-brand-accent/50 outline-none transition-all placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-premium py-5 flex items-center justify-center gap-3 uppercase font-black tracking-[0.2em] text-sm">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
