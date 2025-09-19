// src/components/Skills/Skills.jsx
import React, { useRef, useEffect } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);
  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-sans bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="relative z-10">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium max-w-3xl mx-auto">
          Professional expertise in civil engineering tools, analysis software, and project management technologies
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 py-10 max-w-7xl mx-auto">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900/80 backdrop-blur-md px-6 sm:px-8 py-8 rounded-2xl border border-gray-700 hover:border-purple-500/50
            shadow-[0_0_20px_1px_rgba(130,69,236,0.2)] hover:shadow-[0_0_30px_5px_rgba(130,69,236,0.3)] transition-all duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6 text-center border-b border-gray-700 pb-3">
              {category.title}
            </h3>

            {/* Skill Items - Responsive Grid */}
            <Tilt
              key={category.title}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 
                    bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-purple-400/50 
                    rounded-xl py-3 px-2 sm:px-3 text-center transition-all duration-300 group"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = 'https://img.icons8.com/fluency/48/code.png';
                      }}
                    />
                    <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}

export default Skills;
