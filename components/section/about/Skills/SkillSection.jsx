import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { slideSubContainer, slideItem } from '../../../utility/framer';

import { SkillWrapper } from '../About.styled';
import SkillCard from './SkillCard';

const SkillSection = () => {
  const { t } = useTranslation('common');

  return (
    <motion.main
      variants={slideSubContainer}
      initial='hidden'
      whileInView='visible'
    >
      <motion.h3 variants={slideItem}>{t('skills.title')}</motion.h3>
      <SkillWrapper>
        {t('skills.skillList', { returnObjects: true }).map((skill, index) => (
          <SkillCard key={index} index={index} skill={skill} />
        ))}
      </SkillWrapper>
    </motion.main>
  );
};

export default SkillSection;
