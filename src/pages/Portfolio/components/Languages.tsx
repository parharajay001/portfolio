import { languages } from '../../../data/portfolioData';

export const Languages = () => {
  return (
    <section id="languages" className="pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-lg border border-border bg-background-secondary/50 p-5 font-mono text-sm flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-dim prompt">echo $LANGUAGES</span>
          <span className="text-dim">→</span>
          {languages.map((l, i) => (
            <span key={l} className="text-primary">
              {l}
              {i < languages.length - 1 && <span className="text-dim"> ·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
