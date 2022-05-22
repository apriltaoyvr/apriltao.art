import Link from 'next/link';
import styled from 'styled-components';

const StyledError = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
`;

export default function Error() {
  return (
    <StyledError>
      <h1>Page Not Found</h1>
      <Link href='/' passHref>
        Go back home
      </Link>
    </StyledError>
  );
}
