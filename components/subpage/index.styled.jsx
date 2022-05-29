import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledArticle = styled(motion.article)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: min(80vw, 75%);
`;

export const StyledFooter = styled(motion.footer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledVideo = styled(motion.video)`
  width: min(80vw, 75%);
  margin-bottom: 1rem;
`;

export const Gallery = styled(motion.figure)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;