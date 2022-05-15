import NameBanner from './NameBanner';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  height: 100vh;
`;

const Loading = () => {
  return (
    <BannerWrapper>
      <NameBanner speed={5} text={'Loading'} />
      <NameBanner speed={10} text={'Loading'} />
      <NameBanner speed={5} text={'Loading'} />
      <NameBanner speed={10} text={'Loading'} />
      <NameBanner speed={5} text={'Loading'} />
      <NameBanner speed={10} text={'Loading'} />
    </BannerWrapper>
  );
};

export default Loading;
