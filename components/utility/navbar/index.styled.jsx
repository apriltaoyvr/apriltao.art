import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* FA Icons */
export const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.main.fg};
  transition: color 0.15s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.main.accent};
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

  background: ${({ theme }) => theme.nav.bg};
  backdrop-filter: blur(4px);
  border-bottom: 1px solid ${({ theme }) => theme.main.bgSecondary};
  box-shadow: 2px 0 8px ${({ theme }) => theme.nav.bg};

  &:hover {
    border-color: ${({ theme }) => theme.main.accent};
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

  background: ${({ theme }) => theme.nav.bg};
  border-right: 1px solid ${({ theme }) => theme.main.bgSecondary};
  box-shadow: 0 2px 8px ${({ theme }) => theme.nav.bg};
  backdrop-filter: blur(8px);

  &:hover {
    border-color: ${({ theme }) => theme.main.accent};
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

export const StyledHeader = styled(motion.header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledFooter = styled(motion.footer)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
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
    color: ${({ theme }) => theme.main.fg};
  }

  &:hover a {
    color: ${({ theme }) => theme.main.accent};
  }
`;

export const TabLink = styled(Link)`
  text-decoration: none;
`;