import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import {
  StyledSection,
  AboutWrapper,
  ParagraphWrapper,
  ImageWrapper,
  StyledImage,
  SkillWrapper,
} from './About.styled';
import SkillCard from './SkillCard';

import { slideContainer, slideItem } from '../../utility/framer';

const About = () => {
  const { t } = useTranslation('common');

  return (
    <StyledSection id='about'>
      <motion.main
        variants={slideContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.h1 variants={slideItem}>{t('about.title')}</motion.h1>
        <AboutWrapper variants={slideItem}>
          <ParagraphWrapper variants={slideItem}>
            {t('about.bio', { returnObjects: true }).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </ParagraphWrapper>
          <ImageWrapper>
            <StyledImage
              variants={slideItem}
              src='https://res.cloudinary.com/dsbhmynmq/image/upload/v1652577967/April%20Tao/Images/me_erdq0n.png'
              width={400}
              height={600}
              alt='A photo of myself'
            />
          </ImageWrapper>
        </AboutWrapper>
        <motion.h2 variants={slideItem}>{t('about.skills')}</motion.h2>
        <SkillWrapper variants={slideItem}>
          <SkillCard skill='NextJS' variants={slideItem} />
          <SkillCard skill='ReactJS' variants={slideItem} />
          <SkillCard skill='Styled Components' variants={slideItem} />
          <SkillCard skill='Sass' variants={slideItem} />
          <SkillCard skill='Adobe Photoshop' variants={slideItem} />
          <SkillCard skill='Adobe Premiere' variants={slideItem} />
        </SkillWrapper>
      </motion.main>
    </StyledSection>
  );
};

export default About;
