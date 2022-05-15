import styled from 'styled-components';

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  height: 100vh;
`;

export const NameWrapper = styled.hgroup`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  padding: 0 2rem 0 2rem;
  text-transform: uppercase;
`;

export const StyledName = styled.h1`
  font-size: 120px;
  color: var(--accent);
`;

export const HollowName = styled.h1`
  font-size: 120px;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--accent);
`;
