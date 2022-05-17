import Marquee from 'react-fast-marquee';

import { TextWrapper, HollowText, SolidText } from './Marquee.styled';

const MarqueeText = ({ speed, text }) => {
  return (
    <Marquee gradientColor={[29, 29, 38]} speed={speed} pauseOnHover={true}>
      <TextWrapper>
        <HollowText>{text}</HollowText>
        <SolidText>{text}</SolidText>
        <HollowText>{text}</HollowText>
        <SolidText>{text}</SolidText>
        <HollowText>{text}</HollowText>
        <SolidText>{text}</SolidText>
        <HollowText>{text}</HollowText>
        <SolidText>{text}</SolidText>
      </TextWrapper>
    </Marquee>
  );
};

export default MarqueeText;
