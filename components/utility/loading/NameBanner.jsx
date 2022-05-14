import styled from 'styled-components';
import Marquee from 'react-fast-marquee';

const NameWrapper = styled.hgroup`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  padding: 0 2rem 0 2rem;
  text-transform: uppercase;
`;

const StyledName = styled.h1`
  font-size: 120px;
  color: var(--accent);
`;

const HollowName = styled.h1`
  font-size: 120px;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--accent);
`;

const NameBanner = ({speed, text}) => {
  return (
    <Marquee gradientColor={[29, 29, 38]} speed={speed} >
      <NameWrapper>
        <HollowName>{text}</HollowName>
        <StyledName>{text}</StyledName>
        <HollowName>{text}</HollowName>
        <StyledName>{text}</StyledName>
        <HollowName>{text}</HollowName>
        <StyledName>{text}</StyledName>
        <HollowName>{text}</HollowName>
        <StyledName>{text}</StyledName>
      </NameWrapper>
    </Marquee>
  );
};

export default NameBanner;
