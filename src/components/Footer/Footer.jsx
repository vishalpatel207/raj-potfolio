import React, { useRef, useEffect } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
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

  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer ref={sectionRef} id="footer" className="text-white py-6 px-2 sm:px-4 md:px-8 lg:px-20 w-full">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-purple-500">Vishal Patel</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center gap-x-2 gap-y-1 sm:gap-x-4 sm:gap-y-2 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-xs sm:text-sm md:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=100030068991847"},
            { icon: <FaTwitter />, link: "https://x.com/PatelVishal3150" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/vishal-patel-065610250/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/accounts/password/reset/" },
            // { icon: <FaYoutube />, link: "https://www.youtube.com/codingmasteryt" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-6">
          © 2025 Vishal Patel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
