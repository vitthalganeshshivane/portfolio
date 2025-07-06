import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Vroom45 – Ride Booking App",
      description:
        "A full-stack Uber clone named Vroom45 that enables users to book rides in real time. Built with modern MERN technologies, this app features user authentication, location tracking, fare calculation, driver-passenger interaction. The UI is mobile-optimized with ongoing enhancements for desktop support.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
        "Socket.io",
        "Redux Toolkit",
      ],
      githubUrl: {
        frontend: "https://github.com/vitthalganeshshivane/Ubar_Clone-frontend",
        backend: "https://github.com/vitthalganeshshivane/Ubar_Clone-backend",
      },
      liveUrl: "https://vitthalganeshshivane.vercel.app/",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D5612AQGEj1_pOIxVIA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1706172015188?e=2147483647&v=beta&t=tByxAL12GywZbzKlapnj_g6uE0KFEV04HNxkHPPT_1A",
      status: "Completed",
      featured: true,
    },
    {
      title: "Digital Classroom Platform",
      description:
        "A modern web-based classroom management system designed for teachers and students. It includes features such as user authentication, assignment uploads by teacher, live class links, notice board, and subject-wise study material. Built with a scalable MERN stack architecture and responsive UI.",
      technologies: [
        "React",
        "Express.js",
        "Node.js",
        "Socket.io",
        "MongoDB",
        "Tailwind CSS",
        "Cloudinary",
      ],
      githubUrl: {
        frontend:
          "https://github.com/vitthalganeshshivane/digital-classroom-frontend",
        backend:
          "https://github.com/vitthalganeshshivane/digital-classroom-backend",
      },
      liveUrl: "https://digital-classroom-gamma.vercel.app/",
      imageUrl:
        "https://www.bthaber.com/wp-content/uploads/2020/06/GessTurkiye_UzaktanE%C4%9Fitim_Gorsel02-1024x1024.jpg",
      status: "Completed",
      featured: true,
    },
    // {
    //   title: "Weather App PWA",
    //   description:
    //     "A Progressive Web App that provides real-time weather information with beautiful UI, offline support, and location-based forecasts.",
    //   technologies: ["React", "PWA", "Weather API", "Tailwind CSS"],
    //   githubUrl: "https://github.com/pankaj/weather-pwa",
    //   liveUrl: "https://weather-pwa-demo.vercel.app",
    //   imageUrl: "/api/placeholder/400/250",
    //   status: "Completed",
    //   featured: false,
    // },
    // {
    //   title: "Portfolio Website",
    //   description:
    //     "This responsive portfolio website built with React, featuring dark mode, smooth animations, and modern design principles.",
    //   technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    //   githubUrl: "https://github.com/pankaj/portfolio",
    //   liveUrl: "https://pankaj-portfolio.vercel.app",
    //   imageUrl: "/api/placeholder/400/250",
    //   status: "Completed",
    //   featured: false,
    // },
    // {
    //   title: "Social Media Clone",
    //   description:
    //     "A social media platform clone with user profiles, posts, comments, likes, and real-time messaging functionality.",
    //   technologies: [
    //     "React",
    //     "Node.js",
    //     "Express",
    //     "MongoDB",
    //     "Socket.io",
    //     "Cloudinary",
    //   ],
    //   githubUrl: "https://github.com/pankaj/social-app",
    //   liveUrl: null,
    //   imageUrl: "/api/placeholder/400/250",
    //   status: "In Progress",
    //   featured: true,
    // },
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
        {/* <Folder className="w-16 h-16 text-white opacity-80" /> */}
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
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
            href={project.githubUrl?.frontend}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="View source code"
          >
            <Github size={16} />
            <span className="text-sm">Frontend</span>
          </a>
          <a
            href={project.githubUrl?.backend}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="View source code"
          >
            <Github size={16} />
            <span className="text-sm">Backend</span>
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
        {/* <div>
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
        </div> */}

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
