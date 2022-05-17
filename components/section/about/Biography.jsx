import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import { slideContainer, slideItem } from '../../utility/framer';
import {
  AboutWrapper,
  ParagraphWrapper,
  ImageWrapper,
  StyledImage,
  CaptionWrapper,
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
        </ParagraphWrapper>
        <ImageWrapper variants={slideItem}>
          <CaptionWrapper>
            <motion.h6>{t('about.photoCredit')}</motion.h6>
          </CaptionWrapper>
        </ImageWrapper>
      </AboutWrapper>
    </motion.article>
  );
};

export default Biography;
