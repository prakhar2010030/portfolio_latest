import exam from "../portal.png";
import portfolio from "../portfolio.png";
import seo from "../seo.png";
import cashflow from "../cashflow.png";
import {
    FaReact,
    FaNodeJs,
    FaDocker,
    FaGitAlt,
  } from 'react-icons/fa';
  import {
    SiTypescript,
    SiMongodb,
    SiPostgresql,
    SiTailwindcss,
    SiRedux,
    SiExpress,
    SiNextdotjs,
    SiMysql,
    SiSocketdotio,
    SiHono,
    SiPrisma,
    SiTurborepo,
  } from 'react-icons/si';
export const experiences = [
  {
    title: "MERN Developer Intern",
    company: "Susalabs Pvt. Ltd.",
    duration: "Dec 2023 - August 2024",
    description: [
      "Developed and integrated 20+ RESTful APIs for an Employee Management System, successfully merging 3 databases into a unified backend, reducing data redundancy by 40%.",
      "Improved application performance by implementing code splitting, which decreased bundle size by 35% and boosted initial load speed.",
      "Contributed to the development of scalable back-end systems for a ticketing and e-commerce application.",
    ],
  },
  {
    title: "MERN Developer Intern",
    company: "AGBIZ TECHNOLOGIES.",
    duration: "May 2023 - July 2023",
    description: [
      "Contributed to the development of S-TAP, a tour and travel web application, by designing and integrating keyfront-end components and back-end APIs.",
      "Developed 10+ reusable UI components using React and Tailwind CSS, improving development speed and code maintainability across the project.",
    ],
  },
];
export const projects = [
    {
      title: "Exam Platform",
      description:
        "A full-featured online exam portal that allows students to take timed quizzes and view results in real-time. Includes admin tools for creating, managing, and evaluating exams securely..",
      image: exam,
      technologies: [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Context API",
      ],
      demo: "https://test-portal-shunnya.netlify.app/",
    },
    {
      title: "Portfolio",
      description: "A portfolio website that showcases my projects and skills.",
      image: portfolio,
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      github: "https://github.com/prakhar2010030/portfolio_latest",
      demo: "https://portfolio-shunnya.netlify.app/",
    },
    {
      title: "Cashflow",
      description:
        "A cashflow management app with seamless QR-based transaction scanning. Enables users to instantly log and categorize expenses by scanning payment receipts or QR codes.",
      image: cashflow,
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB","lazy loading"],
      github: "https://github.com/prakhar2010030/cashflow",
      demo: "https://cashflow-shunnya.netlify.app/",
    },
    {
      title: "SEO Landing Page",
      description:
        "A landing page for a SEO company with a clean and modern design.",
      image: seo,
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "React",
        "TypeScript",
      ],
      github: "https://github.com/prakhar2010030/landing-page",
      demo: "https://ai-seo-page.netlify.app/",
    },
  ];

  export const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, level: 90 },
        { name: 'Next.js', icon: SiNextdotjs, level: 90 },
        { name: 'TypeScript', icon: SiTypescript, level: 85 },
        { name: 'Redux Toolkit', icon: SiRedux, level: 80 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 85 },
        { name: 'Hono', icon: SiHono, level: 85 },
        { name: 'Express', icon: SiExpress, level: 80 },
        { name: 'Web Socket', icon: SiSocketdotio, level: 75 },
        { name: 'Prisma ORM', icon: SiPrisma, level: 75 },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 80 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 75 },
        { name: 'MySQL', icon: SiMysql, level: 70 },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: FaDocker, level: 70 },
        { name: 'Turborepo', icon: SiTurborepo, level: 65 },
        { name: 'Git', icon: FaGitAlt, level: 85 },
      ],
    },
  ];