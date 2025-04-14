import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import exam from "../assets/portal.png";
import portfolio from "../assets/portfolio.png";
import seo from "../assets/seo.png";
import cashflow from "../assets/cashflow.png";

const projects = [
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

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 md:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                      <FiGithub className="w-6 h-6 text-gray-900" />
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                      <FiExternalLink className="w-6 h-6 text-gray-900" />
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
