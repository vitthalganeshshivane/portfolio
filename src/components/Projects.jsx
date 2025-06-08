import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce MERN App",
      description:
        "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern MERN stack technologies.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
      githubUrl: "https://github.com/pankaj/ecommerce-app",
      liveUrl: "https://ecommerce-app-demo.vercel.app",
      imageUrl: "/api/placeholder/400/250",
      status: "Completed",
      featured: true,
    },
    {
      title: "Task Management Dashboard",
      description:
        "A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      technologies: ["React", "Redux", "Node.js", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com/pankaj/task-manager",
      liveUrl: "https://task-manager-demo.netlify.app",
      imageUrl: "/api/placeholder/400/250",
      status: "Completed",
      featured: true,
    },
    {
      title: "Weather App PWA",
      description:
        "A Progressive Web App that provides real-time weather information with beautiful UI, offline support, and location-based forecasts.",
      technologies: ["React", "PWA", "Weather API", "Tailwind CSS"],
      githubUrl: "https://github.com/pankaj/weather-pwa",
      liveUrl: "https://weather-pwa-demo.vercel.app",
      imageUrl: "/api/placeholder/400/250",
      status: "Completed",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "This responsive portfolio website built with React, featuring dark mode, smooth animations, and modern design principles.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      githubUrl: "https://github.com/pankaj/portfolio",
      liveUrl: "https://pankaj-portfolio.vercel.app",
      imageUrl: "/api/placeholder/400/250",
      status: "Completed",
      featured: false,
    },
    {
      title: "Social Media Clone",
      description:
        "A social media platform clone with user profiles, posts, comments, likes, and real-time messaging functionality.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Cloudinary",
      ],
      githubUrl: "https://github.com/pankaj/social-app",
      liveUrl: null,
      imageUrl: "/api/placeholder/400/250",
      status: "In Progress",
      featured: true,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  const ProjectCard = ({ project }) => (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
        project.featured ? "lg:col-span-2" : ""
      }mx-auto`}
    >
      {/* Project Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
        <Folder className="w-16 h-16 text-white opacity-80" />
        <div className="absolute top-4 right-4">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
          >
            {project.status}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-2 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex space-x-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="View source code"
          >
            <Github size={16} />
            <span className="text-sm">Code</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink size={16} />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a
            learning journey and a step forward in my development skills.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>
        </div>

        {/* More Projects CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Want to See More?</h3>
          <p className="text-lg mb-6">
            Check out my GitHub profile for more projects and contributions to
            open source.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://github.com/pankaj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <Github size={20} />
              <span>View GitHub Profile</span>
            </a>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Let's Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
