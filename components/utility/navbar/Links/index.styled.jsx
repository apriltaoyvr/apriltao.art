import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Tabs = styled(motion.ul)`
  display: inline-flex;
  flex-direction: column;
  list-style: none;
  padding: 1rem;
  gap: 1rem;
  padding: 2rem;
  height: 100%;
`;

export const Tab = styled(motion.li)`
  position: relative;
  font-size: 24px;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  & a {
    color: ${({ theme }) => theme.main.fg};
  }

  &:hover a {
    color: ${({ theme }) => theme.main.accent};
  }
`;

export const TabLink = styled(Link)`
  text-decoration: none;
`;
