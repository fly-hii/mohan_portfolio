import { motion } from 'framer-motion';
import { ExternalLink, Cloud, Users, Play, Scale, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Provixion',
      description: 'Enterprise cloud infrastructure automation platform. Deploy and manage AWS resources instantly with Terraform automation.',
      tech: ['React', 'Terraform', 'AWS', 'Node.js', 'DevOps'],
      link: 'https://provixion.flyhii.in',
      icon: Cloud,
      gradient: 'from-sky-500 to-blue-600',
      glowColor: 'rgba(56, 189, 248, 0.15)',
    },
    {
      title: 'Spreadb',
      description: "India's leading influencer marketing platform connecting brands with authentic influencers. Manage campaigns and grow your reach.",
      tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'REST API'],
      link: 'https://spreadb.flyhii.in',
      icon: Users,
      gradient: 'from-purple-500 to-indigo-600',
      glowColor: 'rgba(168, 85, 247, 0.15)',
    },
    {
      title: 'Playhii',
      description: 'A real-time watch-together platform that lets users enjoy videos and content in sync with friends — no matter where they are.',
      tech: ['React', 'WebSocket', 'Node.js', 'Streaming API'],
      link: 'https://playhii.flyhii.in',
      icon: Play,
      gradient: 'from-pink-500 to-rose-600',
      glowColor: 'rgba(244, 114, 182, 0.15)',
    },
    {
      title: 'Justice Connect',
      description: 'A legal-tech platform bridging citizens and legal professionals through smart case management and consultation tools.',
      tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
      link: '',
      icon: Scale,
      gradient: 'from-emerald-500 to-teal-600',
      glowColor: 'rgba(52, 211, 153, 0.15)',
    },
  ];

  return (
    <section id="projects" className="relative py-28 section-glow">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d18] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold text-indigo-400 uppercase tracking-[0.25em] mb-4 font-mono"
          >
            What I've Built
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
          >
            Our Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-lg mx-auto"
          >
            Innovative digital products built to solve real-world problems
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative glass-card rounded-2xl overflow-hidden transition-all duration-500"
                style={{
                  boxShadow: `0 0 0px ${project.glowColor}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${project.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0px ${project.glowColor}`;
                }}
              >
                {/* Top gradient line */}
                <div className={`h-[2px] w-full bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

                <div className="p-6">
                  <div className="flex justify-between items-start mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all duration-300"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live
                        <ArrowUpRight className="w-3 h-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[10px] font-semibold rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-400 uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
