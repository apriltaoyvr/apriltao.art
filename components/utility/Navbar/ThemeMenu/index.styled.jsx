import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ThemeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

export const ThemeGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(25px, 1fr));
  gap: 2rem;
`;

export const Circle = styled(motion.div)`
  background: ${(props) => props.background};
  border: 1px solid ${(props) => props.border};

  aspect-ratio: 1;
  min-width: 50px;

  &:hover {
    cursor: pointer;
  }
`;