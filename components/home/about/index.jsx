import Biography from './Biography';
import Skills from './Skills';
import { StyledMain } from './index.styled';

const About = () => {
  return (
    <StyledMain id='about'>
      <Biography />
      <Skills />
    </StyledMain>
  );
};

export default About;