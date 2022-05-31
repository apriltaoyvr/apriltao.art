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
  height: min-content;

  margin: auto;
  padding: 1rem 1rem 2rem 1rem;
  gap: 1rem;

  background: ${({ theme }) => theme.main.bg};
  border: 1px solid ${({ theme }) => theme.main.accent};
`;

export const WindowBar = styled.hgroup`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const WindowIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.main.accent};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.main.accentSecondary};
    cursor: pointer;
  }
`;

export const StyledH3 = styled.h3`
  -webkit-text-stroke: 1.5px ${({ theme }) => theme.main.accent};
`;
