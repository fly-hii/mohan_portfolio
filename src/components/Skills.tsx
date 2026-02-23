import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, CheckCircle2, Wrench } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Languages',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      iconColor: 'text-blue-400',
      skills: ['JavaScript', 'Python', 'SQL', 'Java'],
    },
    {
      category: 'Frontend',
      icon: Layout,
      color: 'from-purple-500 to-pink-500',
      iconColor: 'text-purple-400',
      skills: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'from-emerald-500 to-teal-500',
      iconColor: 'text-emerald-400',
      skills: ['Node.js', 'Django', 'Spring Boot'],
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'from-orange-500 to-amber-500',
      iconColor: 'text-orange-400',
      skills: ['MongoDB', 'MySQL'],
    },
    {
      category: 'DevOps & Tools',
      icon: Wrench,
      color: 'from-rose-500 to-pink-500',
      iconColor: 'text-rose-400',
      skills: ['Docker', 'AWS', 'Jenkins', 'GitHub Actions', 'Git'],
    },
    {
      category: 'APIs & Testing',
      icon: CheckCircle2,
      color: 'from-cyan-500 to-blue-500',
      iconColor: 'text-cyan-400',
      skills: ['RESTful API', 'Postman', 'Performance Testing', 'Integration Testing'],
    },
  ];

  return (
    <section id="about" className="relative py-28 section-glow">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d18] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold text-indigo-400 uppercase tracking-[0.25em] mb-4 font-mono"
          >
            What I Work With
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-lg mx-auto"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group glass-card rounded-2xl p-6 hover:border-indigo-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-white">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/[0.06] text-slate-300 hover:bg-white/[0.08] hover:text-white hover:border-indigo-500/20 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
