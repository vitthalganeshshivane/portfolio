import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Developer Intern",
      company: "Amika Softwares",
      location: "On-site",
      period: "May-2024 to June-2025",
      status: "Completed",
      type: "Internship",
      description: [
        "Developing full-stack web applications using MongoDB, Express.js, React, and Node.js",
        "Collaborating with senior developers to implement new features and optimize existing code",
        "Participating in code reviews and learning industry best practices",
        "Working with REST APIs and implementing responsive user interfaces",
        "Gaining hands-on experience with version control using Git and GitHub",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "Redux-toolkit",
        "HTML5",
        "CSS3",
      ],
    },
    // {
    //   title: "Freelance Web Developer",
    //   company: "Self-Employed",
    //   location: "Remote",
    //   period: "2023 - 2024",
    //   status: "Completed",
    //   type: "Freelance",
    //   description: [
    //     "Built responsive websites for small businesses and personal clients",
    //     "Converted design mockups into functional web applications",
    //     "Implemented modern UI/UX practices using React and Tailwind CSS",
    //     "Provided ongoing maintenance and support for client websites",
    //     "Managed project timelines and client communications",
    //   ],
    //   technologies: [
    //     "React",
    //     "HTML5",
    //     "CSS3",
    //     "JavaScript",
    //     "Tailwind CSS",
    //     "Figma",
    //   ],
    // },
    // {
    //   title: "Open Source Contributor",
    //   company: "Various Projects",
    //   location: "Remote",
    //   period: "2023 - Present",
    //   status: "Ongoing",
    //   type: "Volunteer",
    //   description: [
    //     "Contributing to open-source projects on GitHub",
    //     "Fixing bugs and implementing new features in community projects",
    //     "Learning collaborative development practices",
    //     "Participating in code reviews and discussions",
    //     "Building a portfolio of contributions to showcase skills",
    //   ],
    //   technologies: ["Git", "GitHub", "JavaScript", "React", "Node.js"],
    // },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Currently Doing":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Completed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Ongoing":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "Internship":
        return "🎓";
      case "Freelance":
        return "💼";
      case "Volunteer":
        return "🤝";
      default:
        return "🏢";
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my
            development skills
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{getTypeIcon(exp.type)}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-1 text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    <Briefcase size={18} />
                    <span>{exp.company}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(exp.status)}`}
                  >
                    {exp.status}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Responsibilities & Achievements:
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1.5 text-xs">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-lg mb-6">
            I'm always looking for new opportunities to grow and contribute to
            exciting projects.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
