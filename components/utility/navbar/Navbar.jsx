import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence } from 'framer-motion';

import {
  ClosedNav,
  OpenNav,
  Tabs,
  Tab,
  TabLink,
  ContentWrapper,
  LangHolder,
} from './Navbar.styled';
import LangMenu from './LangMenu/LangMenu';

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
    <AnimatePresence>
      {!isOpen ? (
        <ClosedNav
          initial={{ y: '-75%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-200%', opacity: 0 }}
          transition={{ duration: 0.1 }}
          key='closed'
        >
          <FontAwesomeIcon
            icon='fa-solid fa-bars'
            size='xl'
            onClick={toggleNav}
          />
          <footer>
            <LangMenu />
          </footer>
        </ClosedNav>
      ) : (
        <OpenNav
          initial={{ x: '-25%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-25%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          key='open'
        >
          <div>
            <FontAwesomeIcon
              icon='fa-solid fa-x'
              size='xl'
              onClick={toggleNav}
            />
          </div>
          <ContentWrapper>
            <Tabs>
              <Tab>
                <TabLink onClick={closeNav} href='#'>
                  {t('navigation.home')}
                </TabLink>
              </Tab>
              <Tab>
                <TabLink onClick={closeNav} href='#projects'>
                  {t('navigation.projects')}
                </TabLink>
              </Tab>
              <Tab>
                <TabLink onClick={closeNav} href='#about'>
                  {t('navigation.about')}
                </TabLink>
              </Tab>
              <Tab>
                <TabLink onClick={closeNav} href='#contact'>
                  {t('navigation.contact')}
                </TabLink>
              </Tab>
            </Tabs>
            <LangHolder>
              <LangMenu />
            </LangHolder>
          </ContentWrapper>
        </OpenNav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
