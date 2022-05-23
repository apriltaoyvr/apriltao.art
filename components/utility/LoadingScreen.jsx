import { useTranslation } from 'next-i18next';

import MarqueeText from './marquee/MarqueeText';
import { StyledMarquee } from './marquee/Marquee.styled';

const LoadingScreen = () => {
  const { t } = useTranslation('common');

  return (
    <StyledMarquee>
      <MarqueeText speed={45} text={t('marquee.loading')} />
      <MarqueeText speed={50} text={t('marquee.loading')} />
      <MarqueeText speed={45} text={t('marquee.loading')} />
      <MarqueeText speed={50} text={t('marquee.loading')} />
      <MarqueeText speed={45} text={t('marquee.loading')} />
      <MarqueeText speed={50} text={t('marquee.loading')} />
    </StyledMarquee>
  );
};

export default LoadingScreen;
