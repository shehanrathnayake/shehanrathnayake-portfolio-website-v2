
import { Code, Database, Server, Globe, Cpu, GitBranch, Cloud, Terminal, Layers, Box, Settings, FileCode } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <Globe className="w-5 h-5 text-blue-400" /> },
        { name: "TypeScript", icon: <FileCode className="w-5 h-5 text-blue-600" /> },
        { name: "JavaScript", icon: <Code className="w-5 h-5 text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <Layers className="w-5 h-5 text-cyan-400" /> },
        // { name: "Next.js", icon: <Globe className="w-5 h-5 text-gray-300" /> },
        // { name: "Vue.js", icon: <Globe className="w-5 h-5 text-green-400" /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: ".NET", icon: <Cpu className="w-5 h-5 text-purple-600" /> },
        // { name: "Node.js", icon: <Server className="w-5 h-5 text-green-500" /> },
        { name: "Python", icon: <Code className="w-5 h-5 text-blue-500" /> },
        // { name: "Express", icon: <Server className="w-5 h-5 text-gray-400" /> },
        { name: "FastAPI", icon: <Server className="w-5 h-5 text-teal-400" /> },
        { name: "MySQL", icon: <Database className="w-5 h-5 text-blue-600" /> },
        { name: "SQLServer", icon: <Database className="w-5 h-5 text-blue-600" /> },
        // { name: "MongoDB", icon: <Database className="w-5 h-5 text-green-600" /> }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Azure", icon: <Cloud className="w-5 h-5 text-blue-400" /> },
        { name: "Docker", icon: <Box className="w-5 h-5 text-blue-500" /> },
        { name: "Git", icon: <GitBranch className="w-5 h-5 text-orange-500" /> },
        // { name: "Linux", icon: <Terminal className="w-5 h-5 text-gray-300" /> },
        // { name: "CI/CD", icon: <Settings className="w-5 h-5 text-purple-400" /> },
        // { name: "Kubernetes", icon: <Cloud className="w-5 h-5 text-blue-400" /> }
      ]
    },
    // {
    //   title: "Languages",
    //   skills: [
    //     { name: "JavaScript", icon: <Code className="w-5 h-5 text-yellow-400" /> },
    //     { name: "TypeScript", icon: <FileCode className="w-5 h-5 text-blue-600" /> },
    //     { name: "Python", icon: <Code className="w-5 h-5 text-blue-500" /> },
    //     { name: "Java", icon: <Cpu className="w-5 h-5 text-red-500" /> },
    //     { name: "Go", icon: <Code className="w-5 h-5 text-cyan-500" /> },
    //     { name: "SQL", icon: <Database className="w-5 h-5 text-gray-400" /> }
    //   ]
    // }
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-100 mb-4 font-mono">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg border border-slate-600 hover:border-slate-500 transition-colors"
                    style={{ animationDelay: `${index * 100 + skillIndex * 50}ms` }}
                  >
                    {skill.icon}
                    <span className="text-slate-300 font-mono text-sm">{skill.name}</span>
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
