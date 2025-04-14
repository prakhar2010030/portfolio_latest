import { motion } from "framer-motion";
import profileImage from "../assets/prakhar.jpg";
const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-xl text-gray-500 dark:text-gray-300">
              Get to know me better
            </p>
          </div>
        </motion.div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 lg:mt-0"
          >
            <div className="text-lg text-gray-500 dark:text-gray-300 space-y-6">
              <p>
                Hello! I'm a passionate Full Stack Developer with expertise in
                modern web technologies. I enjoy crafting elegant solutions to
                complex problems and building applications that create real
                value.
              </p>
              <p>
                Over the years, I've worked on a diverse range of projects —
                from small business websites to large-scale enterprise systems.
                My approach centers on writing clean, maintainable code and
                designing intuitive, user-focused experiences.
              </p>
              <p>
                Outside of coding, I enjoy exploring new technologies and
                contributing to open-source projects.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Core Skills:
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="text-gray-500 dark:text-gray-300">
                  Frontend Development
                </div>
                <div className="text-gray-500 dark:text-gray-300">
                  Backend Development
                </div>
                <div className="text-gray-500 dark:text-gray-300">
                  Database Design
                </div>
                <div className="text-gray-500 dark:text-gray-300">
                  API Development
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
