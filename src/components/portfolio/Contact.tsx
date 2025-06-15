
import { Mail, Terminal, ExternalLink, PenTool, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700 mb-4">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-mono text-sm">contact.md</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Information */}
            <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2 text-sm text-slate-400 font-mono">
                <span>// Contact Information</span>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="text-slate-300">
                  <span className="text-blue-400">email:</span> <span className="text-green-400">"shehanr.rathnayake@gmail.com"</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-blue-400">linkedin:</span> <span className="text-green-400">"linkedin.com/in/shehanrathnayake"</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-blue-400">github:</span> <span className="text-green-400">"github.com/shehanrathnayake"</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-blue-400">blog:</span> <span className="text-green-400">"medium.com/@shehan_rathnayake"</span>
                </div>
              </div>
            </div>
            
            {/* Additional Information */}
            <div className="text-slate-400">
              <p className="mb-4">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <p className="mb-4">
                Check out my latest thoughts and technical articles on my blog.
              </p>
              <a
                href="https://medium.com/@shehan_rathnayake"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm"
              >
                <PenTool className="w-4 h-4" />
                <span>Read my blog on Medium</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <p className="mt-4 text-sm">
                Response time: Usually within 24 hours ⚡
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-slate-800">
          <p className="text-slate-400 font-mono text-sm">
            © 2025 Shehan Rathnayake. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
