import { motion } from 'framer-motion';
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

const skillCategories = [
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

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            Technologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex items-center mb-2">
                      <skill.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 