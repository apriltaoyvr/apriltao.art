export const slideContainer = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 25,
      staggerChildren: 0.75,
    },
  },
};

export const slideSubContainer = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 25,
      delay: 0.5,
      staggerChildren: 0.5,
    },
  },
};

export const slideItem = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 25,
    },
  },
};

export const langContainer = {
  hidden: {
    transition: {
      type: 'spring',
      delay: 1,
      staggerChildren: 0.25,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 25,
      staggerChildren: 0.25,
      staggerDirection: -1,
    },
  },
};

export const langChild = {
  hidden: { opacity: 0, y: -10 },
  exit: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export const fadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 25,
      staggerChildren: 0.25,
    },
  },
};

export const fadeItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};
