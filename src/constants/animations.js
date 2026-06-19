export const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -6,  transition: { duration: 0.2, ease: 'easeIn' } },
};

export const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export const fadeInVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

export const slideInLeft = {
  hidden:  { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

export const hoverCard = {
  rest:  { y: 0,  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.07)' },
  hover: { y: -4, boxShadow: '0 12px 28px -4px rgb(0 0 0 / 0.14)', transition: { duration: 0.2 } },
};
