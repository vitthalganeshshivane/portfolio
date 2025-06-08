import { Code, Lightbulb, Users, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Passionate Coder",
      description:
        "Love turning ideas into reality through clean, efficient code",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Quick Learner",
      description: "Always eager to learn new technologies and best practices",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Enjoy collaborating with others to solve complex problems",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solver",
      description:
        "Thrive on tackling challenging problems with creative solutions",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, journey, and what drives me as
            a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Biography */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I began my educational journey with a{" "}
                <strong>Diploma in Mechanical Engineering</strong>, where I
                developed a strong foundation in problem-solving and analytical
                thinking. However, my passion for technology and innovation led
                me to pursue a different path.
              </p>
              <p>
                Currently, I'm pursuing my{" "}
                <strong>BTech in Computer Science and Engineering</strong>,
                where I'm diving deep into the world of software development.
                This transition has been incredibly rewarding, as it combines my
                engineering mindset with my love for coding.
              </p>
              <p>
                I'm particularly passionate about{" "}
                <strong>full-stack development</strong> and enjoy working with
                modern technologies like React, Node.js, and MongoDB. Every
                project is an opportunity to learn something new and push the
                boundaries of what I can create.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or brainstorming ideas for
                my next project. I believe in continuous learning and am always
                excited to take on new challenges.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              What Drives Me
            </h3>
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 text-blue-600 dark:text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Fun Facts About Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                100+
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Hours of coding practice
              </p>
            </div>
            <div className="p-6 rounded-lg bg-green-50 dark:bg-green-900/20">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                10+
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Projects completed
              </p>
            </div>
            <div className="p-6 rounded-lg bg-purple-50 dark:bg-purple-900/20">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                5+
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Technologies mastered
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
