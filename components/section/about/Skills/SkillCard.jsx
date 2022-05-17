import { StyledCard } from '../About.styled.jsx';
import { motion } from 'framer-motion';

const SkillCard = ({ skill }) => {
  return (
    <StyledCard>
      <motion.li>{skill}</motion.li>
    </StyledCard>
  );
};

export default SkillCard;