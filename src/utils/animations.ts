export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fadeIn = (delay: number = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay },
});

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down', delay: number = 0) => {
  const directionMap = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: 50 },
    down: { x: 0, y: -50 },
  };

  return {
    initial: { opacity: 0, ...directionMap[direction] },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.6, delay },
  };
};
