import { StyledCard } from '../About.styled.jsx';
import { motion } from 'framer-motion';
import { slideItem } from '../../../utility/framer';

const SkillCard = ({ skill, index }) => {
  return (
    <StyledCard
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      variants={slideItem}
    >
      <motion.li>{skill}</motion.li>
    </StyledCard>
  );
};

export default SkillCard;
