import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const StyledSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const AboutWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(2, 500px);
  }
`;

export const ParagraphWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
  padding: 1rem;
  max-width: 90%;
  text-align: justify;
`;

export const ImageWrapper = styled(motion.figure)`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr;
  width: 100%;
  place-items: center;
  margin: 1rem;

  width: 314px;
  border: 2px solid var(--accent);
  
  transition: all 0.2s ease-in-out;
  box-shadow: 7px 7px var(--bg), 7px 7px 0 0.0625rem var(--accent);
`;

export const StyledImage = styled(Image)`
  filter: opacity(0.8);
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: opacity(1);
  }
`;

export const SkillWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, 15.625rem);
  gap: 16px;
  justify-content: center;
  list-style: none;
  @media screen and (min-width: 75rem) {
    grid-template-columns: repeat(3, 15.625rem);
  }
`;

export const StyledCard = styled(motion.div)`
  border: 0.0625rem solid var(--accent);
  padding: 16px;
  width: 15.625rem;
  text-align: center;
  animation: fadeIn ${(props) => props.delay};
`;
