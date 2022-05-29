import styled from 'styled-components';

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: min(80vw, 75%);
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledVideo = styled.video`
  width: min(80vw, 75%);
  margin-bottom: 1rem;
`;

export const Gallery = styled.figure`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`;