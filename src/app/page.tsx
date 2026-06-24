"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TypingText from "@/app/TypingText";
import { Image } from "@/app/components/ui/image";

/* ----------------------------- DATA ----------------------------- */

const navItems = [
  "Home",
  "About",
  "Publications",
  "Projects",
  "Experience",
  "Achievements",
  "Certifications",
  "Contact",
];

const stats = [
  { value: "3+", label: "Research Publications" },
  { value: "10+", label: "Technical Projects" },
  { value: "5+", label: "Leadership Roles" },
  { value: "500+", label: "Community Members Impacted" },
];

const focusAreas = ["AI Research", "Computer Vision", "Generative AI", "Leadership"];

const publications = [
  {
    title: "GPU Framework for Priority-Aware Dynamic Routing Optimization",
    role: "Co-Author & Presenter",
    year: "2025",
    tags: ["GPU Computing", "Genetic Algorithms", "Logistics Optimization"],
    summary:
      "Engineered a GPU-accelerated Genetic Algorithm and Simulated Annealing framework achieving 2× faster optimization and 60% lower compute overhead, improving route quality by 25% across 2,000+ node datasets.",
    link: "https://drive.google.com/file/d/1_x6V7f5MfCC7WW0iSxX37QV3pCWMz2Lm/view?usp=drive_link",
  },
  {
    title: "Assistive Vision for Visually Impaired: An Integrated Deep Learning and IoT Framework",
    role: "Co-Author",
    year: "2026",
    tags: ["Deep Learning", "YOLOv5", "IoT Integration", "Real-time Navigation"],
    summary:
      "Built a YOLOv5-based system detecting 20+ object categories at 30+ FPS with under 200ms latency, integrated with ESP32 IoT modules. Achieved 96.2% accuracy, outperforming 5+ baseline models including SSD and MobileNet.",
    link: "https://drive.google.com/file/d/1iOgG0UM8CK1URHMi_URh_tS7YqS8kSR0/view?usp=drive_link",
  },
  {
    title: "Intelligent Rain Sensing Wiper Technology",
    role: "Co-Author & Presenter",
    year: "2026",
    tags: ["Embedded Systems", "IoT Automation", "Arduino"],
    summary:
      "Developed an Arduino-based intelligent wiper system achieving 96–98% rainfall detection accuracy with response times as low as 0.75 seconds across 3 intensity levels.",
    link: "https://drive.google.com/file/d/1g9ejKNrnH_ionSIzSMtBBeL0BfbLQtl7/view?usp=drive_link",
  },
];

const projects = [
  {
    title: "Vajrayudh",
    subtitle: "AI-Powered Stampede Prevention System",
    category: "Computer Vision + IoT",
    description:
      "Real-time crowd monitoring system across 4 detection modules processing 1080p video at 24 FPS. Handles 500+ events at 93% precision, cutting manual surveillance effort by 70%.",
    image: "/images/VJRAYUDH.png",
    link: "https://github.com/codeforinnovex25/VAJRAYUDHA",
  },
  {
    title: "Pedestrian & Car Detection",
    subtitle: "YOLO-Based Object Detection for Autonomous Systems",
    category: "Computer Vision",      
    description:
      "Real-time pedestrian and vehicle detection pipeline built on YOLO, designed for traffic monitoring and autonomous driving perception tasks.",
    image: "/images/pedestrain.png",
    link: "https://github.com/SAMSHETTY0806/yolo-pedestrian-car-detection",
  },
  {
    title: "Lip Reading using Computer Vision",
    subtitle: "Visual Speech Recognition",
    category: "Computer Vision",
    description:
      "Deep learning model that interprets spoken words purely from visual lip movement sequences, demonstrating applied CV for accessibility use cases.",
    image: "/images/lip-reading.png",
    link: "https://github.com/SAMSHETTY0806/Lip_reading_Demo_using_CV",
  },
  {
    title: "Neonatal Sepsis Prediction",
    subtitle: "Early-Onset Risk Detection",
    category: "Healthcare AI",
    description:
      "Random Forest model trained on 1,500+ NICU records using 15+ clinical features, achieving 89% AUC-ROC in collaboration with KS Hegde Medical Academy.",
    image: "/images/neonatel.png",
    link: "https://github.com/SAMSHETTY0806/machine_learning_project",
  },
  {
    title: "Multi-Emotion Detector",
    subtitle: "Real-Time Facial Emotion Recognition",
    category: "Computer Vision",
    description:
      "Real-time facial emotion classifier using OpenCV and Flask, classifying 7 emotions with 90%+ accuracy on 5,000+ images at 25+ FPS.",
    image: "/images/facial.png",
    link: "https://github.com/SAMSHETTY0806/Multi_emotion_detector_app",
  },
  {
    title: "Story Generation using NLP",
    subtitle: "Transformer-Based Text Generation",
    category: "NLP",
    description:
      "Transformer model with a 4-layer, 8-head architecture trained on 10,000+ text samples, generating coherent multi-paragraph stories with a BLEU score of 0.72.",
    image: "/images/nlp.png",
    link: "https://github.com/SAMSHETTY0806/Generate_story_NLP",
  },
  {
    title: "Audio Enhancer",
    subtitle: "Neural Network-Based Audio Cleanup",
    category: "Deep Learning",
    description:
      "Neural network model for enhancing and denoising audio signals, applying deep learning techniques to signal processing tasks.",
    image: "/images/enhancer.png",
    link: "https://github.com/SAMSHETTY0806/Audio_enhancer_NNDL",
  },
  {
    title: "Handwritten Digit Recognition",
    subtitle: "Digit Classification in C++",
    category: "Machine Learning",
    description:
      "Handwritten digit recognition system implemented in C++, covering core ML fundamentals from feature extraction to classification.",
    image: "/images/hand_written.png",
    link: "https://github.com/SAMSHETTY0806/Handwritten_digit_recognization_using_CPP",
  },
  {
    title: "Document Management System",
    subtitle: "Full-Stack Document Workflow App",
    category: "Full Stack Web Development",
    description:
      "React.js-based document management system supporting upload, organization, and retrieval workflows for structured document handling.",
    image: "/images/doc.png",
    link: "https://github.com/SAMSHETTY0806/Document_management_reactjs",
  },
  {
    title: "AeroClub Website",
    subtitle: "Club Management Platform",
    category: "Full Stack Web Development",
    description:
      "Fully responsive website for AeroClub Nitte, built for club management, event listings, and member engagement.",
    image: "/images/aeroclub.jpeg",
    link: "https://github.com/aeroclubnitte/Aeroclub-WEBSITE",
  },
  {
    title: "Music Player",
    subtitle: "Shell-Based Audio Player",
    category: "Systems Programming",
    description:
      "Lightweight music player built using Unix shell scripting, demonstrating command-line systems programming and audio file handling.",
    image: "/images/player.png",
    link: "https://github.com/SAMSHETTY0806/Music_player_using_shell",
  },
];

const timeline = [
  { period: "2025–Present", role: "Secretary", org: "NMAMIT Student Research Forum" },
  { period: "2025–Present", role: "Operations Manager", org: "FiniteLoop Club" },
  { period: "2025–Present", role: "Branch Captain", org: "AIML Department" },
  { period: "2025–2026", role: "Student Coordinator", org: "IC-AISIS 2026" },
  { period: "2025–2026", role: "Student Organizer", org: "Hackfest'26" },
  { period: "2025–2026", role: "Co-Head, Event Management", org: "Incridea'26" },
];

const techGroups = [
  {
    title: "Artificial Intelligence",
    items: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "YOLO", "NLP", "Generative AI", "RAG"],
  },
  {
    title: "Development",
    items: ["Next.js", "React", "Node.js", "Flask", "Express.js"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "SQLite"],
  },
  {
    title: "Cloud & Tools",
    items: ["Oracle Cloud", "Git", "GitHub", "Linux", "Docker", "Google Apps Script"],
  },
];

const achievements = [
  { title: "Research Paper Presenter", detail: "Presented co-authored research at academic venues" },
  { title: "Student Coordinator", detail: "IC-AISIS 2026" },
  { title: "Co-Head, Event Management", detail: "Incridea'26" },
  { title: "Operations Manager", detail: "FiniteLoop Club" },
  { title: "Branch Captain", detail: "AIML Department" },
  { title: "Organized Hackfest'26", detail: "₹4,00,000+ prize pool" },
];

const certifications = [
  { title: "Oracle Cloud Infrastructure 2025 Generative AI Professional", issuer: "Oracle", logo: "/images/oracle.jpeg" },
  { title: "Google AI Essentials", issuer: "Google", logo: "/images/google.jpeg" },
  { title: "Google Cybersecurity Professional Certificate", issuer: "Google", logo: "/images/google.jpeg" },
  { title: "Prompt Design in Vertex AI", issuer: "Google Cloud", logo: "/images/google.jpeg" },
  { title: "AI for Entrepreneurship", issuer: "Intel Corporation", logo: "/images/intel.jpeg" },
  { title: "SAP Foundations of Business Analysis", issuer: "SAP", logo: "/images/sap.jpeg" },
  { title: "NVIDIA Introduction to Networking", issuer: "NVIDIA", logo: "/images/nvidia.jpeg" },
];

/* ------------------------ PARTICLE CANVAS ------------------------ */

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function initParticles() {
      if (!canvas) return;
      const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
      }));
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]!;
          const b = particles[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(25, 208, 144, ${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (!canvas) return;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(174, 140, 206, 0.5)";
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    draw();

    const handleResize = () => {
      resize();
      initParticles();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      aria-hidden="true"
    />
  );
}

/* ----------------------------- PAGE ----------------------------- */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <main className="bg-[#000021] text-white font-poppins scroll-smooth">
      {/* ---------- NAVBAR ---------- */}
      <header className="bg-[#12123e]/80 backdrop-blur-md h-[80px] flex justify-around items-center relative sticky top-0 z-50 border-b border-white/5">
        <div className="hamburger invert block md:hidden cursor-pointer" onClick={toggleMenu}>
          <Image src="/hamburger.svg" alt="menu" className="w-7 h-7" width={28} height={28} />
        </div>
        <div className="text-xl md:text-2xl font-semibold text-white">SAM&#39;S Portfolio</div>
        <div className="right hidden lg:flex">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-sm text-gray-300 hover:text-[#19d090] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobilenav lg:hidden fixed top-0 left-0 h-screen w-[70vw] max-w-[300px] bg-[#12123e] rounded-r-2xl shadow-lg z-50 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="relative flex flex-col h-full">
            <div className="invert absolute top-4 right-4 cursor-pointer" onClick={toggleMenu}>
              <Image src="/close.svg" alt="close" className="w-6 h-6" width={24} height={24} />
            </div>
            <ul className="flex flex-col justify-center items-center h-full space-y-6 text-center mt-16">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={toggleMenu}
                    className="text-gray-200 hover:text-[#19d090] text-lg transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* ---------- HERO ---------- */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-20 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000021]/40 to-[#000021] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl flex flex-col items-center gap-5"
        >
          <span className="text-[#19d090] text-sm md:text-base tracking-[0.2em] uppercase font-medium">Portfolio</span>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">Sampanna Shetty</h1>

          <p className="text-[#ae8cce] text-base md:text-xl font-medium">
            AI Engineer &middot; Machine Learning Researcher &middot; Computer Vision Enthusiast &middot; Community Leader
          </p>

          <div className="h-7">
            <TypingText />
          </div>

          <p className="text-gray-400 max-w-xl text-sm md:text-base">
            Building intelligent systems, conducting impactful research, and leading technology-driven communities.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link
              href="/sampanna.pdf"
              download
              className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white py-2.5 px-6 rounded-lg transition duration-300 font-medium"
            >
              Resume Download
            </Link>
            <a
              href="#publications"
              className="border-2 border-[#19d090] text-[#19d090] hover:bg-[#19d090] hover:text-[#000021] py-2.5 px-6 rounded-lg transition duration-300 font-medium"
            >
              View Research
            </a>
            <button
              className="border-2 border-[#ae8cce] text-[#ae8cce] hover:bg-[#ae8cce] hover:text-[#000021] py-2.5 px-6 rounded-lg transition duration-300 font-medium"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </button>
          </div>

          <div className="flex gap-5 mt-2">
            <a href="https://github.com/SAMSHETTY0806" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/sampanna-shetty-0299b2287/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0a66c2] transition-colors" aria-label="LinkedIn">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </motion.div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[80vw] mx-auto py-20"
      >
        <h2 className="text-center text-[#ae8cce] text-3xl mb-3">About Me</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
          Final-year B.Tech student in Artificial Intelligence &amp; Machine Learning at NMAMIT, CGPA 8.9+, with research
          and applied experience spanning AI, computer vision, and generative AI &mdash; alongside hands-on leadership
          across student bodies and large-scale events.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {focusAreas.map((area) => (
            <span key={area} className="px-4 py-1.5 rounded-full border border-[#19d090]/40 text-[#19d090] text-sm bg-[#19d090]/5">
              {area}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#19d090]/40 transition-colors duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ---------- PUBLICATIONS ---------- */}
      <motion.section
        id="publications"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[80vw] mx-auto py-20"
      >
        <h2 className="text-center text-[#ae8cce] text-3xl mb-2">Research &amp; Publications</h2>
        <p className="text-center text-gray-400 mb-12">Preprints &mdash; full publication pending. Tap a card to view the paper.</p>

        <div className="flex flex-col gap-6">
          {publications.map((pub, i) => (
            <motion.a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#19d090]/50 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
                <h3 className="text-lg md:text-xl text-white font-semibold group-hover:text-[#19d090] transition-colors">
                  {pub.title}
                </h3>
                <span className="text-gray-400 text-sm whitespace-nowrap shrink-0">
                  {pub.year} &middot; {pub.role}
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{pub.summary}</p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#7c3aed]/15 text-[#c4b5fd] text-xs border border-[#7c3aed]/30">
                  Preprint
                </span>
                {pub.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-[#19d090]/10 text-[#19d090] text-xs border border-[#19d090]/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* ---------- PROJECTS ---------- */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[80vw] mx-auto py-20"
      >
        <h2 className="text-center text-3xl mb-2">
          <span className="text-[#ae8cce]">Featured</span> <span className="text-[#19d090]">Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          A selection of systems spanning computer vision, optimization, and healthcare AI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#19d090]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  width={400}
                  height={220}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000021] via-transparent to-transparent" />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#000021]/80 backdrop-blur-sm text-[#19d090] text-xs border border-[#19d090]/30">
                  {project.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-white font-semibold text-lg group-hover:text-[#19d090] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#ae8cce] text-sm mb-2">{project.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* ---------- EXPERIENCE TIMELINE ---------- */}
      <motion.section
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[80vw] mx-auto py-20"
      >
        <h2 className="text-center text-[#ae8cce] text-3xl mb-2">Experience Timeline</h2>
        <p className="text-center text-gray-400 mb-14">
          Leadership and coordination roles across research, technical, and event communities.
        </p>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#19d090]/60 via-[#ae8cce]/40 to-transparent md:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={`${item.role}-${item.org}`}
                  initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative flex items-start md:items-center gap-5 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 w-4 h-4 rounded-full bg-[#19d090] shadow-[0_0_12px_rgba(25,208,144,0.7)] z-10" />

                  <div className={`pl-10 md:pl-0 md:w-1/2 ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#19d090]/40 transition-colors duration-300 inline-block w-full md:w-auto">
                      <span className="text-[#19d090] text-xs font-medium tracking-wide">{item.period}</span>
                      <h3 className="text-white font-semibold text-base mt-1">{item.role}</h3>
                      <p className="text-gray-400 text-sm">{item.org}</p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ---------- TECH ECOSYSTEM ---------- */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[80vw] mx-auto py-20"
      >
        <h2 className="text-center text-[#19d090] text-lg mb-2 tracking-wide uppercase">Checkout My</h2>
        <h1 className="text-center text-4xl font-bold mb-14 text-white">Tech Ecosystem</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-[#ae8cce] font-semibold mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="border-2 border-[#19d090]/50 text-gray-200 px-3 py-1.5 rounded-lg text-sm hover:bg-[#19d090] hover:text-[#000021] hover:border-[#19d090] transition cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ---------- ACHIEVEMENTS ---------- */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[80vw] mx-auto py-20"
      >
        <h2 className="text-center text-[#ae8cce] text-3xl mb-12">Achievements</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 flex items-start gap-3 hover:border-[#7c3aed]/40 transition-colors duration-300"
            >
              <i className="fas fa-trophy text-[#7c3aed] mt-1"></i>
              <div>
                <h3 className="text-white font-medium text-sm">{item.title}</h3>
                <p className="text-gray-400 text-xs mt-0.5">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ---------- CERTIFICATIONS ---------- */}
      <motion.section
        id="certifications"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[80vw] mx-auto py-20"
      >
        <h2 className="text-center text-[#ae8cce] text-3xl mb-2">Certifications</h2>
        <p className="text-center text-gray-400 mb-12">High-value certifications across AI, cloud, and security.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-[#19d090]/40 transition-colors duration-300"
            >
              <img src={cert.logo} alt={cert.issuer} className="mx-auto w-14 h-14 mb-3 rounded-full object-contain" />
              <h3 className="text-white text-sm font-medium leading-snug">{cert.title}</h3>
              <p className="text-gray-400 text-xs mt-1">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ---------- CONTACT ---------- */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[80vw] mx-auto py-20"
      >
        <h2 className="text-center text-[#ae8cce] text-3xl mb-3">Contact</h2>
        <p className="text-center text-gray-400 mb-10">Let&rsquo;s collaborate or discuss ideas.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          <a
            href="mailto:shettysampanna111@gmail.com"
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col items-center gap-2 hover:border-[#19d090]/40 transition-colors duration-300"
          >
            <i className="fas fa-envelope text-[#19d090] text-xl"></i>
            <span className="text-gray-300 text-sm">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sampanna-shetty-0299b2287/"
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col items-center gap-2 hover:border-[#0a66c2]/40 transition-colors duration-300"
          >
            <i className="fab fa-linkedin text-[#0a66c2] text-xl"></i>
            <span className="text-gray-300 text-sm">LinkedIn</span>
          </a>
          <a
            href="https://github.com/SAMSHETTY0806"
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col items-center gap-2 hover:border-white/40 transition-colors duration-300"
          >
            <i className="fab fa-github text-white text-xl"></i>
            <span className="text-gray-300 text-sm">GitHub</span>
          </a>
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col items-center gap-2">
            <i className="fas fa-map-marker-alt text-[#ae8cce] text-xl"></i>
            <span className="text-gray-300 text-sm">Udupi, Karnataka, India</span>
          </div>
        </div>

        <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col items-center gap-4 max-w-md mx-auto">
          <input type="hidden" name="access_key" value="ae01a018-76df-420a-921d-eaff8c907856" />
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full p-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#19d090]/50"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#19d090]/50"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="w-full p-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#19d090]/50"
          />
          <button type="submit" className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white py-2.5 px-8 rounded-lg transition duration-300 font-medium">
            Submit
          </button>
        </form>
      </motion.section>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-[#12123e] text-white py-6 mt-12 border-t border-white/5">
        <div className="max-w-[80vw] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Sampanna Shetty. All rights reserved.</p>

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

        <p className="text-center text-gray-500 text-xs mt-4">Designed &amp; Developed by Sampanna Shetty</p>
      </footer>
    </main>
  );
}