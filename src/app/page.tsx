"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TypingText from "@/app/TypingText";
import { Image } from "@/app/components/ui/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <main className="bg-[#000021] text-white font-poppins scroll-smooth">
      {/* Header */}
      <header className="bg-[#12123e] h-[90px] flex justify-around items-center relative">
        <div
          className="hamburger invert block md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <Image src="/hamburger.svg" alt="menu" className="w-8 h-8" width={32} height={32}/>
        </div>
        <div className="text-2xl font-semibold">SAM&#39;S Portfolio</div>
        <div className="right hidden md:flex">
          <ul className="flex space-x-6">
            {["Home", "About", "Experience", "Projects", "Certifications", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-[#7676d6]">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobilenav md:hidden fixed top-0 left-0 h-screen w-[70vw] max-w-[300px] bg-[#12123e] rounded-r-2xl shadow-lg z-50 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mobileright relative flex flex-col h-full">
            <div
              className="close invert absolute top-4 right-4 cursor-pointer"
              onClick={toggleMenu}
            >
              <Image src="/close.svg" alt="close" className="w-6 h-6" width={24} height={24}/>
            </div>
            <ul className="flex flex-col justify-center items-center h-full space-y-6 text-center mt-16">
              {["Home", "About", "Experience", "Projects", "Certifications", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} onClick={toggleMenu} className="hover:text-[#7676d6] text-xl">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="flex flex-col md:flex-row justify-between items-center my-20 px-8 md:px-20 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="leftsection text-center md:text-left flex flex-col items-center md:items-start space-y-4"
        >
          <span className="topele text-[#19d090] text-lg md:text-xl">Hello, I&#39;m</span>
          <span className="purple text-white text-3xl md:text-5xl font-bold">Sampanna Shetty</span>
          <TypingText />

          <div className="button-container flex gap-4 mt-4">
            <Link
              href="/sampanna.pdf"
              download
              className="bg-purple-800 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition duration-300"
            >
              Download Resume
            </Link>
            <button
              className="border-2 border-purple-800 hover:bg-purple-600 hover:text-white py-2 px-4 rounded-lg transition duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </button>
          </div>

          <div className="social-container flex gap-4 mt-4">
            <a href="https://github.com/SAMSHETTY0806" target="_blank" className="hover:bg-gray-800 p-2 rounded-lg transition duration-300"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/sampanna-shetty-0299b2287/" target="_blank" className="hover:bg-blue-700 p-2 rounded-lg transition duration-300"><i className="fab fa-linkedin"></i></a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Image src="/images/sams.jpg" alt="Sampanna Shetty" className="w-full max-w-[350px] rounded-2xl" width={350} height={350}/>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section id="about" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-[80vw] mx-auto py-12">
        <h2 className="text-center text-[#ae8cce] text-3xl mb-8">About Me</h2>
        <p className="text-gray-400 text-center max-w-[800px] mx-auto mb-6">
          I’m an <span className="text-[#19d090]">AI and ML Engineer</span> with a passion for blending intelligent systems and web technologies to solve real-world problems.  
          Beyond coding, I enjoy working in leadership roles, event management, and team collaboration.
        </p>

        {/* Education */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-[#1a1a40] border border-white p-8 rounded-3xl text-center w-[300px] hover:scale-105 transition">
            <h3 className="text-xl mb-2"><i className="fas fa-book"></i><br/>Education</h3>
            <p className="text-[#cc93cc]">B.Tech in Artificial Intelligence and Machine Learning, NMAMIT</p>
          </div>
          <div className="bg-[#1a1a40] border border-white p-8 rounded-3xl text-center w-[300px] hover:scale-105 transition">
            <h3 className="text-xl mb-2"><i className="fas fa-cogs"></i><br/>Core Interests</h3>
            <p className="text-[#cc93cc]">AI Systems • ML Models • Web Dev • Data Engineering</p>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section id="experience" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-[80vw] mx-auto py-12">
        <h2 className="text-center text-[#ae8cce] text-3xl mb-8">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Branch Captain", org: "AIML Department", period: "Aug 2025 – Present", skills: "Leadership · Decision-Making · Delegation" },
            { title: "Manager Operations", org: "Finite Loop Club", period: "Jun 2025 – Present", skills: "Operations · Time Management · Coordination" },
            { title: "Executive Committee Member", org: "CSI NMAMIT", period: "Aug 2024 – Present", skills: "Team Collaboration · Planning" },
            { title: "Student Organiser", org: "Hackfest'26", period: "Aug 2025 – Present", skills: "Team Collaboration · Planning" },
            { title: "Student Organiser", org: "IC-AISIS", period: "Oct 2025 – Present", skills: "Team Collaboration · Planning" },
            { title: "Student Organiser", org: "AInnovation 2025", period: "Sep 2025 – Oct 2025", skills: "Event Management · Team Collaboration · Problem Solving" },
            { title: "Finance Analyst", org: "AeroClub Nitte", period: "May 2024 – Aug 2025", skills: "Financial Analysis · Reporting" },
            { title: "Core Member", org: "AeroClub Nitte", period: "Jan 2024 – Aug 2025", skills: "Team Operations · Management" },
            { title: "Operations Team", org: "Hackfest'25", period: "Jan 2025 – Jun 2025", skills: "Event Planning · Organization" },
            { title: "Event Coordinator", org: "AIML Dept", period: "Aug 2024 – May 2025", skills: "Event Management" },
            { title: "Event Coordinator", org: "Incridea NMAMIT", period: "Dec 2024 – Feb 2025", skills: "Communication · Teamwork" },
          ].map((exp) => (
            <div key={exp.title} className="bg-[#1a1a40] border border-gray-500 p-6 rounded-2xl hover:scale-105 transition duration-300">
              <h3 className="text-xl text-[#19d090] mb-2">{exp.title}</h3>
              <p className="text-gray-300">{exp.org}</p>
              <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
              <p className="text-gray-400 text-sm">{exp.skills}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
<motion.section
  id="projects"
  className="max-w-[80vw] mx-auto py-12"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  <h2 className="text-center text-[#ae8cce] text-3xl mb-8">
    My <span className="text-green-500">Projects</span>
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* 1) Child Health Prediction */}
    <div className="bg-[#2a3b4e] p-4 rounded-xl text-center shadow-lg hover:scale-105 transition">
      <Image src="/images/prediction.jpg" alt="Child Health Prediction" className="w-full rounded-lg" width={300} height={200}/>
      <h3 className="font-bold mt-3">Child Health Prediction</h3>
      <p className="text-gray-400 text-sm mt-1">
        Real-time ML project in collaboration with KS Hegde Medical Academy, evaluating feasibility of ML algorithms on neonatal species.
      </p>
      <div className="flex justify-center gap-2 mt-2">
        <a href="https://github.com/SAMSHETTY0806/machine_learning_project.git" target="_blank" className="bg-blue-600 hover:bg-blue-800 text-white py-1 px-3 rounded">GitHub</a>
      </div>
    </div>

    {/* 2) AeroClub Website */}
    <div className="bg-[#2a3b4e] p-4 rounded-xl text-center shadow-lg hover:scale-105 transition">
      <Image src="/images/aeroclub.jpeg" alt="AeroClub Website" className="w-full rounded-lg" width={300} height={200}/>
      <h3 className="font-bold mt-3">AeroClub Website</h3>
      <p className="text-gray-400 text-sm mt-1">
        Designed & Developed project for Aeroclub Nitte; fully responsive website for club management and events.
      </p>
      <div className="flex justify-center gap-2 mt-2">
        <a href="https://www.aeroclubnitte.com/" target="_blank" className="bg-blue-600 hover:bg-blue-800 text-white py-1 px-3 rounded">Website</a>
      </div>
    </div>

    {/* 3) Emotion Detection */}
    <div className="bg-[#2a3b4e] p-4 rounded-xl text-center shadow-lg hover:scale-105 transition">
      <Image src="/images/emotion_detection.png" alt="Emotion Detection" className="w-full rounded-lg" width={300} height={200}/>
      <h3 className="font-bold mt-3">Emotion Detection</h3>
      <p className="text-gray-400 text-sm mt-1">
        Python-based ML project detecting emotions using facial expressions from images or videos.
      </p>
      <div className="flex justify-center gap-2 mt-2">
        <a href="https://github.com/SAMSHETTY0806/ML_DBMS_APP.git" target="_blank" className="bg-blue-600 hover:bg-blue-800 text-white py-1 px-3 rounded">GitHub</a>
      </div>
    </div>

    {/* 4) Java Mini Projects */}
    <div className="bg-[#2a3b4e] p-4 rounded-xl text-center shadow-lg hover:scale-105 transition">
      <Image src="/images/java_game.jpg" alt="Java Mini Projects" className="w-full rounded-lg" width={300} height={200}/>
      <h3 className="font-bold mt-3">Java Mini Projects</h3>
      <p className="text-gray-400 text-sm mt-1">
        Collection of Java mini-games including Snake Game, Rock-Paper-Scissors, Flappy Bird, and Tic-Tac-Toe.
      </p>
      <div className="flex justify-center gap-2 mt-2">
        <a href="https://github.com/SAMSHETTY0806/miniproject.git" target="_blank" className="bg-blue-600 hover:bg-blue-800 text-white py-1 px-3 rounded">GitHub</a>
      </div>
    </div>

    {/* 5) Weather App */}
    <div className="bg-[#2a3b4e] p-4 rounded-xl text-center shadow-lg hover:scale-105 transition">
      <Image src="/images/weather.jpg" alt="Weather App" className="w-full rounded-lg" width={300} height={200}/>
      <h3 className="font-bold mt-3">Weather App</h3>
      <p className="text-gray-400 text-sm mt-1">
        Responsive web application fetching real-time weather data using APIs.
      </p>
      <div className="flex justify-center gap-2 mt-2">
        <a href="https://samshetty0806.github.io/WEATHER-APP/" target="_blank" className="bg-blue-600 hover:bg-blue-800 text-white py-1 px-3 rounded">Website</a>
      </div>
    </div>

  </div>
</motion.section>
{/* Tech Stack Section */}
      <motion.section
        className="tech-stack text-center py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-green-500 text-xl mb-2 subtitle">Checkout My</h2>
        <h1 className="text-4xl font-bold mb-6 title">Tech Ecosystem</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-[800px] mx-auto">
          {["React","Tailwindcss","Firebase","Node.js","Python","Scikit","Express","Flask","Git","GitHub","App-script","Unix-Shell","TensorFlow","NLP","CV","MongoDB","PostgreSQL","PyTorch","SQL","Java","C/C++","Python"].map((tech, idx) => (
            <div key={`${tech}-${idx}`} className="stack border-2 border-green-500 p-2 rounded-lg hover:bg-green-500 hover:text-[#1a202c] transition cursor-pointer">{tech}</div>
          ))}
        </div>
      </motion.section>


      {/* Certifications Section */}
<motion.section
  id="certifications"
  className="certifications-section max-w-[80vw] mx-auto py-12"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  <h2 className="text-center text-[#ae8cce] text-3xl mb-8">Licenses & Certifications</h2>
  <p className="text-center text-gray-400 mb-8">
    Here are some of my major certifications in AI, Cybersecurity, Web Development, and Professional Skills.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {[
      {
        title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
        issuer: "Oracle",
        date: "Oct 2025",
        skills: "LLMs, RAG Chatbots, Oracle Cloud",
        logo: "/images/oracle.jpeg"
      },
      {
        title: "AI for Entrepreneurship",
        issuer: "Intel Corporation",
        date: "Mar 2025",
        skills: "AI for Business, Product Development",
        logo: "/images/intel.jpeg"
      },
      {
        title: "Google AI Essentials",
        issuer: "Google",
        date: "Jun 2024",
        skills: "Prompt Engineering, Generative AI",
        logo: "/images/google.jpeg"
      },
      {
        title: "Prompt Design in Vertex AI Skill Badge",
        issuer: "Google",
        date: "Jun 2024",
        skills: "Prompt Design, Critical Thinking",
        logo: "/images/google.jpeg"
      },
      {
        title: "Google Cybersecurity Certificate",
        issuer: "Google/Coursera",
        date: "May 2024",
        skills: "Threat Detection, SIEM, SQL, Linux",
        logo: "/images/google.jpeg"
      },
      {
        title: "Assets, Threats, and Vulnerabilities",
        issuer: "Google",
        date: "Mar 2024",
        skills: "Threat Management",
        logo: "/images/google.jpeg"
      },
      {
        title: "Automate Cybersecurity Tasks with Python",
        issuer: "Google",
        date: "Mar 2024",
        skills: "Python, Automation",
        logo: "/images/google.jpeg"
      },
      {
        title: "Foundations of Cybersecurity",
        issuer: "Google",
        date: "Feb 2024",
        skills: "Cybersecurity Fundamentals",
        logo: "/images/google.jpeg"
      },
      {
        title: "Bharat Intern – Web Development Internship",
        issuer: "Orbitor",
        date: "Jun 2024",
        skills: "HTML, CSS, JavaScript",
        logo: "/images/orbitor.jpeg"
      },
      {
        title: "Programming in Python",
        issuer: "SWAYAM MHRD",
        date: "Dec 2023",
        skills: "Python Programming",
        logo: "/images/swayam.jpeg"
      },
      {
        title: "Gemini for Cloud Architects",
        issuer: "Google",
        date: "Jul 2024",
        skills: "Cloud AI, Vertex AI",
        logo: "/images/google.jpeg"
      },
      {
        title: "Introduction to Networking",
        issuer: "NVIDIA",
        date: "Jul 2025",
        skills: "Network Security",
        logo: "/images/nvidia.jpeg"
      },
      {
        title: "TCS iON Career Edge – Interview and Job Readiness",
        issuer: "TCS iON",
        date: "Jul 2025",
        skills: "Professional Writing, Communication",
        logo: "/images/tcs.jpeg"
      },
      {
        title: "Foundations of Business Analysis",
        issuer: "SAP",
        date: "Jun 2025",
        skills: "Critical Thinking, Business Process Understanding",
        logo: "/images/sap.jpeg"
      },
      {
        title: "Developing Soft Skills and Personality",
        issuer: "NPTEL",
        date: "Dec 2024",
        skills: "Communication, Leadership",
        logo: "/images/nptel.jpeg"
      }
    ].map((cert, idx) => (
      <div key={idx} className="cert-card bg-[#1a1a40] rounded-2xl p-4 text-center shadow-lg hover:scale-105 transition-transform duration-300">
        <img src={cert.logo} alt={cert.issuer} className="mx-auto w-16 h-16 mb-4 rounded-full object-contain" />
        <h3 className="font-bold text-white text-lg mb-1">{cert.title}</h3>
        <p className="text-gray-300 mb-1">{cert.issuer}</p>
        <p className="text-gray-400 mb-2">{cert.date}</p>
        <p className="text-gray-400 text-sm">{cert.skills}</p>
      </div>
    ))}
  </div>
</motion.section>


      {/* Contact Section */}
      <motion.section id="contact" className="max-w-[80vw] mx-auto py-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="text-center text-[#ae8cce] text-3xl mb-4">Contact Me</h2>
        <p className="text-center text-gray-400 mb-8">Let’s collaborate or discuss ideas!</p>
        <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col items-center gap-4">
          <input type="hidden" name="access_key" value="ae01a018-76df-420a-921d-eaff8c907856" />
          <input type="text" name="name" placeholder="Name" required className="w-1/2 p-2 rounded border border-gray-400 bg-[#1a1a40] text-white"/>
          <input type="email" name="email" placeholder="Email" required className="w-1/2 p-2 rounded border border-gray-400 bg-[#1a1a40] text-white"/>
          <textarea name="message" placeholder="Message" rows={4} required className="w-1/2 p-2 rounded border border-gray-400 bg-[#1a1a40] text-white"/>
          <button type="submit" className="bg-purple-800 hover:bg-purple-600 text-white py-2 px-6 rounded-lg transition duration-300">Submit</button>
        </form>
      </motion.section>
      {/* Footer Section */}
<footer className="bg-[#12123e] text-white py-6 mt-12">
  <div className="max-w-[80vw] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-gray-400 text-sm">
      &copy; {new Date().getFullYear()} Sampanna Shetty. All rights reserved.
    </p>

    <div className="flex gap-4">
  <a href="https://github.com/SAMSHETTY0806" target="_blank" rel="noopener noreferrer" className="hover:text-[#7676d6] transition-colors">
    <i className="fab fa-github text-xl text-white"></i>
  </a>
  <a href="https://www.linkedin.com/in/sampanna-shetty-0299b2287/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0a66c2] transition-colors">
    <i className="fab fa-linkedin text-xl text-white"></i>
  </a>
  <a href="https://www.instagram.com/sam_shetty_8/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d63384] transition-colors">
    <i className="fab fa-instagram text-xl text-white"></i>
  </a>
  <a href="mailto:shettysampanna111@gmail.com" className="hover:text-[#19d090] transition-colors">
    <i className="fas fa-envelope text-xl text-white"></i>
  </a>

    </div>
  </div>

  <p className="text-center text-gray-500 text-xs mt-4">
    Designed & Developed by Sampanna Shetty
  </p>
</footer>

    </main>
  );
}
