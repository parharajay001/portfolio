import type { ReactNode } from 'react';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const TerminalWindow = ({ title = 'bash', children, className = '' }: TerminalWindowProps) => {
  return (
    <div className={`rounded-lg border border-border bg-background-secondary/70 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40 ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-background/40">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-dim">{title}</span>
      </div>
      <div className="p-5 md:p-6 font-mono text-sm">{children}</div>
    </div>
  );
};
