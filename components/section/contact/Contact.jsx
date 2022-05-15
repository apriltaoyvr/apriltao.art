import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Link from 'next/link';

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  padding: 5rem;

  & svg {
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--accent);
      cursor: pointer;
    }
  }
`;

const Contact = () => {
  return (
    <section id='contact'>
      <hgroup>
        <h1>Contact</h1>
        <h2>Places you can reach me</h2>
      </hgroup>
      <SocialWrapper>
        <FontAwesomeIcon icon='fa-brands fa-github' size='5x' />
        <FontAwesomeIcon icon='fa-brands fa-behance' size='5x' />
      </SocialWrapper>
    </section>
  );
};

export default Contact;
