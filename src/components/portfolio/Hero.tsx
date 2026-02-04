
import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import { config } from "@/config";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = config.personal.typingText;

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

        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src={config.personal.profileImage}
              alt={config.personal.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-slate-600 shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          {config.hero.greeting}
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
          {config.hero.description}
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {config.hero.socialLinks.map((link) => {
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
      </div>
    </section>
  );
};
