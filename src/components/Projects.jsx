import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "DocSpace – Collaborative Document Editor",
      description:
        "DocSpace is a Google Docs–inspired collaborative document editor built from scratch. It supports rich-text editing with headings, font styles, tables, task lists, comments, rulers, and formatting tools. The editor is powered by TipTap and designed with a clean, productivity-focused UI. The project focuses heavily on editor internals, extensibility, and real-world document workflows.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TipTap",
        "Tailwind CSS",
        "shadcn/ui",
        "Radix UI",
        "Zustand",
      ],
      sourceCode:
        "https://github.com/vitthalganeshshivane/DocSpace-Collaborative-Document-Editor",
      liveUrl: "https://docspace-editor.vercel.app/",
      imageUrl:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=2000&auto=format&fit=crop",
      status: "Completed",
      featured: true,
    },
    {
      title: "Writeflow – Where Ideas Flow",
      description:
        "Writeflow is a modern, distraction-free writing and blogging platform focused on clean workflows and content creation. It enables users to write, edit, and manage posts with a smooth editor experience and a minimal, productivity-oriented UI. The project emphasizes structured writing, scalability, and real-world content publishing flows.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
      ],
      githubUrl: {
        frontend: "https://github.com/vitthalganeshshivane/Writeflow-Client",
        backend: "https://github.com/vitthalganeshshivane/Writeflow-Server",
      },
      liveUrl: "http://writeflow-blogs.vercel.app/",
      imageUrl:
        "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg",
      status: "Completed",
      featured: true,
    },
    {
      title: "MindGuard – Mental Health Detection & Assessment System",
      description:
        "MindGuard is an AI-powered mental health detection system designed to identify early signs of stress, anxiety, and depression. The project combines machine learning–based risk prediction with LLM-powered empathetic assessments and personalized suggestions. Built as a full-stack system, it focuses on real-world mental health workflows, safety considerations, and explainable AI-assisted decision support rather than diagnosis.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Machine Learning",
        "Google Gemini API",
      ],
      githubUrl: {
        frontend:
          "https://github.com/vitthalganeshshivane/mental-health-frontend",
        backend:
          "https://github.com/vitthalganeshshivane/mental-health-backend",
      },
      liveUrl: "https://mental-health-detection.vercel.app/",
      imageUrl:
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2000&auto=format&fit=crop",
      status: "Completed",
      featured: true,
    },
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
      liveUrl: "https://vroom45.vercel.app/",
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
          {project.githubUrl && (
            <>
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
            </>
          )}

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

          {project.sourceCode && (
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Source Code"
            >
              <Github size={16} />
              <span className="text-sm">Source Code</span>
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
              href="https://github.com/vitthalganeshshivane"
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
