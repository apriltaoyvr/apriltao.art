import styled from 'styled-components';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

export const StyledMarquee = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

export const MarqueeLine = styled(Marquee)`
  overflow: hidden;
  user-select: none;
`;

export const TextWrapper = styled(motion.hgroup)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  padding: 0 0.5rem;
  text-transform: uppercase;

  @media screen and (min-width: 1920px) {
    gap: 2rem;
  }
`;

export const SolidText = styled(motion.h1)`
  font-size: clamp(5.5rem, 5.1538rem + 1.5385vw, 9rem);
  overflow: hidden;
  color: ${({ theme }) => theme.main.accent};
`;

export const HollowText = styled(motion.h1)`
  font-size: clamp(5.5rem, 5.1538rem + 1.5385vw, 9rem);
  overflow: hidden;
  color: transparent;
  -webkit-text-stroke: 1.5px ${({ theme }) => theme.main.accent};
`;
