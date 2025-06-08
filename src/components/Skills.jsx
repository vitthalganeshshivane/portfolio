const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 75, icon: "⚛️" },
        { name: "JavaScript", level: 75, icon: "🟨" },
        { name: "HTML5", level: 90, icon: "🌐" },
        { name: "CSS3", level: 80, icon: "🎨" },
        { name: "Tailwind CSS", level: 70, icon: "💨" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 75, icon: "🟢" },
        { name: "Express.js", level: 75, icon: "⚡" },
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "REST APIs", level: 70, icon: "🔗" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 80, icon: "📚" },
        { name: "VS Code", level: 85, icon: "💻" },
        { name: "Postman", level: 60, icon: "📮" },
        { name: "npm/yarn", level: 70, icon: "📦" },
      ],
    },
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {skill.name}
          </span>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar key={skillIndex} skill={skill} />
              ))}
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Other Technologies I'm Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Next.js",
              "Socket.io",
              "Mongoose",
              "JWT",
              "Bcrypt",
              "Axios",
              "Material-UI",
              "Bootstrap",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Goals */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Currently Learning</h3>
          <p className="text-lg mb-6">
            I'm always expanding my skill set and staying up-to-date with the
            latest technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Redux", "TypeScript", "AWS"].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
