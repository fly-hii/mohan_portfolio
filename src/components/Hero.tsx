import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowDown, Sparkles, Building2 } from 'lucide-react';
import developerImg from '../assets/developer-profile.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            Available for collaborations
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 relative"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-full opacity-70 blur-sm animate-gradient" />
            <img
              src={developerImg}
              alt="Mohan Ganta"
              className="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover ring-2 ring-[#0a0a0f]"
            />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-4 rounded-full border border-dashed border-indigo-500/20"
          />
        </motion.div>

        {/* Role tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 mb-4"
        >
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="text-sm font-semibold text-indigo-400 uppercase tracking-[0.2em] font-mono">
            CEO & Software Engineer
          </span>
          <Sparkles className="w-4 h-4 text-indigo-400" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight glow-text"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
            Mohan Ganta
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-xl text-base md:text-lg text-slate-400 mb-8 leading-relaxed"
        >
          CEO at <span className="text-indigo-300 font-medium">Flyhii Solutions</span> with 3+ years of experience in full-stack development, cloud infrastructure, and product leadership. Formerly Founding Engineer at <span className="text-purple-300 font-medium">FURY AI</span>.
        </motion.p>

        {/* Info pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-slate-300 text-sm">
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>buddy@flyhii.in</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-slate-300 text-sm">
            <MapPin className="w-4 h-4 text-indigo-400" />
            <span>Vishakhapatnam, AP</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-slate-300 text-sm">
            <Building2 className="w-4 h-4 text-indigo-400" />
            <span>3 R&D Centres</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:scale-[1.02]"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </a>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 font-semibold text-sm hover:bg-white/[0.08] hover:border-indigo-500/30 hover:text-white transition-all duration-300"
          >
            View Products
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
