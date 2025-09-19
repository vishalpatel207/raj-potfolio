// Dynamic Professional Images for Civil Engineering Portfolio
// Using high-quality professional images from reliable sources

// Civil Engineering Skills Icons - Using professional icon URLs
const skillIcons = {
  autocad: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/autocad/autocad-original.svg',
  solidworks: 'https://img.icons8.com/color/96/solidworks.png',
  sketchup: 'https://img.icons8.com/color/96/sketchup.png',
  revit: 'https://img.icons8.com/color/96/autodesk-revit.png',
  staad: 'https://img.icons8.com/fluency/96/structural-analysis.png',
  etabs: 'https://img.icons8.com/color/96/structural-engineering.png',
  ansys: 'https://img.icons8.com/color/96/ansys.png',
  sap2000: 'https://img.icons8.com/fluency/96/structural-analysis.png',
  matlab: 'https://img.icons8.com/fluency/96/matlab.png',
  plaxis: 'https://img.icons8.com/color/96/geological-analysis.png',
  hecras: 'https://img.icons8.com/fluency/96/water-analysis.png',
  safe: 'https://img.icons8.com/color/96/safety-collection-place.png',
  msproject: 'https://img.icons8.com/fluency/96/microsoft-project.png',
  primavera: 'https://img.icons8.com/color/96/project-management.png',
  bim360: 'https://img.icons8.com/color/96/autodesk-bim-360.png',
  navisworks: 'https://img.icons8.com/color/96/autodesk-navisworks.png',
  quantity: 'https://img.icons8.com/fluency/96/calculator.png',
  estimation: 'https://img.icons8.com/fluency/96/cost-estimate.png',
  planning: 'https://img.icons8.com/fluency/96/planning.png',
  quality: 'https://img.icons8.com/fluency/96/quality-audit.png',
  safety: 'https://img.icons8.com/fluency/96/hard-hat.png',
  contract: 'https://img.icons8.com/fluency/96/contract.png',
  leadership: 'https://img.icons8.com/fluency/96/leadership.png',
  client: 'https://img.icons8.com/fluency/96/client-management.png'
};

// Company Logos - Professional placeholder
const companyLogos = {
  raj_infrastructure: 'https://img.icons8.com/fluency/96/building.png',
  construction_dynamics: 'https://img.icons8.com/fluency/96/construction.png'
};

// Education Logos
const educationLogos = {
  gtu: 'https://img.icons8.com/fluency/96/university.png',
  school: 'https://img.icons8.com/fluency/96/school.png'
};

// Project Images - Specific high-quality civil engineering project visuals
const projectImages = {
  residential: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=building&auto=format&q=80',
  highway: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=road&auto=format&q=80',
  watertreatment: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=building&auto=format&q=80',
  // Fallback images
  residentialFallback: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format&q=80',
  highwayFallback: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format&q=80',
  waterFallback: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format&q=80'
};


export const SkillsInfo = [
  {
    title: 'Design & Drafting',
    skills: [
      { name: 'AutoCAD', logo: skillIcons.autocad },
      { name: 'SolidWorks', logo: skillIcons.solidworks },
      { name: 'SketchUp', logo: skillIcons.sketchup },
      { name: 'Revit', logo: skillIcons.revit },
      { name: 'STAAD Pro', logo: skillIcons.staad },
      { name: 'ETABS', logo: skillIcons.etabs },
    ],
  },
  {
    title: 'Analysis & Simulation',
    skills: [
      { name: 'ANSYS', logo: skillIcons.ansys },
      { name: 'SAP2000', logo: skillIcons.sap2000 },
      { name: 'MATLAB', logo: skillIcons.matlab },
      { name: 'PLAXIS', logo: skillIcons.plaxis },
      { name: 'HEC-RAS', logo: skillIcons.hecras },
      { name: 'SAFE', logo: skillIcons.safe },
    ],
  },
  {
    title: 'Construction Tech',
    skills: [
      { name: 'MS Project', logo: skillIcons.msproject },
      { name: 'Primavera P6', logo: skillIcons.primavera },
      { name: 'BIM 360', logo: skillIcons.bim360 },
      { name: 'Navisworks', logo: skillIcons.navisworks },
      { name: 'Quantity Surveying', logo: skillIcons.quantity },
      { name: 'Cost Estimation', logo: skillIcons.estimation },
    ],
  },
  {
    title: 'Project Management',
    skills: [
      { name: 'Site Planning', logo: skillIcons.planning },
      { name: 'Quality Control', logo: skillIcons.quality },
      { name: 'Safety Management', logo: skillIcons.safety },
      { name: 'Contract Management', logo: skillIcons.contract },
      { name: 'Team Leadership', logo: skillIcons.leadership },
      { name: 'Client Relations', logo: skillIcons.client },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: companyLogos.raj_infrastructure,
      role: "Civil Engineer",
      company: "RAJ Infrastructure Solutions",
      date: "June 2022 - Present",
      desc: "Leading structural design and analysis projects for residential and commercial buildings. Expert in AutoCAD drafting, STAAD Pro structural analysis, and construction site management. Successfully managed multiple projects from conception to completion, ensuring compliance with building codes and safety standards. Specialized in reinforced concrete design, foundation analysis, and earthquake-resistant structures. Collaborated with architects, contractors, and clients to deliver high-quality construction projects on time and within budget.",
      skills: [
        "AutoCAD",
        "STAAD Pro",
        "Structural Design",
        "Site Management",
        "Building Codes",
        "Project Planning",
        "Quality Control",
        "Safety Management",
        "Cost Estimation",
      ],
    },
    {
      id: 1,
      img: companyLogos.construction_dynamics,
      role: "Junior Civil Engineer",
      company: "Construction Dynamics Ltd",
      date: "January 2021 - May 2022",
      desc: "Worked on infrastructure development projects including road construction, drainage systems, and building foundations. Gained extensive experience in surveying, soil testing, and construction material quality control. Assisted senior engineers in structural calculations and design modifications. Supervised construction activities and ensured adherence to project specifications and timelines.",
      skills: [
        "Surveying",
        "Soil Testing",
        "Road Design",
        "Drainage Systems",
        "Material Testing",
        "Construction Supervision",
        "AutoCAD",
        "MS Project",
      ],
    },
    // {
    //   id: 1,
    //   img: agcLogo,
    //   role: "Fullstack Engineer",
    //   company: "Agumentik Group of Companies",
    //   date: "July 2023 - March 2024",
    //   desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    //   skills: [
    //     "ReactJS",
    //     "Redux",
    //     "JavaScript",
    //     "Tailwind CSS",
    //     "HTML",
    //     "CSS",
    //     "SQL",
    //   ],
    // },
    // {
    //   id: 2,
    //   img: newtonschoolLogo,
    //   role: "Frontend Intern",
    //   company: "Newton School",
    //   date: "September 2021 - August 2022",
    //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "Javascript",
    //     "Bootstrap",
    //     "Figma",
    //     "Material UI",
    //   ],
    // },
  ];
  
  export const education = [
    {
      id: 0,
      img: educationLogos.gtu,
      school: "Gujarat Technological University - Ahmedabad",
      date: "June 2018 - May 2022",
      grade: "8.85 CGPA",
      desc: "Completed Bachelor of Engineering in Civil Engineering with distinction. Specialized in structural engineering, construction management, and infrastructure development. Coursework included Reinforced Concrete Design, Steel Structures, Foundation Engineering, Highway Engineering, Water Resources Engineering, and Construction Project Management. Participated in industry internships, technical seminars, and practical site visits that provided hands-on experience in real-world civil engineering projects.",
      degree: "Bachelor of Engineering - Civil Engineering (B.E.)",
    },
    // {
    //   id: 1,
    //   img: bsaLogo,
    //   school: "BSA College, Mathura",
    //   date: "Sept 2018 - Aug 2021",
    //   grade: "73.2%",
    //   desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    //   degree: "Bachelor of Science - BSC (Computer Science)",
    // },
    // {
    //   id: 1,
    //   img: educationLogos.school,
    //   school: "Shayona Vidhya Mandir",
    //   date: "Apr 2021 - March 2022",
    //   grade: "65%",
    //   desc: "Completed Class 12 education at Shayona Vidhya Mandir under the CBSE board with a focus on Science stream, including subjects like Physics, Chemistry, Mathematics, and Computer Science. Built strong foundation in analytical thinking and problem-solving skills essential for engineering.",
    //   degree: "CBSE(XII) - Science",
    // },
    // {
    //   id: 2,
    //   img: educationLogos.school,
    //   school: "Shayona Vidhya Mandir",
    //   date: "Apr 2018 - March 2019",
    //   grade: "60%",
    //   desc: "Completed Class 10 education at Shayona Vidhya Mandir under the CBSE board. Gained a solid foundation in core subjects including Mathematics, Science, and developed interest in technology and problem-solving that led to pursuing engineering.",
    //   degree: "CBSE(X)",
    // },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Residential Complex Design",
      description:
        "Comprehensive structural design and analysis of a 15-story residential complex. Designed reinforced concrete structures, foundation systems, and seismic-resistant features using STAAD Pro and AutoCAD. The project included detailed architectural drawings, structural calculations, and construction supervision ensuring compliance with IS codes and earthquake-resistant design principles.",
      image: projectImages.residential,
      tags: ["STAAD Pro", "AutoCAD", "Structural Design", "Seismic Analysis", "IS Codes"],
      github: "#",
      webapp: "#",
    },
    {
      id: 1,
      title: "Highway Infrastructure Project",
      description:
        "Led the design and construction supervision of a 25km highway project including bridges, drainage systems, and traffic management. Utilized advanced surveying techniques, pavement design principles, and environmental impact assessment. Successfully completed project within budget and timeline while maintaining highest quality standards.",
      image: projectImages.highway,
      tags: ["Highway Design", "Bridge Engineering", "Surveying", "Pavement Design", "Project Management"],
      github: "#",
      webapp: "#",
    },
    {
      id: 2,
      title: "Water Treatment Plant Design",
      description:
        "Designed and supervised construction of municipal water treatment facility with capacity of 50 MLD. Project involved hydraulic design, process optimization, and environmental compliance. Implemented advanced filtration systems and automated control mechanisms for efficient water treatment operations.",
      image: projectImages.watertreatment,
      tags: ["Hydraulic Design", "Water Treatment", "Environmental Engineering", "Process Design", "AutoCAD"],
      github: "#",
      webapp: "#",
    },
    // {
    //   id: 2,
    //   title: "Movie Recommendation App",
    //   description:
    //     "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    //   image: movierecLogo,
    //   tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/codingmastr/Movie-Recommendation-App",
    //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
    // },
    // {
    //   id: 3,
    //   title: "Email Validator NPM Package",
    //   description:
    //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    //   image: npmLogo,
    //   tags: ["React JS", "Node.js", "NPM", "Validation"],
    //   github: "https://github.com/codingmastr/cmtk-email-validator",
    //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    // },
    // {
    //   id: 4,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  