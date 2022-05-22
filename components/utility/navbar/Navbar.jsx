import { useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

import {
  StyledIcon,
  ClosedNav,
  OpenNav,
  ContentWrapper,
  StyledHeader,
  StyledFooter,
  LangHolder,
} from './Navbar.styled';

import LangMenu from './Lang/Menu';
import Links from './Links';
import ThemeToggle from './Theme/Toggle';

const Navbar = ({ setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <MotionConfig reducedMotion='user'>
      <AnimatePresence >
        {!isOpen ? (
          <ClosedNav
            initial={{ y: '-25%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-50%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 150, delay: 0.1 }}
            key='closed'
          >
            <motion.div whileTap={{ scale: 0.95 }} onClick={toggleNav}>
              <StyledIcon icon='fa-solid fa-bars' size='xl' />
            </motion.div>
            <StyledFooter>
              <LangMenu />
              <ThemeToggle setTheme={setTheme} />
            </StyledFooter>
          </ClosedNav>
        ) : (
          <OpenNav
            initial={{ x: '-25%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-50%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 150, delay: 0.1 }}
            key='open'
          >
            <StyledHeader>
              <StyledIcon icon='fa-solid fa-x' size='xl' onClick={toggleNav} />
              <ThemeToggle setTheme={setTheme} />
            </StyledHeader>
            <ContentWrapper>
              <Links closeNav={closeNav} />
              <LangHolder>
                <LangMenu />
              </LangHolder>
            </ContentWrapper>
          </OpenNav>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Navbar;
