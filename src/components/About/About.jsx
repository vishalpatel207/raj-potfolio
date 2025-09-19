import { useRef, useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Using the profile image from public folder
const profileImage = "/rajj.jpg";
const fallbackImage = "https://via.placeholder.com/400x400/6366f1/ffffff?text=Raj+Patel";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
      id="about"
      className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 font-sans 
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0 space-y-3 sm:space-y-4 md:space-y-6 px-1 sm:px-2">
          {/* Greeting */}
          <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight 
          bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Raj Patel
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-white leading-tight">
            <span className="text-gray-300">I am a </span>
            <ReactTypingEffect
              text={["Civil Engineer", "Structural Designer", "Project Manager"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-1 sm:px-2">
            I am a dedicated Civil Engineer with over 3 years of experience in
            structural design, construction management, and infrastructure development. 
            I specialize in creating efficient and sustainable engineering solutions 
            using AutoCAD, STAAD Pro, and modern construction technologies. My expertise 
            includes residential and commercial building design, highway infrastructure, 
            and project management. I'm passionate about delivering high-quality construction 
            projects that meet safety standards and exceed client expectations.
          </p>
          {/* Resume Button - Fantastic Design */}
          <div className="mt-4 sm:mt-6 md:mt-8 px-1 sm:px-2">
            <a
              href="/RAJ_CV_2025_01.pdf"
              download="Raj_Patel_Civil_Engineer_CV_2025.pdf"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto 
              bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 
              hover:from-purple-500 hover:via-purple-600 hover:to-pink-500
              text-white font-bold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-xl sm:rounded-2xl
              transform transition-all duration-300 hover:scale-105 hover:-translate-y-1
              shadow-[0_0_20px_rgba(130,69,236,0.4)] hover:shadow-[0_0_30px_rgba(130,69,236,0.6)]
              border border-purple-400/30 hover:border-purple-300/50
              text-xs sm:text-sm md:text-base lg:text-lg tracking-wide"
              aria-label="Download Raj Patel Civil Engineer CV"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative flex items-center space-x-2 sm:space-x-3">
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="font-bold">DOWNLOAD CV</span>
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/10 to-transparent 
              transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
            </a>
            
            {/* Additional info */}
            <p className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-3 text-center lg:text-left">
              📄 Professional Civil Engineer Resume • Updated 2025
            </p>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-2 sm:px-4">
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-2xl sm:blur-3xl transform scale-125 sm:scale-150"></div>
            
            <Tilt
              className="relative w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 
              border-2 sm:border-4 border-gradient-to-r from-purple-600 to-pink-600 rounded-full p-0.5 sm:p-1 bg-gradient-to-r from-purple-600 to-pink-600"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="w-full h-full bg-gray-900 rounded-full p-1 sm:p-2">
                <img
                  src={profileImage}
                  alt="Raj Patel Civil Engineer profile"
                  className="w-full h-full rounded-full object-cover shadow-2xl"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    console.log('Image failed to load, using fallback');
                    if (!e.target.dataset.fallbackUsed) {
                      e.target.dataset.fallbackUsed = 'true';
                      e.target.src = fallbackImage;
                    }
                  }}
                  onLoad={() => {
                    console.log('Profile image loaded successfully');
                  }}
                />
              </div>
            </Tilt>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;