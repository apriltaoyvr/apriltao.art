import {
  StyledMarquee,
  TextWrapper,
  HollowText,
  SolidText,
} from './Marquee.styled';

const MarqueeText = ({ speed, text }) => {
  return (
    <StyledMarquee
      gradientColor={[29, 29, 38]}
      speed={speed}
      pauseOnHover={true}
    >
      <TextWrapper>
        <HollowText aria-hidden='true'>{text}</HollowText>
        <SolidText>{text}</SolidText>
        <HollowText aria-hidden='true'>{text}</HollowText>
        <SolidText aria-hidden='true'>{text}</SolidText>
        <HollowText aria-hidden='true'>{text}</HollowText>
        <SolidText aria-hidden='true'>{text}</SolidText>
        <HollowText aria-hidden='true'>{text}</HollowText>
        <SolidText aria-hidden='true'>{text}</SolidText>
      </TextWrapper>
    </StyledMarquee>
  );
};

export default MarqueeText;
