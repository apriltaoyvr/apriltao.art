import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* FA Icons */
export const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--fg);
  &:hover {
    cursor: pointer;
  }
`;

/* Unopened Nav*/
export const ClosedNav = styled(motion.nav)`
  position: fixed;
  width: 100%;
  z-index: 3;

  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  background: hsla(234, 14%, 13%, 0.5);
  backdrop-filter: blur(4px);
  border-bottom: 1px solid var(--bgSecondary);
  transition: 0.2s ease-in-out;

  &:hover {
    border-color: var(--accent);
  }
`;

/* Open Nav */
export const OpenNav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;

  background: hsla(234, 14%, 13%, 0.1);
  border-right: 1px solid var(--bgSecondary);
  backdrop-filter: blur(8px);
  transition: 0.3s ease-in-out;

  &:hover {
    border-color: var(--accent);
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
    border: none;
  }
`;

/* Wrappers */
export const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const LangHolder = styled(motion.footer)`
  align-self: center;
`;

/* Nav Links */
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
    color: var(--fg);
    transition: color 0.15s ease-in-out;
  }

  &:hover a {
    color: var(--accent);
  }
`;

export const TabLink = styled(Link)`
  text-decoration: none;
  transition: color 0.2s ease-in-out;
`;
