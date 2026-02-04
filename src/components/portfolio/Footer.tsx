import { config } from "@/config";

export const Footer = () => {
    return (
        <div className="text-center mt-12 py-8 border-t border-slate-800">
            <p className="text-slate-400 font-mono text-sm">
                © {new Date().getFullYear()} {config.personal.name}. All Rights Reserved.
            </p>
        </div>
    );
};
