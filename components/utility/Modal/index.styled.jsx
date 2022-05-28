import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  height: min(30%, 300px);

  margin: auto;
  padding: 1rem;
  gap: 4rem;

  background: ${({ theme }) => theme.main.bg};
  border: 1px solid ${({ theme }) => theme.main.accent};
`;
