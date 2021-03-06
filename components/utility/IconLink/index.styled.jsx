import styled from 'styled-components';
import { motion } from 'framer-motion';

export const IconFooter = styled(motion.footer)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

export const IconWrapper = styled(motion.a)`
  & svg {
    color: ${({ theme }) => theme.main.fg};
    transition: color 0.5s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.main.accentSecondary};
      cursor: pointer;
    }
  }
`;
