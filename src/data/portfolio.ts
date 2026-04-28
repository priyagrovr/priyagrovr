import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiPhp,
  SiDjango,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiAmazonwebservices,
  SiWordpress,
  SiHtml5,
  SiCss3,
  SiVercel,
  SiNetlify,
  SiOpenai,
  SiHeroku,
  SiRailway,
  SiRender,
  SiSupabase,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiPostman,
  SiAnthropic,
} from "react-icons/si";
import { VscAzure, VscVscode } from "react-icons/vsc";
import { HiCircleStack, HiCursorArrowRays } from "react-icons/hi2";
import type { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  level: number; // 0-100
  category: "Frontend" | "Backend" | "AI & LLM" | "DevOps & Cloud" | "Database" | "Tools";
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  image?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export const personalInfo = {
  name: "Priya Grover",
  role: "Senior Full Stack Developer",
  tagline:
    "AI-Powered Full Stack Developer with 13+ years of experience building scalable, production-ready web & mobile applications",
  email: "priya.grover1988@gmail.com",
  bio: `I'm a freelance Full Stack Developer with 13+ years of experience building scalable, production-ready web and mobile applications. I specialize in turning complex business requirements into clean, reliable, and user-friendly digital products.

I hold a Master's degree in Computer Applications (MCA) and bring a strong engineering mindset combined with practical, real-world experience.

On the frontend, I create modern, high-performance user interfaces using React, Next.js, React Native, HTML, CSS, JavaScript, and TypeScript — with a strong focus on UX, accessibility, and maintainable UI architecture.

On the backend, I design and build secure, scalable systems using Node.js, PHP (WordPress, Laravel), and Python (Django) — including RESTful APIs, authentication flows, and third-party integrations.

I actively work on integrating AI and Large Language Models (LLMs) into existing and new products, including OpenAI GPT-based chat and workflow automation, custom AI agents, and embedding LLMs into SaaS products using secure APIs.`,
  resumeUrl: "/resume/Priya-Grover-Resume.pdf",
  resumePdf: "/resume/Priya-Grover-Resume.pdf",
  resumeDoc: "/resume/Priya-Grover-Resume.docx",
  resumeFileName: "Priya-Grover-Resume",
};

export const skills: Skill[] = [
  { name: "React", icon: SiReact, level: 95, category: "Frontend" },
  { name: "React Native", icon: SiReact, level: 90, category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, level: 95, category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, level: 90, category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, level: 95, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, category: "Frontend" },
  { name: "HTML5", icon: SiHtml5, level: 95, category: "Frontend" },
  { name: "CSS3", icon: SiCss3, level: 95, category: "Frontend" },
  { name: "Node.js", icon: SiNodedotjs, level: 90, category: "Backend" },
  { name: "Python", icon: SiPython, level: 85, category: "Backend" },
  { name: "Django", icon: SiDjango, level: 80, category: "Backend" },
  { name: "PHP", icon: SiPhp, level: 85, category: "Backend" },
  { name: "Laravel", icon: SiLaravel, level: 80, category: "Backend" },
  { name: "WordPress", icon: SiWordpress, level: 80, category: "Backend" },
  { name: "OpenAI / LLMs", icon: SiOpenai, level: 85, category: "AI & LLM" },
  { name: "MySQL", icon: SiMysql, level: 85, category: "Database" },
  { name: "PostgreSQL", icon: SiPostgresql, level: 80, category: "Database" },
  { name: "MongoDB", icon: SiMongodb, level: 80, category: "Database" },
  { name: "Firebase", icon: SiFirebase, level: 80, category: "Database" },
  { name: "Azure SQL", icon: VscAzure, level: 75, category: "Database" },
  { name: "AWS", icon: SiAmazonwebservices, level: 80, category: "DevOps & Cloud" },
  { name: "Vercel", icon: SiVercel, level: 90, category: "DevOps & Cloud" },
  { name: "Netlify", icon: SiNetlify, level: 85, category: "DevOps & Cloud" },
  { name: "Git", icon: SiGit, level: 90, category: "DevOps & Cloud" },
  { name: "Heroku", icon: SiHeroku, level: 80, category: "DevOps & Cloud" },
  { name: "Railway", icon: SiRailway, level: 80, category: "DevOps & Cloud" },
  { name: "Render", icon: SiRender, level: 80, category: "DevOps & Cloud" },
  { name: "Neon", icon: HiCircleStack, level: 75, category: "DevOps & Cloud" },
  { name: "Supabase", icon: SiSupabase, level: 80, category: "DevOps & Cloud" },
  { name: "Docker", icon: SiDocker, level: 80, category: "DevOps & Cloud" },
  { name: "VS Code", icon: VscVscode, level: 95, category: "Tools" },
  { name: "Cursor Pro", icon: HiCursorArrowRays, level: 85, category: "Tools" },
  { name: "Claude Code", icon: SiAnthropic, level: 85, category: "Tools" },
  { name: "Postman", icon: SiPostman, level: 85, category: "Tools" },
];

export const projects: Project[] = [
  {
    title: "AI Chatbot & RAG Platform",
    description:
      "Built an AI-powered chatbot with Retrieval-Augmented Generation (RAG), custom AI agents, and multi-step reasoning flows integrated into a SaaS product.",
    tags: ["OpenAI", "Next.js", "Node.js", "Python", "RAG"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI-Powered SaaS Platform",
    description:
      "Full-stack SaaS application built with Next.js, Django REST Framework, and PostgreSQL, featuring AI integrations, user authentication, and scalable API architecture.",
    tags: ["Next.js", "Django", "PostgreSQL", "TypeScript", "AWS"],
    live: "https://example.com",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Scalable e-commerce solution with payment integration, inventory management, admin dashboard, and responsive storefront built with React and Node.js.",
    tags: ["React", "Node.js", "MySQL", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "React Native Mobile App",
    description:
      "Cross-platform mobile application built with React Native featuring push notifications, real-time updates, and seamless offline support.",
    tags: ["React Native", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com",
  },
  {
    title: "WordPress Enterprise Solutions",
    description:
      "Custom WordPress themes and plugins for enterprise clients with advanced custom fields, REST API integrations, and performance optimization.",
    tags: ["WordPress", "PHP", "MySQL", "REST API"],
    live: "https://example.com",
  },
  {
    title: "Django Data Analytics Dashboard",
    description:
      "Full-stack analytics dashboard built with Python Django backend and React frontend, featuring real-time data visualization and reporting.",
    tags: ["Python", "Django", "React", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Freelance",
    location: "Sahibzada Ajit Singh Nagar, Punjab, India",
    type: "Remote",
    period: "Feb 2026 — Present",
    description: [
      "Providing freelance senior engineering services for web and mobile applications",
      "Building scalable, production-ready solutions for diverse clients",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "nSpire AI",
    location: "San Francisco, California, United States",
    type: "Remote",
    period: "Sep 2022 — Jan 2026",
    description: [
      "Built full-stack applications using Next.js, Tailwind CSS, React.js, and TypeScript",
      "Developed backend services with Node.js, NestJS, Python, Django, and Django REST Framework",
      "Managed PostgreSQL databases and deployed on AWS infrastructure",
      "Delivered scalable web engineering solutions over 3+ years",
    ],
  },
  {
    role: "Sr. Full Stack Developer",
    company: "LoudOwls",
    location: "Mohali district, India",
    type: "On-site",
    period: "Mar 2021 — Feb 2022",
    description: [
      "Led full-stack development using Next.js, React.js, React Native, and TypeScript",
      "Built backend services with Node.js, Express.js, Laravel, and PHP",
      "Worked with MySQL, PostgreSQL, and deployed on AWS Lambda and Netlify",
      "Implemented testing with Jest and managed projects via GitLab and Trello",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Webethics",
    location: "Sahibzada Ajit Singh Nagar, Punjab, India",
    type: "On-site",
    period: "Jun 2018 — Mar 2021",
    description: [
      "Developed web applications using Next.js, React.js, NestJS, and TypeScript",
      "Built mobile apps with React Native and maintained WordPress sites",
      "Worked with Laravel, Node.js, PHP, and deployed on AWS, Vercel, and Netlify",
      "Used jQuery, Bootstrap, and Tailwind CSS for frontend development",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "ILLUMINZ",
    location: "Sahibzada Ajit Singh Nagar, Punjab, India",
    type: "On-site",
    period: "Jan 2014 — Jun 2018",
    description: [
      "Worked with ReactJs, React Native, NextJS, and VueJs on the frontend",
      "Built backend systems using NodeJS, ExpressJs, NestJs, StrapiJs, and GraphQL",
      "Developed applications with PHP, Laravel, Yii2, and WordPress",
      "Managed databases with MySQL and PostgreSQL, deployed via REST APIs",
    ],
  },
  {
    role: "PHP Developer",
    company: "Netshell Info System",
    location: "Sahibzada Ajit Singh Nagar, Punjab, India",
    type: "On-site",
    period: "May 2013 — Dec 2013",
    description: [
      "Developed web applications using PHP, Laravel, and WordPress",
      "Worked with MySQL, MySQLi, and front-end technologies (HTML5, CSS, JavaScript)",
      "Built interactive UIs with jQuery, jQuery UI, and Bootstrap",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Punjab University Regional Centre for Information Technology & Management",
    period: "2009 — 2012",
    details: "Computer Science, Java, and related technologies",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Shah Satnam Ji Institute of Technology & Management",
    period: "2006 — 2009",
    details: "Computer Software Engineering — Grade: A",
  },
];

export const certifications = [
  {
    title: "AI Chatbots, RAG, & Governance with Data Workflows — Getting Started",
    issuer: "KNIME",
    date: "Oct 2025",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/priyagrovr" },
  { name: "LinkedIn", url: "https://linkedin.com/in/priyagrover" },
  { name: "Twitter", url: "https://twitter.com" },
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Bani Maiti",
    role: "Cofounder & CTO | Principal AI Architect | Director of Platform",
    company: "nSpire AI",
    text: "Priya is one of the most efficient and dedicated developers I've had the pleasure of working with. She combines strong technical ability with clear communication and a genuinely collaborative spirit — a rare combination.\n\nOn our team, Priya consistently delivered clean, high-quality code while keeping things running smoothly through clear communication and openness to feedback. She's the kind of teammate who elevates everyone around her.\n\nAny team would be lucky to have Priya. Highly recommended.",
  },
];

export interface GalleryItem {
  title: string;
  description: string;
  category: "All" | "Web" | "Mobile" | "AI";
  icon: string;
  gradient: string;
  tags: string[];
}

export const galleryItems: GalleryItem[] = [
  {
    title: "AI Dashboard",
    description: "Real-time analytics with LLM-powered insights",
    category: "AI",
    icon: "brain",
    gradient: "from-purple-600 via-violet-600 to-indigo-600",
    tags: ["OpenAI", "Next.js", "D3.js"],
  },
  {
    title: "E-Commerce Store",
    description: "Full-stack storefront with payment integration",
    category: "Web",
    icon: "cart",
    gradient: "from-blue-600 via-cyan-600 to-teal-500",
    tags: ["React", "Stripe", "Node.js"],
  },
  {
    title: "Chat Mobile App",
    description: "Cross-platform messenger with real-time sync",
    category: "Mobile",
    icon: "chat",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-500",
    tags: ["React Native", "Firebase"],
  },
  {
    title: "SaaS Platform",
    description: "Multi-tenant platform with team collaboration",
    category: "Web",
    icon: "cloud",
    gradient: "from-indigo-600 via-blue-600 to-cyan-500",
    tags: ["Next.js", "PostgreSQL", "AWS"],
  },
  {
    title: "AI Chatbot Widget",
    description: "Embeddable chatbot with RAG and custom agents",
    category: "AI",
    icon: "bot",
    gradient: "from-fuchsia-600 via-purple-600 to-violet-600",
    tags: ["Python", "LangChain", "React"],
  },
  {
    title: "Fitness Tracker",
    description: "Health monitoring with charts and reminders",
    category: "Mobile",
    icon: "heart",
    gradient: "from-rose-500 via-pink-500 to-purple-600",
    tags: ["React Native", "TypeScript"],
  },
];

export const whatsappNumber = "+917355113377";

export const mapConfig = {
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.22218285815!2d76.6460202148438!3d30.710994700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee906da6f81f%3A0x512998f16ce508d8!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%2C%20India!5e0!3m2!1sen!2sin!4v1707900000000!5m2!1sen!2sin",
  title: "Sahibzada Ajit Singh Nagar, Punjab, India",
};
