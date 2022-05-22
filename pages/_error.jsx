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
import Navbar from '../components/utility/navbar/Navbar';

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

const StyledArrow = styled(FontAwesomeIcon)`
  transition: color 0.3s ease-in-out;
  &:hover {
    color: var(--accent);
    cursor: pointer;
  }
`;

export default function Error() {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <>
      <Navbar />
      <StyledError>
        <h1>{t('error')}</h1>
        <StyledArrow
          icon='fa-solid fa-arrow-left-long'
          size='5x'
          onClick={() => router.back()}
        />
      </StyledError>
    </>
  );
}
