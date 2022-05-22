import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledBackdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.nav.bg};
`;

export const StyledModal = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(25%, 500px, 90%);
  height: min(50%, 400px);

  margin: auto;
  padding: 1rem;
  gap: 4rem;

  background: ${({ theme }) => theme.main.bg};
  border: 1px solid ${({ theme }) => theme.main.accent};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const ThemeGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(25px, 1fr));
  gap: 2rem;

  & .theme-wrapper:last-child {
    grid-column-start: 2;
  }
`;

export const ThemeIcon = styled(FontAwesomeIcon)`
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;
