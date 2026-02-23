import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-28 section-glow">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d18] to-[#0a0a0f]" />

      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold text-indigo-400 uppercase tracking-[0.25em] mb-4 font-mono"
          >
            Let's Connect
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-lg mx-auto"
          >
            I'm always open to discussing new projects, creative ideas or opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-xl font-bold text-white">Let's work together!</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Whether you have a project in mind, need a tech partner, or just want to say hello — I'd love to hear from you.
            </p>

            {/* Contact cards */}
            <div className="space-y-3">
              <a
                href="mailto:buddy@flyhii.in"
                className="group glass-card rounded-xl p-4 flex items-center gap-4 hover:border-indigo-500/20 transition-all duration-300 block"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Email</p>
                  <p className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">
                    buddy@flyhii.in
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <div className="glass-card rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-sm font-semibold text-white">Vishakhapatnam, AP</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              {[
                { href: 'https://github.com/Mohan-Ganta', icon: Github, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/mohan-ganta/', icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.06] hover:border-indigo-500/20 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-medium">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-slate-600 focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-all duration-300 text-sm"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-slate-600 focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-all duration-300 text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-slate-600 focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-all duration-300 text-sm"
                    placeholder="Project inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-slate-600 focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-all duration-300 text-sm resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="group w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:scale-[1.01]"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
