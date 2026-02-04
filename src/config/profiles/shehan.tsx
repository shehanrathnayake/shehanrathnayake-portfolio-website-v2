
import {
    Mail, Linkedin, Github, PenTool,
    Terminal, Code, Cpu, Globe,
    Server, Database, Box, GitBranch,
    Cloud, Settings, FileCode, Layers,
    Calendar, BookOpen, ExternalLink,
    User, Coffee
} from "lucide-react";

export const shehanProfile = {
    personal: {
        name: "Shehan Rathnayake",
        title: "Software Engineer",
        email: "shehanr.rathnayake@gmail.com",
        role: "Software Engineer", // Used for the typing effect
        typingText: "Software Engineer",
        location: "Colombo",
        experienceYears: "2",
        passion: "Clean Code & Innovation",
        profileImage: "/profile.jpeg",
        social: {
            linkedin: "https://linkedin.com/in/shehanrathnayake",
            github: "https://github.com/shehanrathnayake",
            medium: "https://medium.com/@shehan_rathnayake",
            email: "mailto:shehanr.rathnayake@gmail.com"
        }
    },

    hero: {
        greeting: "Hello World!",
        description: "Passionate about creating elegant solutions to complex problems. I build scalable applications with modern technologies and clean code practices.",
        socialLinks: [
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
        ]
    },

    about: {
        codeBlock: {
            name: "Shehan Rathnayake",
            title: "Software Engineer",
            location: "Colombo",
            experience: 2,
            passion: "Clean Code & Innovation"
        },
        description: [
            "I'm a passionate software engineer with a love for creating innovative solutions and writing clean, efficient code. My journey in programming started with curiosity and has evolved into a career dedicated to building applications that make a difference.",
            "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date with industry trends."
        ],
        stats: [
            {
                icon: Terminal,
                value: "2+",
                label: "Years Exp",
                color: "text-green-400"
            },
            {
                icon: Code,
                value: "10+",
                label: "Projects Delivered",
                color: "text-blue-400"
            },
            {
                icon: Cpu,
                value: "15+",
                label: "Technologies",
                color: "text-purple-400"
            }
        ]
    },

    experience: [
        {
            title: "Software Engineer",
            company: "DevBranch (Pvt) Ltd",
            companyLink: "https://devbranch.net",
            period: "2024 - Present",
            description: "Working on full-stack development projects using modern technologies. Experience includes building responsive frontends with React and robust backends using .NET and Python.",
            tech: ["React", ".NET", "Python"]
        }
    ],

    skills: [
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: <Globe className="w-5 h-5 text-blue-400" /> },
                { name: "TypeScript", icon: <FileCode className="w-5 h-5 text-blue-600" /> },
                { name: "JavaScript", icon: <Code className="w-5 h-5 text-yellow-400" /> },
                { name: "Tailwind CSS", icon: <Layers className="w-5 h-5 text-cyan-400" /> },
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: ".NET", icon: <Cpu className="w-5 h-5 text-purple-600" /> },
                { name: "Python", icon: <Code className="w-5 h-5 text-blue-500" /> },
                { name: "FastAPI", icon: <Server className="w-5 h-5 text-teal-400" /> },
                { name: "MySQL", icon: <Database className="w-5 h-5 text-blue-600" /> },
                { name: "SQLServer", icon: <Database className="w-5 h-5 text-blue-600" /> },
            ]
        },
        {
            title: "DevOps & Tools",
            skills: [
                { name: "Azure", icon: <Cloud className="w-5 h-5 text-blue-400" /> },
                { name: "Docker", icon: <Box className="w-5 h-5 text-blue-500" /> },
                { name: "Git", icon: <GitBranch className="w-5 h-5 text-orange-500" /> },
            ]
        }
    ],

    projects: [
        {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
            tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
            github: "#",
            demo: "#",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
        },
        {
            title: "Task Management App",
            description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
            tech: ["Vue.js", "Express", "Socket.io", "MongoDB", "AWS"],
            github: "#",
            demo: "#",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
        },
        {
            title: "AI Chat Application",
            description: "Modern chat application with AI integration, real-time messaging, and smart response suggestions using machine learning.",
            tech: ["Next.js", "Python", "FastAPI", "OpenAI", "Redis"],
            github: "#",
            demo: "#",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
        }
    ],

    blog: {
        posts: [
            {
                title: "Building Scalable React Applications",
                description: "A comprehensive guide to architecting React applications that can grow with your team and user base. Learn about component patterns, state management, and performance optimization.",
                publishDate: "2024-01-15",
                readTime: "8 min read",
                tags: ["React", "Architecture", "Performance"],
                url: "https://medium.com/@shehan_rathnayake/building-scalable-react-applications-123",
                image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"
            },
            {
                title: "Modern TypeScript Best Practices",
                description: "Explore advanced TypeScript techniques and patterns that will make your code more maintainable, type-safe, and developer-friendly.",
                publishDate: "2024-01-08",
                readTime: "6 min read",
                tags: ["TypeScript", "Best Practices", "Developer Experience"],
                url: "https://medium.com/@shehan_rathnayake/modern-typescript-best-practices-456",
                image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop"
            },
            {
                title: "The Future of Web Development",
                description: "Insights into emerging technologies and trends that are shaping the future of web development, from AI integration to new frameworks.",
                publishDate: "2024-01-01",
                readTime: "10 min read",
                tags: ["Web Development", "Trends", "Innovation"],
                url: "https://medium.com/@shehan_rathnayake/future-of-web-development-789",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
            }
        ]
    },

    contact: {
        title: "Get In Touch",
        description: "Have a project in mind or want to collaborate? I'd love to hear from you!",
        cta: {
            text: "Read my blog on Medium",
            url: "https://medium.com/@shehan_rathnayake"
        }
    }
};
