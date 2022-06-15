import { useTranslation } from 'next-i18next';
import { Tabs, Tab, TabLink } from './index.styled';
import { useRouter } from 'next/router';

const Links = ({ closeNav }) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  /* All hrefs are structured like this for localization
   ** `/${router.locale}/route`
   ** This is to ensure that the hrefs are correct for the language */
  return (
    <Tabs>
      <Tab
        onClick={closeNav}
        whileTap={{
          scale: 0.9,
        }}
      >
        <TabLink href={`/${router.locale}`}>{t('navigation.home')}</TabLink>
      </Tab>
      <Tab
        onClick={closeNav}
        whileTap={{
          scale: 0.9,
        }}
      >
        <TabLink href={`/${router.locale}/#projects`}>
          {t('navigation.projects')}
        </TabLink>
      </Tab>
      <Tab
        onClick={closeNav}
        whileTap={{
          scale: 0.9,
        }}
      >
        <TabLink href={`/${router.locale}/#about`}>
          {t('navigation.about')}
        </TabLink>
      </Tab>
      <Tab
        onClick={closeNav}
        whileTap={{
          scale: 0.9,
        }}
      >
        <TabLink href={`/${router.locale}/#contact`}>
          {t('navigation.contact')}
        </TabLink>
      </Tab>
    </Tabs>
  );
};

export default Links;
