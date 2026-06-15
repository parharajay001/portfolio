import './AnimatedBackground.css';

export const AnimatedBackground = () => {
  return (
    <div className="animated-background" aria-hidden="true">
      <div className="grid-overlay" />
      <div className="scanlines" />
    </div>
  );
};
