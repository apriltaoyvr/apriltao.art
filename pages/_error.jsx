/* Libs */
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const StyledButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.main.bgSecondary};
  min-width: 200px;
`;

const StyledArrow = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.main.accent};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.main.accentSecondary};
    cursor: pointer;
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
      <StyledButton>
        <StyledArrow
          icon='fa-solid fa-arrow-left-long'
          size='5x'
          onClick={() => router.back()}
        />
      </StyledButton>
      <MarqueeText speed={5} text={t('utility.error')} />
      <MarqueeText speed={15} text={t('utility.error')} />
      <MarqueeText speed={5} text={t('utility.error')} />
    </StyledError>
  );
}
