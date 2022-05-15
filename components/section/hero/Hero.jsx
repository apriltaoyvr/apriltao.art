import NameBanner from '../../utility/loading/NameBanner';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 6rem 0;
`;

const Hero = () => {
  return (
    <BannerWrapper>
      <NameBanner speed={5} text={'April Tao'} />
      <NameBanner speed={10} text={'Development'} />
      <NameBanner speed={5} text={'Design'} />
      <NameBanner speed={10} text={'April Tao'} />
      <NameBanner speed={5} text={'Development'} />
      <NameBanner speed={10} text={'Design'} />
    </BannerWrapper>
  );
};

export default Hero;
