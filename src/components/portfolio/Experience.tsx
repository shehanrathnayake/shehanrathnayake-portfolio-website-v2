
import { Terminal } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "DevBranch (Pvt) Ltd",
      companyLink: "https://devbranch.net",
      period: "2024 - Present",
      description: "Working on full-stack development projects using modern technologies. Experience includes building responsive frontends with React and robust backends using .NET and Python.",
      tech: ["React", ".NET", "Python"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700 mb-4">
            <Terminal className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-mono text-sm">experience.log</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Work Experience
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="relative bg-slate-800/30 border border-slate-700 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 font-mono">
                    {exp.title}
                  </h3>
                  <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold">{exp.company}</a>
                </div>
                <div className="bg-slate-700/50 px-4 py-2 rounded-lg border border-slate-600 mt-2 lg:mt-0">
                  <span className="text-slate-300 font-mono text-sm">{exp.period}</span>
                </div>
              </div>

              <p className="text-slate-400 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-mono border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
