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

export const CaptionWrapper = styled(motion.figcaption)`
  display: flex;
  align-items: flex-end;
  height: 100%;

  visibility: hidden;
  text-align: center;

  background: linear-gradient(
    0deg,
    hsla(234, 14%, 13%, 0.75),
    hsla(0, 0%, 0%, 0)
  );
  text-shadow: 0 0 3px rgba(255, 255, 255, 0.25);

  & h6 {
    padding: 1rem;
  }
`;

export const ImageWrapper = styled(motion.figure)`
  aspect-ratio: 79 / 105;
  margin: 1rem;
  border: 2px solid var(--accent);

  background: url(https://res.cloudinary.com/dsbhmynmq/image/upload/v1652768579/April%20Tao/Images/_R281949_getmvp.jpg);
  background-size: contain;
  box-shadow: 7px 7px var(--bg), 7px 7px 0 1px var(--accent);

  &:hover ${CaptionWrapper} {
    visibility: visible;
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
  border: 1px solid var(--accent);
  padding: 1rem;
  width: 250px;
  text-align: center;
  animation: fadeIn ${(props) => props.delay};
`;
