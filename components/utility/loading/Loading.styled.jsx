import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BannerWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

export const NameWrapper = styled(motion.hgroup)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  padding: 0 2rem 0 2rem;
  text-transform: uppercase;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const StyledName = styled(motion.h1)`
  font-size: 120px;
  color: var(--accent);
`;

export const HollowName = styled(motion.h1)`
  font-size: 120px;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--accent);
`;
