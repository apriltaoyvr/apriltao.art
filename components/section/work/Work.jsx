import { Suspense } from 'react';
import { useTranslation } from 'next-i18next';

/* Components */
import Loading from '../../utility/loading/Loading';
import VideoLink from './VideoLink';
import ImageLink from './ImageLink';
import { WorkWrapper, ProjectWrapper } from './Work.styled';

const Projects = () => {
  const { t } = useTranslation('common');

  return (
    <WorkWrapper id='projects'>
      <hgroup>
        <h1>{t('projects.title')}</h1>
        <h2>{t('projects.subtitle')}</h2>
      </hgroup>
      <ProjectWrapper>
        <Suspense fallback={<Loading />}>
          <VideoLink
            href='https://www.ambrosialab.it'
            video='https://res.cloudinary.com/dsbhmynmq/video/upload/v1652570265/April%20Tao/Projects/AmbrosiaLab/2022-05-14_16-16-35_skywsw.mp4'
          />
          <VideoLink
            href='https://www.theripper93.com'
            video='https://res.cloudinary.com/dsbhmynmq/video/upload/v1652570268/April%20Tao/Projects/theripper93/2022-05-14_16-15-31_bdlkkc.mp4'
          />
          <ImageLink
            title='Dracula Foundry'
            href='https://github.com/apriltaoyvr/dracula-foundry'
            image='https://user-images.githubusercontent.com/95392008/147394179-6777840b-3554-4e9c-b4c3-50cd99616ee2.png'
          />
        </Suspense>
      </ProjectWrapper>
    </WorkWrapper>
  );
};

export default Projects;
