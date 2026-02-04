import React from "react";
import { User, Terminal } from "lucide-react";
import { config } from "@/config";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700 mb-4">
            <User className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-mono text-sm">about_me.js</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Code Block Section */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 text-sm text-slate-400 font-mono">
                <Terminal className="w-4 h-4" />
                <span>const developer = {"{"}</span>
              </div>
              <div className="space-y-2 pl-4 font-mono text-sm">
                <div className="text-slate-300">
                  <span className="text-blue-400">name:</span> <span className="text-green-400">"{config.about.codeBlock.name}"</span>,
                </div>
                <div className="text-slate-300">
                  <span className="text-blue-400">title:</span> <span className="text-green-400">"{config.about.codeBlock.title}"</span>,
                </div>
                <div className="text-slate-300">
                  <span className="text-blue-400">location:</span> <span className="text-green-400">"{config.about.codeBlock.location}"</span>,
                </div>
                <div className="text-slate-300">
                  <span className="text-blue-400">experience:</span> <span className="text-yellow-400">{config.about.codeBlock.experience}</span>,
                </div>
                <div className="text-slate-300">
                  <span className="text-blue-400">passion:</span> <span className="text-green-400">"{config.about.codeBlock.passion}"</span>
                </div>
              </div>
              <div className="text-sm text-slate-400 font-mono mt-4">{"}"};
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="lg:col-span-1 space-y-6">
            {config.about.description.map((paragraph, index) => (
              <p key={index} className="text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-3 gap-4">
              {config.about.stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-4 bg-slate-800/20 rounded-lg border border-slate-700">
                    <Icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold text-slate-100">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
