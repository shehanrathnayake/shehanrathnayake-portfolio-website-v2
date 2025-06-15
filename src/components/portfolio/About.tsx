
import React from "react";
import { User, Code, Terminal, Coffee } from "lucide-react";

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

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Photo Section */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4 text-sm text-slate-400 font-mono">
                  <Terminal className="w-4 h-4" />
                  <span>profile.jpg</span>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                    alt="Profile"
                    className="w-48 h-48 rounded-lg object-cover border-2 border-slate-600 shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono mt-2 text-center">
                  300x300px • 24KB
                </div>
              </div>
            </div>
          </div>

          {/* Code Block Section */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 text-sm text-slate-400 font-mono">
                <Terminal className="w-4 h-4" />
                <span>const developer = {"{"}</span>
              </div>
              <div className="space-y-2 pl-4 font-mono text-sm">
                <div className="text-slate-300">
                  <span className="text-blue-400">name:</span> <span className="text-green-400">"Your Name"</span>,
                </div>
                <div className="text-slate-300">
                  <span className="text-blue-400">title:</span> <span className="text-green-400">"Software Engineer"</span>,
                </div>
                <div className="text-slate-300">
                  <span className="text-blue-400">location:</span> <span className="text-green-400">"Your Location"</span>,
                </div>
                <div className="text-slate-300">
                  <span className="text-blue-400">experience:</span> <span className="text-yellow-400">3</span>,
                </div>
                <div className="text-slate-300">
                  <span className="text-blue-400">passion:</span> <span className="text-green-400">"Clean Code & Innovation"</span>
                </div>
              </div>
              <div className="text-sm text-slate-400 font-mono mt-4">{"}"};
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="lg:col-span-1 space-y-6">
            <p className="text-slate-300 leading-relaxed">
              I'm a passionate software engineer with a love for creating innovative solutions 
              and writing clean, efficient code. My journey in programming started with curiosity 
              and has evolved into a career dedicated to building applications that make a difference.
            </p>
            
            <p className="text-slate-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in continuous learning and staying up-to-date with industry trends.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-800/20 rounded-lg border border-slate-700">
                <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-100">50+</div>
                <div className="text-sm text-slate-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-slate-800/20 rounded-lg border border-slate-700">
                <Terminal className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-100">3+</div>
                <div className="text-sm text-slate-400">Years Exp</div>
              </div>
              <div className="text-center p-4 bg-slate-800/20 rounded-lg border border-slate-700">
                <Coffee className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-100">∞</div>
                <div className="text-sm text-slate-400">Coffee Cups</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
