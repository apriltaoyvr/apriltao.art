import { useTranslation } from 'next-i18next';
import { motion, MotionConfig } from 'framer-motion';
import { slideSubContainer, slideItem } from '../../../utility/framer';

import { SkillWrapper } from '../About.styled';
import SkillCard from './SkillCard';

const SkillSection = () => {
  const { t } = useTranslation('common');

  return (
    <MotionConfig reducedMotion='user'>
      <motion.main
        variants={slideSubContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.h3 variants={slideItem}>{t('skills.title')}</motion.h3>
        <SkillWrapper>
          {t('skills.skillList', { returnObjects: true }).map(
            (skill, index) => (
              <SkillCard key={index} index={index} skill={skill} />
            )
          )}
        </SkillWrapper>
      </motion.main>
    </MotionConfig>
  );
};

export default SkillSection;
