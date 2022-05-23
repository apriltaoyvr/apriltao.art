import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WorkWrapper = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 80%;
  justify-content: center;
  gap: 2rem;
  padding-top: 2rem;
  
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LinkWrapper = styled(motion.div)`
  filter: opacity(0.9);
  
  &:hover {
    filter: opacity(1);
    cursor: pointer;
  }
`;