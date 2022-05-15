import { useTranslation } from 'next-i18next';
import { StyledNav, Tabs, Tab, TabLink } from './Navbar.styled';
import LangMenu from './LangMenu';

const Navbar = () => {
  const { t } = useTranslation('common');

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
          <TabLink href='#'>{t('navigation.contact')}</TabLink>
        </Tab>
      </Tabs>
      <LangMenu />
    </StyledNav>
  );
};

export default Navbar;
