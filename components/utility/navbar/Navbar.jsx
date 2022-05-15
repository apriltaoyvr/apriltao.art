import { useTranslation } from 'next-i18next';
import { useState } from 'react';

import { StyledNav, Tabs, Tab, TabLink } from './Navbar.styled';
import LangMenu from './LangMenu';

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
    <StyledNav>
      <Tabs>
        <Tab>
          <TabLink href='#'>{t('navigation.home')}</TabLink>
        </Tab>
        <Tab>
          <TabLink href='#about'>{t('navigation.about')}</TabLink>
        </Tab>
        <Tab>
          <TabLink href='#projects'>{t('navigation.projects')}</TabLink>
        </Tab>
        <Tab>
          <TabLink href='#contact'>{t('navigation.contact')}</TabLink>
        </Tab>
      </Tabs>
      <LangMenu />
    </StyledNav>
  );
};

export default Navbar;
