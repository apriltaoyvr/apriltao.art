import { useTranslation } from 'next-i18next';

import MarqueeText from '../../utility/marquee/MarqueeText';
import { BannerWrapper } from '../../utility/marquee/Marquee.styled';

const Hero = () => {
  const { t } = useTranslation('common');

  return (
    <BannerWrapper 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 2}}>
      <MarqueeText speed={5} text={'April Tao'} />
      <MarqueeText speed={10} text={t('marquee.development')} />
      <MarqueeText speed={5} text={t('marquee.design')} />
      <MarqueeText speed={10} text={'April Tao'} />
      <MarqueeText speed={5} text={t('marquee.development')} />
      <MarqueeText speed={10} text={t('marquee.design')} />
    </BannerWrapper>
  );
};

export default Hero;
