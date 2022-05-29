/* Libs */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

/* Components */

/* Styles */
import {
  StyledArticle,
  StyledVideo,
} from '../../components/subpage/index.styled';

const theripper93 = () => {
  return (
    <main>
      <header>
        <h1>theripper93</h1>
      </header>
      <StyledVideo
        src='https://res.cloudinary.com/dsbhmynmq/video/upload/v1652570265/April%20Tao/Projects/AmbrosiaLab/2022-05-14_16-16-35_skywsw.mp4'
        muted
        loop
        autoPlay
      />
      <StyledArticle>
        <p>theripper93 is a programmer and developer who specialises in</p>
        <p>
          Their primary focus is on cosmetics and food research, so the idea of
          using flowers and warm, natural colours came to me immediately.
        </p>
        <p>
          To give the site a fresh feeling, I created a vertical navigation bar
          on the right-hand side of the site (for desktop users).
        </p>
        <Image
          alt='A screenshot of the research page, showing the items in a grid with a peach gradient background'
          height='1210'
          width='1911'
          layout='intrinsic'
          src='https://user-images.githubusercontent.com/95392008/167490259-c9eee33f-e8b7-45e2-a05c-73fa11ae8bb6.png'
        />
        <Image
          alt='A screenshot of the story page in a light green'
          height='1210'
          width='1911'
          layout='intrinsic'
          src='https://user-images.githubusercontent.com/95392008/167490289-0885e97c-7725-45f0-8a14-c82f4f06812b.png'
        />
      </StyledArticle>
    </main>
  );
};

/* next-i18next */
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default theripper93;
