/* Libs */
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

/* next-i18next */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

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
  background: ${({ theme }) => theme.main.accent};
  border: 1px solid transparent;
  transition: filter 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }
`;

const StyledArrow = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.main.bg};
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
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => router.back()}
      >
        <StyledArrow icon='fa-solid fa-arrow-left-long' size='5x' />
      </StyledButton>
      <MarqueeText speed={5} text={t('utility.error')} />
      <MarqueeText speed={15} text={t('utility.error')} />
      <MarqueeText speed={5} text={t('utility.error')} />
    </StyledError>
  );
}
