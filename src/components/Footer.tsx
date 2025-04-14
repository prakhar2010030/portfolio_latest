import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <a
              href={`https://github.com/${import.meta.env.VITE_GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href={`https://linkedin.com/in/${import.meta.env.VITE_LINKEDIN_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${import.meta.env.VITE_EMAIL}`}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FiMail className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-400">
              © {currentYear} Prakhar. All rights reserved.
            </p>
          </div>

          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full cursor-pointer transition-colors duration-300"
          >
            <FiArrowUp className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 