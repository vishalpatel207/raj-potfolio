import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // API endpoints configuration for Civil Engineer
  const formEndpoints = [
    {
      name: "FormSubmit",
      url: "https://formsubmit.co/ajax/rajnayi502@gmail.com",
      config: {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `Civil Engineering Inquiry: ${formData.subject}`,
          message: formData.message,
          _captcha: "false",
          _template: "table"
        })
      }
    },
    {
      name: "Formspree",
      url: "https://formspree.io/f/raj-civil-eng",
      config: {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Civil Engineering Project: ${formData.subject}`,
          message: formData.message
        })
      }
    }
  ];

  const validateForm = () => {
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Please enter a valid email address", { theme: "dark" });
      return false;
    }
    if (formData.message.length < 10) {
      toast.error("Message should be at least 10 characters long", { theme: "dark" });
      return false;
    }
    return true;
  };

  const submitForm = async (endpoint) => {
    try {
      const response = await fetch(endpoint.url, endpoint.config);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error(`${endpoint.name} submission error:`, error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Try each endpoint until one succeeds
      for (const endpoint of formEndpoints) {
        try {
          const response = await fetch(endpoint.url, endpoint.config);
          // Show toast as soon as response is OK
          if (response.ok) {
            toast.success("Message sent successfully! ✅", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "dark",
            });
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: ''
            });
            setIsSubmitting(false);
            // Debug: Log the full response for troubleshooting
            console.log(`Response from ${endpoint.name}:`, response);
            response.text().then((responseBody) => {
              console.log(`Response body from ${endpoint.name}:`, responseBody);
              console.log("Check the browser console for the full API response if you do not receive an email.");
            });
            return; // Exit on success
          }
        } catch (error) {
          console.log(`Failed with ${endpoint.name}, trying next...`);
          continue; // Try next endpoint
        }
      }
      // If all endpoints failed
      throw new Error('All form submission methods failed');
    } catch (error) {
      console.error('Final submission error:', error);
      let errorMessage = "Failed to send message. Please try again later.";
      if (error.message.includes("Failed to fetch")) {
        errorMessage = "Network error. Please check your internet connection.";
      }
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="flex flex-col items-center justify-center py-8 sm:py-12 px-2 sm:px-4 md:px-8 lg:px-32 w-full overflow-x-hidden">
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 w-full px-2 sm:px-0">
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 mobile-title">
            GET IN TOUCH
          </h2>
          <div className="w-16 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed mobile-body">
            Ready to discuss your next civil engineering project? Let's build something amazing together!
          </p>
          
          {/* Professional badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
            <span className="bg-purple-600/20 border border-purple-400/30 text-purple-300 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium mobile-text-xs">
              🏢 Structural Design
            </span>
            <span className="bg-blue-600/20 border border-blue-400/30 text-blue-300 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium mobile-text-xs">
              🔧 Project Management
            </span>
            <span className="bg-green-600/20 border border-green-400/30 text-green-300 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium mobile-text-xs">
              🌍 Infrastructure
            </span>
          </div>
        </div>
      </div>

      {/* Contact Form - Enhanced Design */}
      <div className="mt-6 sm:mt-8 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl 
      p-3 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
        
        {/* Header with professional touch */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 mobile-subtitle">
            Let's Start Your Project
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base mobile-text-xs">
            Professional Civil Engineering Services
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="name" className="text-gray-300 text-xs sm:text-sm font-medium mobile-text-xs">Full Name *</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-800/50 backdrop-blur-sm text-white border border-gray-600 
                focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 
                transition-all duration-300 placeholder-gray-400 text-sm sm:text-base mobile-body"
              />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="email" className="text-gray-300 text-xs sm:text-sm font-medium mobile-text-xs">Email Address *</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-800/50 backdrop-blur-sm text-white border border-gray-600 
                focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 
                transition-all duration-300 placeholder-gray-400 text-sm sm:text-base mobile-body"
              />
            </div>
          </div>
          
          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="subject" className="text-gray-300 text-xs sm:text-sm font-medium mobile-text-xs">Project Type *</label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-800/50 backdrop-blur-sm text-white border border-gray-600 
              focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 
              transition-all duration-300 text-sm sm:text-base mobile-body"
            >
              <option value="">Select Project Type</option>
              <option value="Residential Building Design">Residential Building Design</option>
              <option value="Commercial Construction">Commercial Construction</option>
              <option value="Infrastructure Development">Infrastructure Development</option>
              <option value="Structural Analysis">Structural Analysis</option>
              <option value="Highway Engineering">Highway Engineering</option>
              <option value="Water Treatment Plant">Water Treatment Plant</option>
              <option value="General Consultation">General Consultation</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="message" className="text-gray-300 text-xs sm:text-sm font-medium mobile-text-xs">Project Details *</label>
            <textarea
              id="message"
              name="message"
              placeholder="Please describe your project requirements, timeline, and any specific needs..."
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-800/50 backdrop-blur-sm text-white border border-gray-600 
              focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 
              transition-all duration-300 placeholder-gray-400 resize-none text-sm sm:text-base mobile-body"
            />
          </div>
          <input type="hidden" name="_captcha" value="false" />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 
            hover:from-purple-500 hover:via-purple-600 hover:to-pink-500
            py-4 px-6 text-white font-bold rounded-xl transition-all duration-300 
            transform hover:scale-[1.02] hover:-translate-y-1
            shadow-[0_0_20px_rgba(130,69,236,0.3)] hover:shadow-[0_0_30px_rgba(130,69,236,0.5)]
            border border-purple-400/30 hover:border-purple-300/50
            ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'} 
            flex items-center justify-center space-x-3 text-base sm:text-lg`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>Send Project Inquiry</span>
              </>
            )}
          </button>
        </form>
        
        {/* Contact Information */}
        <div className="mt-8 pt-6 border-t border-gray-700/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-lg">📧 Direct Contact</h4>
              <div className="space-y-2">
                <a 
                  href="mailto:rajnayi502@gmail.com" 
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 
                  text-sm sm:text-base font-medium hover:underline block"
                >
                  rajnayi502@gmail.com
                </a>
                <a 
                  href="tel:+917823649892" 
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 
                  text-sm sm:text-base font-medium hover:underline block"
                >
                  +91 78236 49892
                </a>
                <a 
                  href="http://www.linkedin.com/in/rajnayi18" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 
                  text-sm sm:text-base font-medium hover:underline block flex items-center space-x-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-lg">📅 Availability</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Response within 24 hours</p>
                <p className="text-green-400 text-xs font-medium">• Available for new projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;