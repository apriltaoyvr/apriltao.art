import { useTranslation } from 'next-i18next';

import MarqueeText from './MarqueeText';
import { BannerWrapper } from './Marquee.styled';

const LoadingScreen = () => {
  const { t } = useTranslation('common');

  return (
    <BannerWrapper>
      <MarqueeText speed={5} text={t('marquee.loading')} />
      <MarqueeText speed={10} text={t('marquee.loading')} />
      <MarqueeText speed={5} text={t('marquee.loading')} />
      <MarqueeText speed={10} text={t('marquee.loading')} />
      <MarqueeText speed={5} text={t('marquee.loading')} />
      <MarqueeText speed={10} text={t('marquee.loading')} />
    </BannerWrapper>
  );
};

export default LoadingScreen;
