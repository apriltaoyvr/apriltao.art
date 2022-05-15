import VideoLink from './VideoLink';
import ImageLink from './ImageLink';
import { WorkWrapper, ProjectWrapper } from './Work.styled';

const Projects = () => {
  return (
    <WorkWrapper id='projects'>
      <hgroup>
        <h1>Projects</h1>
        <h2>Web Development and Design</h2>
      </hgroup>
      <ProjectWrapper>
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
      </ProjectWrapper>
    </WorkWrapper>
  );
};

export default Projects;
