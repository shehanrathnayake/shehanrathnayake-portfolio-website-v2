
import { Mail, Terminal } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2 text-sm text-slate-400 font-mono">
                  <span>// Contact Information</span>
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-slate-300">
                    <span className="text-blue-400">email:</span> <span className="text-green-400">"your.email@example.com"</span>
                  </div>
                  <div className="text-slate-300">
                    <span className="text-blue-400">linkedin:</span> <span className="text-green-400">"linkedin.com/in/yourprofile"</span>
                  </div>
                  <div className="text-slate-300">
                    <span className="text-blue-400">github:</span> <span className="text-green-400">"github.com/yourusername"</span>
                  </div>
                </div>
              </div>
              
              <div className="text-slate-400">
                <p className="mb-4">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <p>
                  Response time: Usually within 24 hours ⚡
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-slate-300 font-mono text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-slate-100 focus:border-blue-500 focus:outline-none transition-colors font-mono"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 font-mono text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-slate-100 focus:border-blue-500 focus:outline-none transition-colors font-mono"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 font-mono text-sm mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-slate-100 focus:border-blue-500 focus:outline-none transition-colors font-mono resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-slate-800">
          <p className="text-slate-400 font-mono text-sm">
            © 2024 Your Name. Built with React + Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};
