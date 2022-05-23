import Biography from './Biography';
import Skills from './Skills';
import { StyledSection } from './index.styled';

const About = () => {
  return (
    <StyledSection id='about'>
      <Biography />
      <Skills />
    </StyledSection>
  );
};

export default About;