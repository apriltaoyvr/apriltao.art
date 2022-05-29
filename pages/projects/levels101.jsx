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

const levels101 = () => {
  return (
    <motion.main
      variants={fadeContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.header variants={fadeItem}>
        <h1>Levels 101</h1>
      </motion.header>
      <StyledVideo
        src='https://res.cloudinary.com/dsbhmynmq/video/upload/v1653795805/April%20Tao/Projects/levels101/2022-05-28_20-42-36_ujj6fe.mp4'
        muted
        loop
        autoPlay
        variants={fadeItem}
      />
      <StyledArticle
        variants={fadeContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.p variants={fadeItem}>
          My first page. I created it to explain the concepts of the Levels
          Foundry Virtual Tabletop module.
        </motion.p>
        <motion.p variants={fadeItem}>
          It was an experiment in shapes, lines, and colour. I created a
          colour-blind safe palette to represent highest, middle, and lowest
          levels in an example scenario. It was a joy to work on.
        </motion.p>
        <motion.div variants={fadeItem}>
          <Image
            alt='A screenshot of intro section'
            height='973'
            width='1920'
            layout='responsive'
            src='https://user-images.githubusercontent.com/95392008/147842084-f1860bc3-3db4-4908-ab0b-926dbd840b99.png'
          />
        </motion.div>
        <motion.div variants={fadeItem}>
          <Image
            alt='A screenshot of basics section with multiple coloured rectangles'
            height='973'
            width='1920'
            layout='responsive'
            src='https://user-images.githubusercontent.com/95392008/147842087-944ae2e6-5dd2-40f8-b6c8-8ea8e7aef1c1.png'
          />
        </motion.div>
        <IconFooter
          variants={fadeContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <IconLink
            href='https://github.com/apriltaoyvr/levels-101'
            icon='fa-brands fa-github'
            variants={fadeItem}
          />
        </IconFooter>
      </StyledArticle>
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

export default levels101;
