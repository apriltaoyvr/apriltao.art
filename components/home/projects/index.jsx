import { useTranslation } from 'next-i18next';
import { motion, MotionConfig } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

/* Components */
import ProjectLink from './ProjectLink';
import { WorkWrapper, ProjectWrapper } from './index.styled';
import {
  slideContainer,
  slideSubContainer,
  slideItem,
} from '../../utility/framer';

const Projects = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <MotionConfig reducedMotion='user'>
      <WorkWrapper id='projects'>
        <motion.hgroup
          variants={slideContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <motion.h2 variants={slideItem}>
            <Link href={'#projects'}>{t('projects.title')}</Link>
          </motion.h2>
          <motion.h4 variants={slideItem}>{t('projects.subtitle')}</motion.h4>
        </motion.hgroup>
        <ProjectWrapper
          variants={slideSubContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <ProjectLink
            title='AmbrosiaLab'
            href={`/projects/ambrosialab`}
            src='https://res.cloudinary.com/dsbhmynmq/video/upload/v1652570265/April%20Tao/Projects/AmbrosiaLab/2022-05-14_16-16-35_skywsw.mp4'
            video
          />
          <ProjectLink
            title='theripper93'
            href={`/projects/theripper93`}
            src='https://res.cloudinary.com/dsbhmynmq/video/upload/v1652570268/April%20Tao/Projects/theripper93/2022-05-14_16-15-31_bdlkkc.mp4'
            video
          />
          <ProjectLink
            title='Levels 101'
            href={`/projects/levels101`}
            src='https://user-images.githubusercontent.com/95392008/147842087-944ae2e6-5dd2-40f8-b6c8-8ea8e7aef1c1.png'
            alt='A screenshot of Levels 101'
          />
          <ProjectLink
            title='Dracula Foundry'
            href={`/projects/draculafoundry`}
            src='https://user-images.githubusercontent.com/95392008/147394179-6777840b-3554-4e9c-b4c3-50cd99616ee2.png'
            alt='A screenshot of Dracula Foundry in FoundryVTT'
          />
        </ProjectWrapper>
      </WorkWrapper>
    </MotionConfig>
  );
};

export default Projects;
