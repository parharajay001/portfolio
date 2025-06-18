import {
  HeroBackground,
  AboutBackground,
  ExperienceBackground,
  ProjectsBackground,
  ContactBackground,
} from '../assets/images';
import { useEffect } from 'react';
import './AnimatedBackground.css';

export const AnimatedBackground = () => {
  useEffect(() => {
    // Set CSS variables for the background images
    const root = document.documentElement;
    root.style.setProperty('--bg-1', `url(${HeroBackground})`);
    root.style.setProperty('--bg-2', `url(${AboutBackground})`);
    root.style.setProperty('--bg-3', `url(${ContactBackground})`);
    root.style.setProperty('--bg-4', `url(${ProjectsBackground})`);
    root.style.setProperty('--bg-5', `url(${ExperienceBackground})`);
  }, []);

  return (
    <div className="animated-background">
      <div className="background-overlay" />
    </div>
  );
};
