import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContentWrapper = styled.hgroup`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const WindowIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.main.accent};
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.2);
    cursor: pointer;
  }
`;

export const ThemeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

export const ThemeGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, minmax(25px, 1fr));
  gap: 2rem;
`;

export const ThemeIcon = styled(FontAwesomeIcon)`
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;
