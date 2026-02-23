import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Flyhii Solutions Private Limited',
      role: 'Chief Executive Officer',
      period: 'Dec 2025 – Present',
      duration: '3 mos',
      location: 'Hyderabad, Telangana, India · On-site',
      type: 'Full-time',
      accentColor: 'from-indigo-500 to-purple-500',
      dotColor: 'bg-indigo-500',
      highlights: [
        'Leading the overall vision, strategy, and growth of Flyhii Solutions.',
        'Overseeing product development and engineering teams to deliver innovative digital solutions.',
        'Driving business development, partnerships, and client relationships.',
        'Building and scaling a high-performing team focused on cutting-edge technology products.',
      ],
      skills: [],
    },
    {
      company: 'FURY AI',
      role: 'Founding Engineer',
      period: 'Aug 2025 – Dec 2025',
      duration: '5 mos',
      location: 'Bengaluru, Karnataka, India · Remote',
      type: 'Full-time',
      accentColor: 'from-purple-500 to-pink-500',
      dotColor: 'bg-purple-500',
      highlights: [
        'Early-stage founding engineer contributing to core product architecture and development.',
        'Designed and built scalable AI-powered systems from the ground up.',
        'Collaborated closely with founders on technical strategy and product roadmap.',
        'Established engineering best practices and development workflows.',
      ],
      skills: [],
    },
    {
      company: 'Incrivelsoft Private Limited',
      role: 'Software Engineer',
      period: 'Nov 2023 – Jun 2025',
      duration: '1 yr 8 mos',
      location: 'Hyderabad, Telangana, India · Hybrid',
      type: 'Full-time',
      accentColor: 'from-blue-500 to-cyan-500',
      dotColor: 'bg-blue-500',
      highlights: [
        'Spearheading the development and enhancement of Lifeline\'s digital platform, ensuring seamless user experience and robust technical infrastructure.',
        'Collaborating with multidisciplinary teams to conceptualize, design, and implement innovative features aligned with healthcare industry trends.',
        'Conducting thorough testing, debugging, and performance optimization to uphold reliability, security, and scalability standards.',
        'Analyzing user feedback and data insights to drive continuous improvement of application development processes.',
      ],
      skills: ['Node.js', 'SQL', 'AWS', 'React.js', 'Full-Stack Development'],
    },
    {
      company: 'Vjtha Learning',
      role: 'Lead Full Stack Developer',
      period: 'Aug 2022 – Nov 2023',
      duration: '1 yr 4 mos',
      location: 'India',
      type: 'Full-time',
      accentColor: 'from-emerald-500 to-teal-500',
      dotColor: 'bg-emerald-500',
      highlights: [
        'Developed visually appealing, intuitive, and responsive user interfaces using HTML, CSS, and JavaScript.',
        'Built and maintained high-performance, scalable, and secure web applications.',
        'Developed RESTful APIs and integrated third-party services to enhance application functionality.',
        'Designed and implemented efficient database schemas with optimized queries.',
      ],
      skills: ['SQL', 'AWS', 'Django', 'MERN Stack', 'Full-Stack Development', 'JavaScript'],
    },
    {
      company: 'Vjtha Learning',
      role: 'Full Stack Developer Intern',
      period: 'Dec 2021 – Aug 2022',
      duration: '9 mos',
      location: 'Remote',
      type: 'Full-time',
      accentColor: 'from-amber-500 to-orange-500',
      dotColor: 'bg-amber-500',
      highlights: [
        'Gained hands-on experience in full-stack web development, contributing to real-world projects.',
        'Developed and maintained web applications using modern JavaScript frameworks and Node.js.',
        'Collaborated with senior developers to learn industry best practices and coding standards.',
      ],
      skills: ['Node.js', 'Full-Stack Development'],
    },
  ];

  return (
    <section id="experience" className="relative py-28 section-glow">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0c0c16] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold text-indigo-400 uppercase tracking-[0.25em] mb-4 font-mono"
          >
            Career Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white"
          >
            Professional Experience
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="relative pl-8 md:pl-10 group"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1 top-1 w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full ${exp.dotColor} shadow-[0_0_12px_rgba(99,102,241,0.3)] border-[3px] border-[#0a0a0f] z-10 group-hover:scale-125 transition-transform duration-300`} />

                <div className="glass-card rounded-2xl p-6 hover:border-indigo-500/15 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.05)]">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <div className="flex items-center gap-1.5 text-sm text-indigo-400 font-medium">
                          <Briefcase className="w-3.5 h-3.5" />
                          <span>{exp.company}</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 font-semibold uppercase tracking-wider">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 text-xs text-slate-500 shrink-0">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                        <span className="px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-400 text-[10px] font-medium">
                          {exp.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-4">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-slate-400 text-sm flex items-start gap-2.5 leading-relaxed">
                        <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${exp.accentColor} mt-2 flex-shrink-0`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  {exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.04]">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 text-[10px] font-semibold rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-400 uppercase tracking-wider"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
