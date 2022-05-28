import { useTranslation } from 'next-i18next';

import MarqueeText from '../../utility/Marquee/MarqueeText';
import { StyledMarquee } from '../../utility/Marquee/Marquee.styled';

const Hero = () => {
  const { t } = useTranslation('common');

  return (
    <StyledMarquee 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 2}}
    style={{paddingTop: '4rem'}}>
      <MarqueeText speed={5} text={'April Tao'} />
      <MarqueeText speed={10} text={t('Marquee.development')} />
      <MarqueeText speed={5} text={t('Marquee.design')} />
      <MarqueeText speed={10} text={'April Tao'} />
      <MarqueeText speed={5} text={t('Marquee.development')} />
      <MarqueeText speed={10} text={t('Marquee.design')} />
    </StyledMarquee>
  );
};

export default Hero;
