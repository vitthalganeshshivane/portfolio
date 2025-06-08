import { GraduationCap, Calendar, MapPin, BookOpen, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "BTech in Computer Science and Engineering",
      institution: "University Name",
      location: "City, State",
      period: "2023 - 2027",
      status: "Currently Pursuing",
      type: "Bachelor's Degree",
      description: [
        "Comprehensive study of computer science fundamentals including algorithms, data structures, and software engineering",
        "Focus on modern programming languages and frameworks",
        "Hands-on projects in web development, mobile development, and database management",
        "Active participation in coding competitions and technical events",
        "Maintaining strong academic performance while gaining practical experience",
      ],
      subjects: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems",
        "Web Technologies",
        "Object-Oriented Programming",
        "Machine Learning",
      ],
      gpa: "8.5/10",
      icon: "🎓",
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "Polytechnic College Name",
      location: "City, State",
      period: "2020 - 2023",
      status: "Completed",
      type: "Diploma",
      description: [
        "Strong foundation in engineering principles and problem-solving methodologies",
        "Developed analytical thinking and attention to detail",
        "Completed various technical projects and workshops",
        "Gained experience in technical documentation and project management",
        "This background provided excellent problem-solving skills that I now apply to software development",
      ],
      subjects: [
        "Engineering Mathematics",
        "Technical Drawing",
        "Materials Science",
        "Thermodynamics",
        "Manufacturing Processes",
        "Quality Control",
        "Project Management",
        "Workshop Technology",
      ],
      gpa: "8.2/10",
      icon: "⚙️",
    },
  ];

  const certifications = [
    {
      name: "Full Stack Web Development",
      provider: "Online Course Platform",
      date: "2023",
      credential: "Certificate ID: FWD2023001",
    },
    {
      name: "React Development",
      provider: "React Training Institute",
      date: "2024",
      credential: "Certificate ID: REACT2024001",
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      provider: "FreeCodeCamp",
      date: "2023",
      credential: "Verified Certificate",
    },
    {
      name: "MongoDB for Developers",
      provider: "MongoDB University",
      date: "2024",
      credential: "M001 Certificate",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Currently Pursuing":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Completed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My educational journey that shaped my technical foundation and
            problem-solving approach
          </p>
        </div>

        {/* Formal Education */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-3xl">{edu.icon}</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {edu.type}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    <GraduationCap size={18} />
                    <span>{edu.institution}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award size={16} />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 lg:mt-0">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(edu.status)}`}
                  >
                    {edu.status}
                  </span>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                    <BookOpen size={18} />
                    <span>Academic Highlights:</span>
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {edu.description.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1.5 text-xs">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Subjects:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {edu.subjects.map((subject, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-sm font-medium text-center"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications & Additional Learning
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {cert.provider}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Completed: {cert.date}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {cert.credential}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Learning Goals */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Continuous Learning Journey
          </h3>
          <p className="text-lg mb-6">
            Education doesn't stop at graduation. I'm committed to lifelong
            learning and staying updated with the latest technologies.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold mb-2">Next Goals</h4>
              <p className="text-sm">
                Cloud Computing Certification (AWS/Azure)
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold mb-2">Learning</h4>
              <p className="text-sm">Advanced React Patterns & System Design</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold mb-2">Exploring</h4>
              <p className="text-sm">Machine Learning & Data Science</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
