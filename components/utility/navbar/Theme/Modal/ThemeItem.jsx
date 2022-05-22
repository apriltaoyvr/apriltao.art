import { motion } from 'framer-motion';
import { ThemeIcon } from '../index.styled';

const ThemeItem = (props) => {
  const setTheme = (color) => {
    props.setTheme(color);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className='theme-wrapper'
    >
      <ThemeIcon
        icon='fa-solid fa-circle'
        size='3x'
        style={props.style}
        onClick={() => setTheme(props.color)}
      ></ThemeIcon>
    </motion.div>
  );
};

export default ThemeItem;
