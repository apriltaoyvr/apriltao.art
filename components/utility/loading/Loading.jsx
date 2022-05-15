import { useTranslation } from 'next-i18next';

import NameBanner from './NameBanner';
import BannerWrapper from './Loading.styled';

const Loading = () => {
  const { t } = useTranslation('common');

  return (
    <BannerWrapper>
      <NameBanner speed={5} text={t('marquee.loading')} />
      <NameBanner speed={10} text={t('marquee.loading')} />
      <NameBanner speed={5} text={t('marquee.loading')} />
      <NameBanner speed={10} text={t('marquee.loading')} />
      <NameBanner speed={5} text={t('marquee.loading')} />
      <NameBanner speed={10} text={t('marquee.loading')} />
    </BannerWrapper>
  );
};

export default Loading;
