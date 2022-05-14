import styled from 'styled-components';
import Image from 'next/image';

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(2, 500px);
  }
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  gap: 1rem;
  text-align: justify;
`;

export const ImageWrapper = styled.figure`
  display: flex;
  margin: 1rem;
  width: 314px;
  background: hsla(250, 100%, 75%, 0.25);
  border: 5px solid #9580ff;
`;

export const StyledImage = styled(Image)`
  filter: opacity(0.8);
`;