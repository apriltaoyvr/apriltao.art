import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { AnimatePresence, MotionConfig } from 'framer-motion';

import {
  StyledIcon,
  ClosedNav,
  OpenNav,
  Tabs,
  Tab,
  TabLink,
  ContentWrapper,
  LangHolder,
} from './Navbar.styled';
import LangMenu from './Lang/Menu';

const Navbar = () => {
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <MotionConfig reducedMotion='user'>
      <AnimatePresence>
        {!isOpen ? (
          <ClosedNav
            initial={{ y: '-25%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-50%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
            key='closed'
          >
            <StyledIcon icon='fa-solid fa-bars' size='xl' onClick={toggleNav} />
            <footer>
              <LangMenu />
            </footer>
          </ClosedNav>
        ) : (
          <OpenNav
            initial={{ x: '-25%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-25%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
            key='open'
          >
            <div>
              <StyledIcon icon='fa-solid fa-x' size='xl' onClick={toggleNav} />
            </div>
            <ContentWrapper>
              <Tabs>
                <Tab onClick={closeNav} whileTap={{ scale: 0.9 }}>
                  <TabLink href='/'>{t('navigation.home')}</TabLink>
                </Tab>
                <Tab onClick={closeNav} whileTap={{ scale: 0.9 }}>
                  <TabLink href='/#projects'>
                    {t('navigation.projects')}
                  </TabLink>
                </Tab>
                <Tab onClick={closeNav} whileTap={{ scale: 0.9 }}>
                  <TabLink href='/#about'>{t('navigation.about')}</TabLink>
                </Tab>
                <Tab onClick={closeNav} whileTap={{ scale: 0.9 }}>
                  <TabLink href='/#contact'>{t('navigation.contact')}</TabLink>
                </Tab>
              </Tabs>
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
