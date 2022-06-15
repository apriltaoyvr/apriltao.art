/* Libs */
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

/* next-i18next */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

/* Components */
import MarqueeText from '../components/utility/Marquee/index';

/* Styles */
const StyledError = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
`;

const StyledButton = styled(motion.button)`
  min-width: 200px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.main.accent};
  transition: background 0.66s cubic-bezier(0.39, 0.58, 0.57, 1);

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.main.accent};
    filter: brightness(1.1);
  }
`;

const StyledArrow = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.main.accent};
  transition: color 0.66s cubic-bezier(0.39, 0.58, 0.57, 1);

  ${StyledButton}:hover & {
    color: ${({ theme }) => theme.main.bg};
    filter: brightness(1.1);
  }
`;

export default function Error() {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <StyledError>
      <MarqueeText speed={15} text={t('utility.error')} />
      <MarqueeText speed={5} text={t('utility.error')} />
      <MarqueeText speed={15} text={t('utility.error')} />
      <StyledButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => router.back()}
      >
        <StyledArrow icon={faArrowLeftLong} size='5x' />
      </StyledButton>
      <MarqueeText speed={5} text={t('utility.error')} />
      <MarqueeText speed={15} text={t('utility.error')} />
      <MarqueeText speed={5} text={t('utility.error')} />
    </StyledError>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
