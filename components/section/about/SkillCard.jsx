import { StyledCard } from './About.styled.jsx';

const SkillCard = ({ skill }) => {
  return (
    <StyledCard>
      <li>{skill}</li>
    </StyledCard>
  );
};

export default SkillCard;