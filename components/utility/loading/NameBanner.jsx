import styled from 'styled-components';
import Marquee from 'react-fast-marquee';

import { NameWrapper, HollowName, StyledName } from './Loading.styled';

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
