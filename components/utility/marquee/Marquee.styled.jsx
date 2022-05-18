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
  padding: 0 2rem;
  gap: 1rem;
  text-transform: uppercase;
  @media screen and (min-width: 1600px) {
    gap: 2rem;
  }
`;

export const SolidText = styled(motion.h1)`
  font-size: 5.5rem;
  overflow: hidden;
  color: var(--accent);

  @media screen and (min-width: 1600px) {
    font-size: 9rem;
  }
`;

export const HollowText = styled(motion.h1)`
  font-size: 5.5rem;
  overflow: hidden;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--accent);

  @media screen and (min-width: 1600px) {
    font-size: 9rem;
  }
`;
