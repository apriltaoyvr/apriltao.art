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
      delay: 1,
      staggerChildren: 0.5,
    },
  },
};

export const slideItem = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 25,
    },
  },
};


export const fadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.45,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.45,
    },
  },
};

export const fadeItem = {
  hidden: { opacity: 0 },
  visible: {
    delay: 0.5,
    opacity: 1,
  },
};