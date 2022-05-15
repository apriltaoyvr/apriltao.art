import { useTranslation } from 'next-i18next';

import NameBanner from '../../utility/loading/NameBanner';
import { BannerWrapper } from '../../utility/loading/Loading.styled';

const Hero = () => {
  const { t } = useTranslation('common');

  return (
    <BannerWrapper 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 2}}>
      <NameBanner speed={5} text={'April Tao'} />
      <NameBanner speed={10} text={t('marquee.development')} />
      <NameBanner speed={5} text={t('marquee.design')} />
      <NameBanner speed={10} text={'April Tao'} />
      <NameBanner speed={5} text={t('marquee.development')} />
      <NameBanner speed={10} text={t('marquee.design')} />
    </BannerWrapper>
  );
};

export default Hero;
