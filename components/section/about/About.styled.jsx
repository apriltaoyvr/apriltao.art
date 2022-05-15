import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const StyledSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const AboutWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  justify-content: center;
  gap: 16px;

  @media screen and (min-width: 75rem) {
    grid-template-columns: repeat(2, 31.25rem);
  }
`;

export const ParagraphWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  padding: 0 32px;
  gap: 16px;
  text-align: justify;
`;

export const ImageWrapper = styled(motion.figure)`
  display: flex;
  margin: 16px;
  width: 19.625rem;
  border: 0.125rem solid #9580ff;
  transition: all 0.2s ease-in-out;
  box-shadow: 7px 7px var(--bg), 7px 7px 0 1px var(--accent);
`;

export const StyledImage = styled(Image)`
  filter: opacity(0.8);
`;

export const SkillWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 250px);
  gap: 1rem;
  justify-content: center;
  list-style: none;
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 250px);
  }
`;

export const StyledCard = styled(motion.div)`
  border: 1px solid var(--accent);
  padding: 1rem;
  width: 250px;
  text-align: center;
`;
