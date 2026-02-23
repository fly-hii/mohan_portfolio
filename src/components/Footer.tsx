import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.04] bg-[#070710]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="text-lg font-bold text-white">
              MG<span className="text-indigo-400 font-light">.dev</span>
            </a>
            <p className="text-xs text-slate-600 flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> by Mohan Ganta
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500">
            {['Home', 'Skills', 'Experience', 'Products', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item === 'Skills' ? 'about' : item === 'Products' ? 'projects' : item.toLowerCase()}`}
                className="hover:text-indigo-400 transition-colors duration-300 uppercase tracking-wider font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Socials & Scroll to top */}
          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/Mohan-Ganta', icon: Github },
              { href: 'https://www.linkedin.com/in/mohan-ganta/', icon: Linkedin },
              { href: 'mailto:buddy@flyhii.in', icon: Mail },
            ].map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-indigo-400 hover:border-indigo-500/20 transition-all duration-300"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 hover:bg-indigo-500/20 transition-all duration-300 ml-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-[11px] text-slate-600 tracking-wide">
            © {new Date().getFullYear()} Mohan Ganta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
