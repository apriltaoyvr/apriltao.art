/* Libs */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { motion } from 'framer-motion';

/* Components */
import IconLink from '../../components/utility/IconLink/index';
import { IconFooter } from '../../components/utility/IconLink/index.styled';

/* Styles */
import {
  StyledArticle,
  StyledVideo,
} from '../../components/subpage/index.styled';
import { fadeContainer, fadeItem } from '../../components/utility/framer';

const AmbrosiaLab = () => {
  return (
    <motion.main
      variants={fadeContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.header variants={fadeItem}>
        <h1>AmbrosiaLab</h1>
      </motion.header>
      <StyledVideo
        variants={fadeItem}
        src='https://res.cloudinary.com/dsbhmynmq/video/upload/v1652570265/April%20Tao/Projects/AmbrosiaLab/2022-05-14_16-16-35_skywsw.mp4'
        muted
        loop
        autoPlay
      />
      <StyledArticle
        variants={fadeContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.p variants={fadeItem}>
          A website created and redesigned for Italian research and development
          company, AmbrosiaLab. Their primary focus is on cosmetics and food
          research, so the idea of using flowers and warm, natural colours came
          to me immediately.
        </motion.p>
        <motion.p variants={fadeItem}>
          AmbrosiaLab&#39;s research is primarily on cosmetics and food. They
          also pride themselves on being a primarily female-staffed company. I
          wanted something feminine but with an emphasis of nature and beauty to
          it as well. So the idea of using flowers and peachy colours came to
          me.
        </motion.p>
        <motion.figure variants={fadeItem}>
          <Image
            alt='A screenshot of the research page, showing the items in a grid with a peach gradient background'
            height='1210'
            width='1911'
            layout='intrinsic'
            src='https://user-images.githubusercontent.com/95392008/167490259-c9eee33f-e8b7-45e2-a05c-73fa11ae8bb6.png'
          />
        </motion.figure>

        <motion.p variants={fadeItem}>
          To give the site a fresh feeling, I created a vertical navigation bar
          on the right-hand side of the site (for desktop users) in lieu of a
          standard horizontal navigation bar.
        </motion.p>

        <motion.figure variants={fadeItem}>
          <Image
            alt='A screenshot of the story page in a light green'
            height='1210'
            width='1911'
            layout='intrinsic'
            src='https://user-images.githubusercontent.com/95392008/167490289-0885e97c-7725-45f0-8a14-c82f4f06812b.png'
          />
        </motion.figure>

        <motion.p variants={fadeItem}>
          Because of their international reach and partners, I included
          localization via i18n. The site is available in English and Italian
          and there is the framework for including future languages as well.
        </motion.p>
      </StyledArticle>
      <IconFooter
        variants={fadeContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <IconLink
          href='http://www.ambrosialab.it/'
          icon='fa-solid fa-globe'
          variants={fadeItem}
        />
        <IconLink
          href='https://github.com/apriltaoyvr/ambrosialab'
          icon='fa-brands fa-github'
          variants={fadeItem}
        />
      </IconFooter>
    </motion.main>
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
