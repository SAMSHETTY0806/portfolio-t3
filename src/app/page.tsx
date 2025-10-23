"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TypingText from "@/app/TypingText";
import { Image } from "@/app/components/ui/image"; // Shadcn Image import

export default function Home() {
  return (
    <main className="bg-[#000021] text-white font-poppins">
      {/* Header */}
      <header className="bg-[#12123e] h-[90px] flex justify-around items-center relative">
        <div className="hamburger invert block md:hidden">
          <Image src="/hamburger.svg" alt="menu" className="w-8 h-8 cursor-pointer" width={32} height={32}/>
        </div>
        <div className="text-2xl">SAM&#39;S Portfolio</div>
        <div className="right hidden md:flex">
          <ul className="flex space-x-6">
            {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="hover:text-[#7676d6]">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile nav */}
        <div className="mobilenav md:hidden absolute top-[11vh] left-[-140%] w-[20vh] h-[50vh] bg-[#12123e] rounded-lg flex items-center justify-center z-30">
          <div className="mobileright flex justify-center relative">
            <div className="close invert absolute right-5">
              <Image src="/close.svg" alt="close" className="w-6 h-6 cursor-pointer" width={24} height={24}/>
            </div>
            <ul className="flex flex-col space-y-12 text-center">
              {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="hover:text-[#7676d6]">{item}</a>
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
          
          {/* Typing effect */}
          <TypingText />

          <div className="button-container flex gap-4 mt-4">
            <Link
              href="/sampanna.pdf"
              download
              className="resume-btn bg-purple-800 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition duration-300 inline-block text-center"
            >
              Download Resume
            </Link>

            <button
  className="contact-btn border-2 border-purple-800 hover:bg-purple-600 hover:text-white py-2 px-4 rounded-lg transition duration-300"
  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
>
  Contact Us
</button>

          </div>

          <div className="social-container flex gap-4 mt-4">
            <a href="https://github.com/SAMSHETTY0806" target="_blank" className="social-btn hover:bg-gray-800 p-2 rounded-lg transition duration-300"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/sampanna-shetty-0299b2287/" target="_blank" className="social-btn hover:bg-blue-700 p-2 rounded-lg transition duration-300"><i className="fab fa-linkedin"></i></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rightsection flex justify-center items-center w-full md:w-auto"
        >
          <Image src="/images/sam.png" alt="My Image" className="w-full max-w-[350px] rounded-2xl" width={350} height={350}/>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="aboutsection max-w-[80vw] mx-auto py-12"
      >
        <h2 className="text-center text-[#ae8cce] text-3xl mb-8">About Me</h2>
        <Image src="/images/web2.png" alt="About" className="mx-auto rounded-xl mb-8" width={500} height={300}/>
        <div className="boxex flex flex-wrap justify-center gap-6 mb-8">
          <div className="b1 bg-[#1a1a40] border border-white p-10 rounded-3xl text-center w-[300px] hover:scale-105 transition-transform duration-300">
            <h3 className="mb-2"><i className="fas fa-trophy"></i><br/>Experience</h3>
            <p className="text-[#cc93cc]">Started my frontend Development Journey in 2024</p>
          </div>
          <div className="b2 bg-[#1a1a40] border border-white p-10 rounded-3xl text-center w-[300px] hover:scale-105 transition-transform duration-300">
            <h3 className="mb-2"><i className="fas fa-book-open"></i><br/>Education</h3>
            <p className="text-[#cc93cc]">BTech in AIML</p>
          </div>
        </div>
        <p className="text-gray-400 text-center max-w-[800px] mx-auto">
          I&#39;m a passionate AI engineer with a background in web development, data engineering, and machine learning. My goal is to create intelligent systems that improve our daily lives and solve complex problems.
        </p>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="Experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="servicesection max-w-[80vw] mx-auto py-12"
      >
        <h2 className="text-center text-[#ae8cce] text-3xl mb-6">Experience</h2>
        <p className="text-center text-gray-400 mb-8">I have gained experience in the following areas:</p>
        <div className="skill flex flex-wrap justify-center gap-10">
          <div className="tech bg-[#2a3e52] p-6 rounded-lg w-[300px] text-center hover:scale-105 transition-transform duration-300">
            <h2 className="text-aquamarine text-2xl mb-4">Technical Skills</h2>
            <ul className="space-y-2">
              <li className="flex justify-between"><strong>Python</strong><span className="text-gray-300">Intermediate</span></li>
              <li className="flex justify-between"><strong>C Programming</strong><span className="text-gray-300">Intermediate</span></li>
              <li className="flex justify-between"><strong>HTML/CSS</strong><span className="text-gray-300">Intermediate</span></li>
              <li className="flex justify-between"><strong>Java</strong><span className="text-gray-300">Basic</span></li>
            </ul>
          </div>
          <div className="nontech bg-[#2a3e52] p-6 rounded-lg w-[300px] text-center hover:scale-105 transition-transform duration-300">
            <h2 className="text-aquamarine text-2xl mb-4">Other Skills</h2>
            <ul className="space-y-2">
              <li className="flex justify-between"><strong>SQL</strong><span className="text-gray-300">Intermediate</span></li>
              <li className="flex justify-between"><strong>JavaScript</strong><span className="text-gray-300">Basic</span></li>
              <li className="flex justify-between"><strong>C++</strong><span className="text-gray-300">Intermediate</span></li>
              <li className="flex justify-between"><strong>Git</strong><span className="text-gray-300">Intermediate</span></li>
            </ul>
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

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="projectssection max-w-[80vw] mx-auto py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-[#ae8cce] text-3xl mb-8">Browse My Recent <span className="text-green-500">Projects</span></h2>
        <div className="projects flex flex-wrap justify-center gap-6">
          {[ 
            { title: "Weather App", img: "/images/weather.jpg", github: "https://github.com/SAMSHETTY0806/WEATHER-APP", live: "https://samshetty0806.github.io/WEATHER-APP/" },
            { title: "Connect 4", img: "/images/connect4.png", github: "#", live: "#" },
            { title: "Snake Game", img: "/images/snakegame.jpeg", github: "#", live: "#" }
          ].map((proj) => (
            <div key={proj.title} className="project-card bg-[#2a3b4e] p-4 rounded-xl w-[300px] text-center shadow-lg hover:scale-105 transition-transform duration-300">
              <Image src={proj.img} alt={proj.title} className="w-full rounded-lg" width={300} height={200}/>
              <div className="project-title font-bold mt-2">{proj.title}</div>
              <div className="buttons flex justify-center gap-2 mt-2">
                <a href={proj.github} className="btn bg-blue-600 hover:bg-blue-800 text-white py-1 px-3 rounded">Github</a>
                <a href={proj.live} className="btn bg-blue-600 hover:bg-blue-800 text-white py-1 px-3 rounded">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="contactsection max-w-[80vw] mx-auto py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-[#ae8cce] text-3xl mb-4">Contact Me</h2>
        <p className="text-center text-gray-400 mb-8">If you would like to discuss a project or have any questions, feel free to reach out!</p>
        <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col items-center gap-4">
          <input type="hidden" name="access_key" value="ae01a018-76df-420a-921d-eaff8c907856" />
          <input type="text" name="name" placeholder="Name" required className="w-1/2 p-2 rounded border border-gray-400 text-black"/>
          <input type="email" name="email" placeholder="Email" required className="w-1/2 p-2 rounded border border-gray-400 text-black"/>
          <textarea name="message" placeholder="Message" rows={4} required className="w-1/2 p-2 rounded border border-gray-400 text-black"/>
          <button type="submit" className="bg-purple-800 hover:bg-purple-600 text-white py-2 px-6 rounded-lg transition duration-300">Submit Form</button>
        </form>
      </motion.section>
    </main>
  );
}
