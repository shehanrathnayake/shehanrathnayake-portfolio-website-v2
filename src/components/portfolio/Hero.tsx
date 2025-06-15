
import { Code, Terminal, Mail, Linkedin, Github, PenTool } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Software Engineer";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:shehanr.rathnayake@gmail.com",
      icon: Mail,
      color: "text-red-400 hover:text-red-300",
      bgColor: "hover:bg-red-500/10"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/shehanrathnayake",
      icon: Linkedin,
      color: "text-blue-400 hover:text-blue-300",
      bgColor: "hover:bg-blue-500/10"
    },
    {
      name: "GitHub",
      href: "https://github.com/shehanrathnayake",
      icon: Github,
      color: "text-slate-300 hover:text-white",
      bgColor: "hover:bg-slate-500/10"
    },
    {
      name: "Blog",
      href: "https://medium.com/@shehan_rathnayake",
      icon: PenTool,
      color: "text-green-400 hover:text-green-300",
      bgColor: "hover:bg-green-500/10"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 inline-flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
          <Terminal className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-mono text-sm">~/portfolio</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Hello World!
        </h1>
        
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-slate-300 mb-2">I'm a</p>
          <div className="font-mono text-2xl md:text-3xl text-blue-400 min-h-[40px] flex items-center justify-center">
            <span className="border-r-2 border-blue-400 animate-pulse pr-1">
              {text}
            </span>
          </div>
        </div>
        
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating elegant solutions to complex problems. 
          I build scalable applications with modern technologies and clean code practices.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-10">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className={`group flex items-center justify-center w-12 h-12 rounded-full border border-slate-600 ${link.bgColor} transition-all duration-200 hover:scale-110 hover:border-slate-500`}
                title={link.name}
              >
                <IconComponent className={`w-5 h-5 ${link.color} transition-colors duration-200`} />
              </a>
            );
          })}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            <Code className="w-5 h-5" />
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};
