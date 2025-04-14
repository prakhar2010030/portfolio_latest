import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
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

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Work Experience
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            My professional journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"
            aria-hidden="true"
          />

          <div className="relative z-10">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 dark:bg-indigo-500 mx-auto">
                    <FaBriefcase className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-6 mx-4 md:mx-8 lg:mx-12">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                    {experience.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    {experience.duration}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
