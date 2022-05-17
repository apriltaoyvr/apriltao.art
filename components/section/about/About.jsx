import Biography from './Biography';
import SkillSection from './Skills/SkillSection';
import { StyledSection } from './About.styled';

const About = () => {
  return (
    <StyledSection id='about'>
      <Biography />
      <SkillSection/>
    </StyledSection>
  );
};

export default About;