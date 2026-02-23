import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';

const Education = () => {
  const certifications = [
    { name: 'Java Certification', issuer: 'HackerRank', color: 'from-orange-500 to-red-500' },
    { name: 'SQL (Advanced)', issuer: 'HackerRank', color: 'from-blue-500 to-cyan-500' },
    { name: 'Java Explorer', issuer: 'Oracle', color: 'from-red-500 to-pink-500' },
    { name: 'Python Certification', issuer: 'HackerRank', color: 'from-emerald-500 to-teal-500' },
  ];

  return (
    <section className="relative py-28 section-glow">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0c0c16] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-extrabold text-white">Education</h2>
            </div>

            <div className="glass-card rounded-2xl p-6 hover:border-indigo-500/15 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/10 items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-indigo-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white leading-snug">
                    B.Tech in Computer Science Engineering
                  </h3>
                  <p className="text-indigo-400 font-medium text-sm mt-1">
                    Jawaharlal Nehru Technological University
                  </p>
                  <p className="text-slate-500 text-xs mt-1">Kakinada, Andhra Pradesh</p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <div className="px-4 py-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/15">
                      <span className="text-[10px] text-indigo-300 block uppercase tracking-wider font-semibold">CGPA</span>
                      <span className="text-xl font-extrabold text-white">8.00<span className="text-sm text-slate-500 font-normal"> / 10</span></span>
                    </div>
                    <div className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[10px] text-slate-500 block uppercase tracking-wider font-semibold">Duration</span>
                      <span className="text-xl font-extrabold text-white">2020<span className="text-sm text-slate-500 font-normal"> – 2024</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-extrabold text-white">Certifications</h2>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="group glass-card rounded-xl p-4 flex items-center gap-4 cursor-default hover:border-indigo-500/15 transition-all duration-300"
                >
                  <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${cert.color} flex-shrink-0`} />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {cert.name}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{cert.issuer}</p>
                  </div>
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
