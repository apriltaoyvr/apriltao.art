import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

const SocialWrapper = styled.div`
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
    <section id='contact'>
      <hgroup>
        <h1>{t('contact.title')}</h1>
        <h2>{t('contact.subtitle')}</h2>
      </hgroup>
      <SocialWrapper>
        <FontAwesomeIcon icon='fa-brands fa-github' size='5x' />
        <FontAwesomeIcon icon='fa-brands fa-behance' size='5x' />
      </SocialWrapper>
    </section>
  );
};

export default Contact;
