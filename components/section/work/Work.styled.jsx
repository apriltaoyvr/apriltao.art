import styled from 'styled-components';

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 80%;
  justify-content: center;
  gap: 1rem;
`;

export const StyledVideo = styled.div`
  filter: opacity(0.9);
  &:hover {
    filter: opacity(1);
    cursor: pointer;
  }
`;