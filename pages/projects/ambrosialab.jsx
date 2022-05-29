/* Libs */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

/* Components */
import IconLink from '../../components/utility/IconLink/index';
import { IconFooter } from '../../components/utility/IconLink/index.styled';

/* Styles */
import {
  StyledArticle,
  StyledVideo,
} from '../../components/subpage/index.styled';

const AmbrosiaLab = () => {
  return (
    <main>
      <header>
        <h1>AmbrosiaLab</h1>
      </header>
      <StyledVideo
        src='https://res.cloudinary.com/dsbhmynmq/video/upload/v1652570265/April%20Tao/Projects/AmbrosiaLab/2022-05-14_16-16-35_skywsw.mp4'
        muted
        loop
        autoPlay
      />
      <StyledArticle>
        <p>
          A website created and redesigned for Italian research and development
          company, AmbrosiaLab. Their primary focus is on cosmetics and food
          research, so the idea of using flowers and warm, natural colours came
          to me immediately.
        </p>
        <p>
          AmbrosiaLab's research is primarily on cosmetics and food. They also
          pride themselves on being a primarily female-staffed company. I wanted
          something feminine but with an emphasis of nature and beauty to it as
          well. So the idea of using flowers and peachy colours came to me.
        </p>
        <Image
          alt='A screenshot of the research page, showing the items in a grid with a peach gradient background'
          height='1210'
          width='1911'
          layout='intrinsic'
          src='https://user-images.githubusercontent.com/95392008/167490259-c9eee33f-e8b7-45e2-a05c-73fa11ae8bb6.png'
        />
        <p>
          To give the site a fresh feeling, I created a vertical navigation bar
          on the right-hand side of the site (for desktop users) in lieu of a
          standard horizontal navigation bar.
        </p>
        <Image
          alt='A screenshot of the story page in a light green'
          height='1210'
          width='1911'
          layout='intrinsic'
          src='https://user-images.githubusercontent.com/95392008/167490289-0885e97c-7725-45f0-8a14-c82f4f06812b.png'
        />
        <p>Because of their international reach and partners, I included localization via i18n. The site is available in English and Italian and there is the framework for including future languages as well.</p>
      </StyledArticle>
      <IconFooter>
        <IconLink
          href='https://github.com/apriltaoyvr'
          icon='fa-solid fa-globe'
        />
        <IconLink
          href='https://github.com/apriltaoyvr'
          icon='fa-brands fa-github'
        />
      </IconFooter>
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

export default AmbrosiaLab;
