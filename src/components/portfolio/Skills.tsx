
import { Code } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "JavaScript"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Git", "AWS", "Linux", "CI/CD", "Kubernetes"]
    },
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "Go", "SQL"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700 mb-4">
            <Code className="w-4 h-4 text-green-400" />
            <span className="text-green-400 font-mono text-sm">skills.json</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-100 mb-4 font-mono">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between p-2 bg-slate-900/50 rounded-lg border border-slate-600"
                    style={{ animationDelay: `${index * 100 + skillIndex * 50}ms` }}
                  >
                    <span className="text-slate-300 font-mono text-sm">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? "bg-blue-400" : "bg-slate-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
