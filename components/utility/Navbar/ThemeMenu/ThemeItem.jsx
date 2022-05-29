import { Circle } from './index.styled';

const ThemeItem = (props) => {
  const setTheme = (palette) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', JSON.stringify(palette));
    }
    props.setTheme(palette);
  };

  return (
    <Circle
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(props.palette)}
      background={props.background}
      border={props.border}
    ></Circle>
  );
};

export default ThemeItem;
