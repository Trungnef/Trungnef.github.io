import { useEffect } from "react";
import {
  Linkedin,
  Github,
  Mail,
  Phone,
  Globe,
  ExternalLink,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SOCIAL_LINKS } from "../data/profile";

const iconMap = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Email: Mail,
  Phone: Phone,
  "Portfolio Website": Globe,
};

const SocialLinks = () => {
  useEffect(() => {
    AOS.init({
      offset: 10,
    });
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3
        className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
        data-aos="fade-down"
      >
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SOCIAL_LINKS.map((link, index) => {
          const Icon = iconMap[link.name] || Globe;

          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-[#6366f1] to-[#a855f7]" />
              <div className="relative flex items-center justify-center rounded-lg bg-white/10 p-2">
                <Icon className="w-5 h-5 text-white transition-all duration-500 group-hover:scale-110" />
              </div>
              <div className="relative flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
                <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {link.label}
                </span>
                <span className="text-xs text-gray-500 truncate">{link.value}</span>
              </div>
              <ExternalLink className="relative w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
