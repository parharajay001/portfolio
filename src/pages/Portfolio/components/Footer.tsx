import { personalInfo } from '../../../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="border-t border-border py-6 px-4">
      <div className="max-w-5xl mx-auto font-mono text-xs text-dim flex flex-col sm:flex-row justify-between gap-2">
        <span>// built with react + vite · © {new Date().getFullYear()} {personalInfo.name}</span>
        <span className="text-primary">$ exit 0</span>
      </div>
    </footer>
  );
};
