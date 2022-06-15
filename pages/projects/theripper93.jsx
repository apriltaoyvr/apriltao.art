/* Libs */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

/* Components */
import IconLink from '../../components/utility/IconLink/index';
import { IconFooter } from '../../components/utility/IconLink/index.styled';

/* Styles */
import {
  StyledArticle,
  StyledVideo,
  Gallery,
} from '../../components/subpage/index.styled';
import { fadeContainer, fadeItem } from '../../components/utility/framer';

const TheRipper93 = () => {
  const { t } = useTranslation('projects');

  return (
    <motion.main
      variants={fadeContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.header variants={fadeItem}>
        <h1>
          <Link href='https://theripper93.com/' passHref>
            theripper93
          </Link>
        </h1>
      </motion.header>
      <StyledVideo
        src='https://res.cloudinary.com/dsbhmynmq/video/upload/v1652570268/April%20Tao/Projects/theripper93/2022-05-14_16-15-31_bdlkkc.mp4'
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
        <motion.p variants={fadeItem}>{t('theripper93.paragraph.0')}</motion.p>
        <motion.p variants={fadeItem}>{t('theripper93.paragraph.1')}</motion.p>
        <Gallery variants={fadeItem}>
          <Image
            alt='A screenshot of the modules list, showing the items in a grid'
            height='973'
            width='1920'
            layout='responsive'
            src='https://user-images.githubusercontent.com/95392008/170850380-8fe67f93-d483-4557-b7cb-e40dc8227734.png'
          />
          <Image
            alt='A screenshot of the contact page in a honey gold'
            height='973'
            width='1920'
            layout='responsive'
            src='https://user-images.githubusercontent.com/95392008/170850387-b07a8778-a685-4105-ab23-54e92cf93589.png'
          />
        </Gallery>
        <IconFooter
          variants={fadeContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <IconLink
            href='https://theripper93.com/'
            icon={faGlobe}
            variants={fadeItem}
          />
          <IconLink
            href='https://github.com/theripper93/theripper93.com'
            icon={faGithub}
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
      ...(await serverSideTranslations(locale, ['common', 'projects'])),
    },
  };
}

export default TheRipper93;
