import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import { slideContainer, slideItem } from '../../utility/framer';
import {
  AboutWrapper,
  ParagraphWrapper,
  ImageWrapper,
  StyledImage,
} from './About.styled';

const Biography = () => {
  const { t } = useTranslation('common');

  return (
    <motion.article
      variants={slideContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.h2 variants={slideItem}>{t('about.title')}</motion.h2>
      <AboutWrapper variants={slideItem}>
        <ParagraphWrapper variants={slideItem}>
          {t('about.bio', { returnObjects: true }).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p>{t('about.photoCredit')}</p>
        </ParagraphWrapper>
        <ImageWrapper>
          <StyledImage
            variants={slideItem}
            src='https://res.cloudinary.com/dsbhmynmq/image/upload/v1652768579/April%20Tao/Images/_R281949_getmvp.jpg'
            width={450}
            height={600}
            alt='A photo of myself'
          />
        </ImageWrapper>
      </AboutWrapper>
    </motion.article>
  );
};

export default Biography;
