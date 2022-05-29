import { useTranslation } from 'next-i18next';

import MarqueeText from './Marquee/index';
import { StyledMarquee } from './Marquee/index.styled';

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
