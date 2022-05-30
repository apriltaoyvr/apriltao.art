import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 15.625rem);
  gap: 16px;
  justify-content: center;
  list-style: none;

  @media screen and (min-width: 75rem) {
    grid-template-columns: repeat(3, 15.625rem);
  }
`;

export const StyledCard = styled(motion.div)`
  border: 1px solid ${({ theme }) => theme.main.accentSecondary};
  padding: 1rem;
  width: 250px;
  text-align: center;
  &:hover {
    border: 1px solid ${({ theme }) => theme.main.accent};
  }
`;
