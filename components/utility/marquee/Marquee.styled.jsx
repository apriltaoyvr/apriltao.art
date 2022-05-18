import styled from 'styled-components';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

export const StyledMarquee = styled(Marquee)`
  overflow: hidden;
`;

export const BannerWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

export const TextWrapper = styled(motion.hgroup)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  padding: 0 2rem 0 2rem;
  text-transform: uppercase;
`;

export const SolidText = styled(motion.h1)`
  font-size: 5.5rem;
  overflow: hidden;
  color: var(--accent);
`;

export const HollowText = styled(motion.h1)`
  font-size: 5.5rem;
  overflow: hidden;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--accent);
`;
