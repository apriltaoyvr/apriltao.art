import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { fadeContainer, fadeItem } from '../../utility/framer';
import Link from 'next/link';

import ContactIcon from './ContactIcon';

const SocialWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;

  & svg {
    transition: color 0.5s ease-in-out;

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
        <motion.h2 variants={fadeItem}>
          <Link href={'#contact'}>{t('contact.title')}</Link>
        </motion.h2>

        <motion.h3 variants={fadeItem}>{t('contact.subtitle')}</motion.h3>
      </motion.hgroup>
      <SocialWrapper>
        <ContactIcon href='https://github.com/apriltaoyvr' icon='github' />
        <ContactIcon
          href='https://www.behance.net/apriltaoyvr'
          icon='behance'
        />
      </SocialWrapper>
    </motion.section>
  );
};

export default Contact;
