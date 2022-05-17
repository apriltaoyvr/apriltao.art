import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { fadeContainer, fadeItem } from '../../utility/framer';

import ContactIcon from './ContactIcon';

const SocialWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;

  & svg {
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--accent);
      cursor: pointer;
    }
  }
`;

const Contact = () => {
  const { t } = useTranslation('common');

  return (
    <motion.section
      id='contact'
      variants={fadeContainer}
      initial='hidden'
      whileInView='visible'
    >
      <motion.hgroup>
        <motion.h2 variants={fadeItem}>{t('contact.title')}</motion.h2>
        <motion.h3 variants={fadeItem}>{t('contact.subtitle')}</motion.h3>
      </motion.hgroup>
      <SocialWrapper>
        <ContactIcon
          href='https://github.com/apriltaoyvr/apriltao.art'
          icon='github'
        />
        <ContactIcon
          href='https://github.com/apriltaoyvr/apriltao.art'
          icon='behance'
        />
      </SocialWrapper>
    </motion.section>
  );
};

export default Contact;
