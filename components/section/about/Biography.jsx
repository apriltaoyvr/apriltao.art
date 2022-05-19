import { useTranslation } from 'next-i18next';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import Link from 'next/link';

import { slideContainer, slideItem } from '../../utility/framer';
import {
  AboutWrapper,
  ParagraphWrapper,
  ImageWrapper,
  CaptionWrapper,
} from './About.styled';

const Biography = () => {
  const { t } = useTranslation('common');

  return (
    <MotionConfig reducedMotion='user'>
      <AnimatePresence>
        <motion.article
          variants={slideContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <motion.h2 variants={slideItem}>
            <Link href={'#about'}>{t('about.title')}</Link>
          </motion.h2>
          <AboutWrapper variants={slideItem}>
            <ParagraphWrapper variants={slideItem}>
              {t('about.bio', { returnObjects: true }).map(
                (paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                )
              )}
            </ParagraphWrapper>
            <ImageWrapper variants={slideItem}>
              <CaptionWrapper
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                key='caption'
              >
                <motion.h6>{t('about.photoCredit')}</motion.h6>
              </CaptionWrapper>
            </ImageWrapper>
          </AboutWrapper>
        </motion.article>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Biography;
