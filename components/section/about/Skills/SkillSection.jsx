import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { slideContainer, slideItem } from '../../../utility/framer';

import { SkillWrapper } from '../About.styled';
import SkillCard from './SkillCard';

const SkillSection = () => {
  const { t } = useTranslation('common');

  return (
    <motion.main
      variants={slideContainer}
      initial='hidden'
      whileInView='visible'
    >
      <motion.h3 variants={slideItem}>{t('skills.title')}</motion.h3>
      <SkillWrapper variants={slideContainer}>
        {t('skills.skillList', { returnObjects: true }).map((skill, index) => (
          <SkillCard
            key={index}
            skill={skill}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.6 }}
          />
        ))}
      </SkillWrapper>
    </motion.main>
  );
};

export default SkillSection;
