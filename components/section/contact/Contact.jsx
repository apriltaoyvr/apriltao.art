import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { fadeContainer, fadeItem } from '../../utility/framer';

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

const MotionLink = motion(Link);

const Contact = () => {
  const { t } = useTranslation('common');

  return (
    <motion.section
      id='contact'
      variants={fadeContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.hgroup variants={fadeContainer}>
        <motion.h1 variants={fadeItem}>{t('contact.title')}</motion.h1>
        <motion.h2 variants={fadeItem}>{t('contact.subtitle')}</motion.h2>
      </motion.hgroup>
      <SocialWrapper variants={fadeContainer}>
        <MotionLink
          href='https://github.com/apriltaoyvr/apriltao.art'
          passHref
          variants={fadeItem}
        >
          <FontAwesomeIcon icon='fa-brands fa-github' size='5x' />
        </MotionLink>
        <MotionLink
          href='https://github.com/apriltaoyvr/apriltao.art'
          passHref
          variants={fadeItem}
        >
          <FontAwesomeIcon icon='fa-brands fa-behance' size='5x' />
        </MotionLink>
      </SocialWrapper>
    </motion.section>
  );
};

export default Contact;
