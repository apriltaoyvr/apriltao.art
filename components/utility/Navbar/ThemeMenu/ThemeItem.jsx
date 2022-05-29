import { Circle } from './index.styled';

const ThemeItem = (props) => {
  const setTheme = (theme) => {
    props.setTheme(theme);
  };

  return (
    <Circle
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(props.theme)}
      background={props.background}
      border={props.border}
    ></Circle>
  );
};

export default ThemeItem;
