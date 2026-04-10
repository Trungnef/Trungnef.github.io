import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Award, BookOpen, Briefcase, Code2 } from "lucide-react";
import {
  EXPERIENCE_ITEMS,
  RESEARCH_ITEMS,
  PUBLICATIONS,
  HONORS_AND_AWARDS,
  CERTIFICATIONS,
  SKILL_CATEGORIES,
} from "../data/profile";

const tabs = [
  { key: "experience", label: "Experience", icon: Briefcase },
  { key: "research", label: "Research", icon: BookOpen },
  { key: "awards", label: "Awards", icon: Award },
  { key: "skills", label: "Skills", icon: Code2 },
];

const SectionCard = ({ title, subtitle, meta, items }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl h-full">
    <div className="mb-4 space-y-2">
      <p className="text-xs uppercase tracking-[0.2em] text-purple-300">{meta}</p>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
    </div>
    <ul className="space-y-3 text-sm text-gray-300">
      {items.map((item) => (
        <li key={item} className="rounded-xl border border-white/5 bg-black/20 px-4 py-3">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function ProfileHighlights() {
  const [activeTab, setActiveTab] = useState("experience");

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const renderContent = () => {
    if (activeTab === "experience") {
      return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {EXPERIENCE_ITEMS.map((item, index) => (
            <div
              key={`${item.company}-${item.project}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
            >
              <SectionCard
                title={item.project}
                subtitle={`${item.role} · ${item.company} · ${item.location}`}
                meta={item.period}
                items={item.highlights}
              />
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === "research") {
      return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {RESEARCH_ITEMS.map((item, index) => (
            <div
              key={item.title}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
            >
              <SectionCard
                title={item.title}
                subtitle={`${item.type} · ${item.organization} · ${item.location}`}
                meta={item.period}
                items={item.highlights}
              />
            </div>
          ))}
          {PUBLICATIONS.map((item) => (
            <div key={item.title} data-aos="fade-up" data-aos-duration="1000">
              <SectionCard
                title={item.title}
                subtitle={item.authors}
                meta={`${item.year} · ${item.venue}`}
                items={item.highlights}
              />
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === "awards") {
      return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {HONORS_AND_AWARDS.map((item, index) => (
            <div
              key={`${item.title}-${item.period}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
            >
              <SectionCard
                title={item.title}
                subtitle={item.issuer}
                meta={item.period}
                items={[`${item.title} - ${item.issuer}`]}
              />
            </div>
          ))}
          <div data-aos="fade-up" data-aos-duration="1000">
            <SectionCard
              title="Certifications"
              subtitle="Language and academic credentials listed in the CV"
              meta="Selected Credentials"
              items={CERTIFICATIONS.map(
                (item) => `${item.title} - ${item.issuer} (${item.period})`
              )}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((item, index) => (
          <div
            key={item.title}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-duration="1000"
          >
            <SectionCard
              title={item.title}
              subtitle={item.subtitle || "Core capability"}
              meta="Technical Skill"
              items={item.items || [item.description]}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Profile Highlights
        </h2>
        <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base mt-2">
          CV-aligned experience, research, awards, and technical skills with the latest
          Aimesoft work now reflected in the portfolio.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-3 md:p-4 backdrop-blur-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-2xl px-4 py-4 text-sm font-medium transition-all duration-300 border ${
                  isActive
                    ? "border-purple-400/40 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 text-white"
                    : "border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/20"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="pb-4">{renderContent()}</div>
      </div>
    </div>
  );
}

