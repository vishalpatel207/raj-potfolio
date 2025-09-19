import React, { useState, useRef, useEffect } from "react";
import { projects } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
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

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section ref={sectionRef} id="work" className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-sans 
    bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          CIVIL ENGINEERING PROJECTS
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
        <p className="text-gray-300 text-base sm:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
          Showcase of major civil engineering projects demonstrating expertise in structural design, 
          infrastructure development, and construction management
        </p>
      </div>

      {/* Projects Grid - Enhanced Responsive Design */}
      <div className="grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group bg-gray-900/80 backdrop-blur-md border border-gray-700/50 
            hover:border-purple-500/50 rounded-3xl shadow-2xl overflow-hidden cursor-pointer 
            hover:shadow-[0_0_30px_rgba(130,69,236,0.3)] hover:-translate-y-2 
            transition-all duration-300 transform hover:scale-[1.02]"
          >
            <div className="p-4 sm:p-6">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to specific project type images
                    if (project.title.toLowerCase().includes('residential')) {
                      e.target.src = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&auto=format&q=80';
                    } else if (project.title.toLowerCase().includes('highway')) {
                      e.target.src = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&auto=format&q=80';
                    } else if (project.title.toLowerCase().includes('water')) {
                      e.target.src = 'https://images.unsplash.com/photo-1581092160562-40aa4082da6d?w=600&h=400&fit=crop&auto=format&q=80';
                    } else {
                      e.target.src = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop&auto=format&q=80';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-600/20 border border-purple-400/30 text-purple-300 
                      text-xs font-medium rounded-full px-3 py-1 hover:bg-purple-600/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-gray-500 text-xs font-medium px-2 py-1">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
                
                {/* View More Button */}
                <div className="pt-2">
                  <span className="text-purple-400 text-sm font-medium group-hover:text-purple-300 
                  transition-colors duration-300 flex items-center space-x-2">
                    <span>View Details</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                         fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6">
          <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl 
          border border-gray-700/50 rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative">
            
            {/* Close Button */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={handleCloseModal}
                className="w-10 h-10 bg-gray-800/80 hover:bg-gray-700/80 rounded-full 
                flex items-center justify-center text-white hover:text-purple-300 
                transition-all duration-300 backdrop-blur-sm border border-gray-600/50"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col lg:flex-row overflow-y-auto max-h-[90vh]">
              {/* Image Section */}
              <div className="lg:w-1/2 p-6">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                    onError={(e) => {
                      // Fallback to specific project type images
                      if (selectedProject.title.toLowerCase().includes('residential')) {
                        e.target.src = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&auto=format&q=80';
                      } else if (selectedProject.title.toLowerCase().includes('highway')) {
                        e.target.src = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&auto=format&q=80';
                      } else if (selectedProject.title.toLowerCase().includes('water')) {
                        e.target.src = 'https://images.unsplash.com/photo-1581092160562-40aa4082da6d?w=800&h=600&fit=crop&auto=format&q=80';
                      } else {
                        e.target.src = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop&auto=format&q=80';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="lg:w-1/2 p-6 lg:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
                
                {/* Technologies Used */}
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-purple-600/20 border border-purple-400/30 text-purple-300 
                        text-sm font-medium rounded-full px-4 py-2 hover:bg-purple-600/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={selectedProject.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600/50 
                    text-gray-300 hover:text-white px-6 py-3 rounded-xl text-center font-semibold 
                    transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>View Details</span>
                  </a>
                  <a
                    href={selectedProject.webapp || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 
                    hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-xl 
                    text-center font-semibold transition-all duration-300 hover:scale-105 
                    shadow-[0_0_20px_rgba(130,69,236,0.3)] hover:shadow-[0_0_30px_rgba(130,69,236,0.5)]
                    flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>
                    <span>Live Project</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default Work;
